import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';

/** Width the static HTML is rendered for (there is no window during static rendering). */
export const STATIC_RENDER_WIDTH = 1280;

let hydrated = false;

/**
 * Window width that is safe for statically rendered pages.
 *
 * React does not patch mismatched `style`/`className` values while hydrating, so a layout
 * computed from the real width on the first client render would keep the server's values
 * (e.g. paddings computed for 1280px). Until the app has hydrated this returns the same
 * width the HTML was rendered with, then switches to the real width, which re-renders
 * normally. Screens mounted after hydration (client-side navigation) get the real width
 * straight away.
 */
export function useViewportWidth() {
  const { width } = useWindowDimensions();
  const [ready, setReady] = useState(hydrated);

  useEffect(() => {
    hydrated = true;
    setReady(true);
  }, []);

  return ready && width ? width : STATIC_RENDER_WIDTH;
}
