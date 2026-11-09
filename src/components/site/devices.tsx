import React from 'react';
import { Image, Platform, View, type ImageSourcePropType, type ViewStyle } from 'react-native';

import { cn } from '@/lib/utils';

/** One easing for the whole site: fast start, long soft settle. */
export const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

const prefersReducedMotion = () =>
  Platform.OS === 'web' &&
  typeof window !== 'undefined' &&
  !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** True once the element has scrolled into view (web). Native: always true. */
export function useInView<T>(margin = '0px 0px -12% 0px') {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(Platform.OS !== 'web');
  React.useEffect(() => {
    const el = ref.current as unknown as Element | null;
    if (!el || typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: margin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, inView] as const;
}

/** Fades and lifts its children in when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  distance = 28,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
  style?: ViewStyle;
}) {
  const [ref, inView] = useInView<View>();
  return (
    <View
      ref={ref}
      className={className}
      style={
        {
          opacity: inView ? 1 : 0,
          transform: [{ translateY: inView ? 0 : distance }],
          transitionProperty: 'opacity, transform',
          transitionDuration: '1100ms',
          transitionTimingFunction: EASE,
          transitionDelay: `${delay}ms`,
          ...style,
        } as any
      }>
      {children}
    </View>
  );
}

/**
 * Hardware-agnostic phone: a dark bezel with proportional radii and a layered
 * shadow. The screenshot is masked by the inner radius, so source images can
 * keep their own rounded corners.
 */
export function Phone({
  source,
  width = 260,
  aspect = 442 / 966,
  className,
  style,
}: {
  source: ImageSourcePropType;
  width?: number;
  /** Screen width / height. */
  aspect?: number;
  className?: string;
  style?: ViewStyle;
}) {
  const bezel = Math.max(4, Math.round(width * 0.034));
  const radius = Math.round(width * 0.155);
  return (
    <View
      className={cn(
        'bg-[#0b0b0b] shadow-[0_1px_0_rgba(255,255,255,0.10)_inset,0_50px_90px_-40px_rgba(0,0,0,0.6),0_24px_40px_-24px_rgba(0,0,0,0.45)]',
        className
      )}
      style={[
        { width, padding: bezel, borderRadius: radius },
        { outlineWidth: 1, outlineStyle: 'solid', outlineColor: 'rgba(255,255,255,0.06)' } as any,
        style,
      ]}>
      <View
        style={{
          width: '100%',
          aspectRatio: aspect,
          borderRadius: radius - bezel,
          overflow: 'hidden',
          backgroundColor: '#000',
        }}>
        <Image source={source} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
      </View>
    </View>
  );
}

/** Tracks the pointer over an element as -1…1 on each axis (web only). */
export function usePointer<T>() {
  const ref = React.useRef<T>(null);
  const [p, setP] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const el = ref.current as unknown as HTMLElement | null;
    if (!el || Platform.OS !== 'web' || prefersReducedMotion()) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1;
      const y = ((e.clientY - r.top) / r.height) * 2 - 1;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setP({ x, y }));
    };
    const onLeave = () => setP({ x: 0, y: 0 });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);
  return [ref, p] as const;
}
