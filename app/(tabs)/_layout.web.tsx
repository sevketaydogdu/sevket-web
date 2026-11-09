import { Slot, usePathname, useSegments } from 'expo-router';
import { useWindowDimensions, View } from 'react-native';

import NavbarV2, { DESKTOP_SIDEBAR_WIDTH } from '@/components/design-v2/NavbarV2';
import MobileBottomNav from '@/components/web/mobile/MobileBottomNav';
import MobileHeader from '@/components/web/mobile/MobileHeader';
import SidebarContainer from '@/components/web/sidebar/SidebarContainer';
import { useBreakPoints } from '@/hooks/useBreakPoints';

/** Set to true to use design v2 navbar (vertical sidebar on desktop, top bar + drawer on mobile). */
const USE_DESIGN_V2_NAVBAR = true;
const XL_BREAKPOINT = 1280;

export default function TabLayout() {
  const segments = useSegments();
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const { isCompact, isMobile } = useBreakPoints();
  const isHomePage = pathname === '/' || pathname === '';
  const isDesktopV2Nav = USE_DESIGN_V2_NAVBAR && width >= XL_BREAKPOINT;

  return (
    <View
      className="flex-1 min-h-screen h-screen  bg-background"
      style={{ overflowY: 'auto' as const, zIndex: 501 }}
      data-scroll-root="main">
      <svg
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full min-w-[80rem] h-auto z-0"
        style={{ opacity: 'var(--hero-blob-opacity)' }}
        width="1171"
        height="241"
        viewBox="0 0 1171 241"
        fill="none">
        <g filter="url(#filter0_f_layout)">
          <path
            d="M731.735 -179.55C596.571 -157.762 516.36 -74.1815 552.576 7.13199C588.793 88.4455 727.724 136.701 862.887 114.913C998.051 93.1247 1078.26 9.54454 1042.05 -71.769C1005.83 -153.082 866.898 -201.337 731.735 -179.55Z"
            fill="url(#paint0_linear_layout)"
          />
          <path
            d="M378 114.106C520.489 114.106 636 45.8883 636 -38.2623C636 -122.413 520.489 -190.63 378 -190.63C235.511 -190.63 120 -122.413 120 -38.2623C120 45.8883 235.511 114.106 378 114.106Z"
            fill="url(#paint1_linear_layout)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_layout"
            x="0"
            y="-310.63"
            width="1170.74"
            height="550.775"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient
            id="paint0_linear_layout"
            x1="567.5"
            y1="1.03997"
            x2="1029.02"
            y2="64.6468"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--hero-paint0-start)" />
            <stop offset="1" stopColor="var(--hero-paint0-end)" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_layout"
            x1="155"
            y1="-11.0234"
            x2="511.855"
            y2="-162.127"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--hero-paint1-0)" />
            <stop offset="0.504191" stopColor="var(--hero-paint1-50)" />
            <stop offset="1" stopColor="var(--hero-paint1-100)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mobile v2: NavbarV2 portals the top bar + drawer */}
      {USE_DESIGN_V2_NAVBAR && !isDesktopV2Nav && <NavbarV2 />}

      <View
        className="flex-row flex-1 left-0 right-0 justify-center relative w-full"
        style={{
          paddingTop: isDesktopV2Nav
            ? ('env(safe-area-inset-top, 0px)' as any)
            : (`calc(6rem + env(safe-area-inset-top, 0px))` as any),
        }}>
        {isDesktopV2Nav ? (
          /* Desktop v2: Twitter-style — sidebar + content inside centered max-w */
          <View className="max-w-7xl mx-auto flex-row flex-1 w-full">
            <NavbarV2 />
            <View
              className={`flex-1 w-full h-full safe-area-bottom min-w-0 ${
                !isHomePage ? 'max-w-6xl' : ''
              }`}>
              <Slot />
            </View>
          </View>
        ) : (
          <>
            {!isMobile && !USE_DESIGN_V2_NAVBAR && (
              <View
                className={`${
                  isCompact ? 'w-[72px]' : ''
                } items-end sticky top-0 border-r border-gray-500 h-screen`}>
                <SidebarContainer segments={segments as any} isCompact={isCompact} />
              </View>
            )}

            <View
              className={`flex-1 w-full h-full safe-area-bottom ${
                !isHomePage ? 'max-w-6xl mx-auto' : ''
              } ${isMobile && !USE_DESIGN_V2_NAVBAR ? 'pb-52' : ''}`}>
              {isMobile && !USE_DESIGN_V2_NAVBAR && <MobileHeader />}
              <Slot />
            </View>

            {isMobile && !USE_DESIGN_V2_NAVBAR && <MobileBottomNav />}
          </>
        )}
      </View>
    </View>
  );
}
