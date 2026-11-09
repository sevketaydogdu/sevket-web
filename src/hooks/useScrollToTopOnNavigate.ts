'use client';

import { useNavigationContainerRef } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

function scrollToTop() {
  if (typeof window === 'undefined') return;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * On web, the document/body is the scroll container. When navigating between
 * screens, the scroll position is preserved. This hook subscribes to navigation
 * state changes and scrolls to top so each screen starts at the top.
 */
export function useScrollToTopOnNavigate() {
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    if (Platform.OS !== 'web' || typeof window === 'undefined') return;

    let unsubscribe: (() => void) | undefined;

    const scheduleScroll = () => {
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToTop()));
      setTimeout(scrollToTop, 80);
    };

    const trySubscribe = () => {
      const ref = navigationRef.current;
      if (!ref) return false;
      const sub = ref.addListener('state', scheduleScroll);
      unsubscribe = typeof sub === 'function' ? sub : sub?.remove;
      return true;
    };

    if (!trySubscribe()) {
      const id = setTimeout(() => {
        trySubscribe();
      }, 150);
      return () => {
        clearTimeout(id);
        unsubscribe?.();
      };
    }

    return () => unsubscribe?.();
  }, [navigationRef]);
}
