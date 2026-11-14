import { useEffect, useLayoutEffect } from 'react';
import { Platform } from 'react-native';

/**
 * Web scroll behaviour for client-side navigation (the document is the scroll container):
 * - going to a new page (link click, router.push) starts at the top;
 * - going back/forward (browser buttons, history.back) returns to where the user was.
 *
 * Positions are saved at the moment a navigation starts (link click or popstate), not
 * from scroll events afterwards, because swapping to a shorter page makes the browser
 * clamp scrollY and would overwrite the real position.
 */

const positions = new Map<string, number>();
let currentPath = '';
let popPending = false;
let navigating = false;
let hasInAppHistory = false;
let cancelRestore: (() => void) | null = null;

const isWeb = Platform.OS === 'web' && typeof window !== 'undefined';
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function savePosition() {
  if (currentPath) positions.set(currentPath, window.scrollY);
}

let releaseTimer: ReturnType<typeof setTimeout> | undefined;
function beginNavigation() {
  savePosition();
  navigating = true;
  clearTimeout(releaseTimer);
  // Safety valve if the click did not actually change the route.
  releaseTimer = setTimeout(() => (navigating = false), 1000);
}

// Registered at module load and in the capture phase so it runs before React Navigation's
// own popstate listener: that one re-renders the previous page synchronously, and by then
// we must already know this is a back/forward navigation.
if (isWeb) {
  window.addEventListener(
    'popstate',
    () => {
      popPending = true;
      beginNavigation();
    },
    true
  );
}

function scrollToPosition(target: number) {
  cancelRestore?.();
  let frame = 0;
  let tries = 0;
  let stopped = false;

  const stop = () => {
    stopped = true;
    cancelAnimationFrame(frame);
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
    window.removeEventListener('keydown', stop);
    navigating = false;
    cancelRestore = null;
  };
  // The user taking over the scroll wins over restoring.
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });
  window.addEventListener('keydown', stop);
  cancelRestore = stop;

  // Content (images, lazy sections) can still be growing; retry for ~1s until we land.
  // 'instant' overrides the global `scroll-behavior: smooth`, which would otherwise animate
  // from the old position and never settle while we retry every frame.
  const step = () => {
    if (stopped) return;
    window.scrollTo({ top: target, left: 0, behavior: 'instant' as ScrollBehavior });
    if (Math.abs(window.scrollY - target) < 2 || ++tries > 60) return stop();
    frame = requestAnimationFrame(step);
  };
  step();
}

/** Go back in history when the previous entry is on this site, otherwise run `fallback`. */
export function goBackOr(fallback: () => void) {
  if (isWeb && hasInAppHistory) window.history.back();
  else fallback();
}

export function useScrollRestoration(pathname: string) {
  useEffect(() => {
    if (!isWeb) return;
    let frame = 0;

    const onScroll = () => {
      if (navigating) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(savePosition);
    };
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.('a[href]');
      if (anchor && !anchor.getAttribute('target')) beginNavigation();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!isWeb) return;
    const previous = currentPath;
    currentPath = pathname;
    if (!previous || previous === pathname) return; // first load: leave it to the browser

    hasInAppHistory = true;
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

    const target = popPending ? (positions.get(pathname) ?? 0) : 0;
    popPending = false;
    scrollToPosition(target);
  }, [pathname]);
}
