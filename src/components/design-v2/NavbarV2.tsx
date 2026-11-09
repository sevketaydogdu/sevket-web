import { useTheme } from '@/contexts/ThemeContext';
import { menuItems } from '@/constants/menu';
import { Feather } from '@expo/vector-icons';
import { Link, usePathname } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const NAV_LINKS = menuItems.filter((item) => item.href !== '/'); // Home is logo

/** Width of the vertical desktop sidebar. Export for layout to add margin. */
export const DESKTOP_SIDEBAR_WIDTH = 260;

// Light mode — soft pastel pill, violet line, orange glow
const PILL_GRADIENT = [
  'rgba(251, 207, 232, 0.4)', // pink-200/40
  'rgba(221, 214, 254, 0.4)', // violet-200/40
  'rgba(199, 210, 254, 0.4)', // indigo-200/40
] as const;
const LINE_GRADIENT = [
  'rgba(139, 92, 246, 0)',
  'rgba(167, 139, 250, 0.9)',
  'rgba(139, 92, 246, 0)',
] as const;
const GLOW_GRADIENT = ['rgba(246, 179, 92, 0.2)', 'transparent'] as const;

// Dark mode — deeper glassy pill, orange–violet line, stronger orange glow
const PILL_GRADIENT_DARK = [
  'rgba(139, 92, 246, 0.25)', // violet-500/25
  'rgba(99, 102, 241, 0.2)', // indigo-500/20
  'rgba(249, 115, 22, 0.18)', // orange-500/18
] as const;
const LINE_GRADIENT_DARK = [
  'rgba(249, 115, 22, 0)',
  'rgba(251, 146, 60, 0.95)',
  'rgba(249, 115, 22, 0)',
] as const;
const GLOW_GRADIENT_DARK = ['rgba(251, 146, 60, 0.35)', 'transparent'] as const;

const DRAWER_WIDTH = 320;
const XL_BREAKPOINT = 1280;

const NAVBAR_PORTAL_ID = 'navbar-portal-root';

function getNavbarPortalRoot(): HTMLElement {
  if (typeof document === 'undefined') return null!;
  let el = document.getElementById(NAVBAR_PORTAL_ID);
  if (!el) {
    el = document.createElement('div');
    el.id = NAVBAR_PORTAL_ID;
    el.style.position = 'fixed';
    el.style.top = '0';
    el.style.left = '0';
    el.style.right = '0';
    el.style.width = '100%';
    el.style.zIndex = '500';
    el.style.pointerEvents = 'none';
    document.body.insertBefore(el, document.body.firstChild);
  }
  return el;
}

/**
 * Design v2 — Twitter-style vertical sidebar on desktop, top bar + drawer on mobile.
 * Desktop: fixed left sidebar, full height, vertical nav, theme + CTA at bottom.
 * Mobile: logo left, hamburger right, slide-out menu.
 */
export default function NavbarV2() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const { colorScheme, toggleColorScheme } = useTheme();
  const isDark = colorScheme === 'dark';
  const isDesktop = Platform.OS === 'web' && width >= XL_BREAKPOINT;

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  const closeMenu = () => setMenuOpen(false);

  const lineColors = (isDark ? [...LINE_GRADIENT_DARK] : [...LINE_GRADIENT]) as readonly [
    string,
    string,
    ...string[],
  ];
  const glowColors = (isDark ? [...GLOW_GRADIENT_DARK] : [...GLOW_GRADIENT]) as readonly [
    string,
    string,
    ...string[],
  ];

  // —— Desktop: vertical left sidebar (fixed to viewport so it never scrolls with body) ——
  const desktopSidebar = (
    <View
      role={Platform.OS === 'web' ? 'navigation' : undefined}
      accessibilityLabel="Main navigation"
      style={[
        styles.desktopSidebarBase,
        Platform.OS === 'web' && styles.desktopSidebarFixed,
        { width: DESKTOP_SIDEBAR_WIDTH },
      ]}
      pointerEvents="auto"
      className="border-r border-gray-200 dark:border-white/10 bg-background/95 dark:bg-background/95 backdrop-blur-xl overflow-hidden">
      <View className="flex-1 px-3 min-h-0" style={{ flex: 1 }}>
        <View className="py-4 px-2 shrink-0">
          <Link href="/" asChild>
            <Pressable
              className="self-start active:opacity-90"
              accessibilityLabel="Home - Sevket Aydogdu">
              <View className="invert dark:invert-0">
                <Image
                  source={require('../../../assets/images/logo-white.png')}
                  style={styles.logoImageSidebar}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </Link>
        </View>
        <View className="gap-1 shrink-0">
          <Link href="/" asChild>
            <Pressable
              className={`flex-row items-center gap-3 rounded-full px-4 py-3 cursor-pointer ${isActive('/') ? 'bg-orange-500/15 dark:bg-orange-500/20' : ''}`}>
              <Text
                className={`text-base font-medium ${isActive('/') ? 'text-orange-500 dark:text-orange-400' : 'text-gray-800 dark:text-gray-200'}`}>
                Home
              </Text>
            </Pressable>
          </Link>
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href as any} asChild>
              <Pressable
                className={`flex-row items-center gap-3 rounded-full px-4 py-3 cursor-pointer ${isActive(item.href) ? 'bg-orange-500/15 dark:bg-orange-500/20' : ''}`}>
                <Text
                  className={`text-base font-medium ${isActive(item.href) ? 'text-orange-500 dark:text-orange-400' : 'text-gray-800 dark:text-gray-200'}`}>
                  {item.title}
                </Text>
              </Pressable>
            </Link>
          ))}
        </View>
        <View style={{ flex: 1 }} />
        <View className="pb-6 pt-2 gap-2 border-t border-gray-200/80 dark:border-white/10">
          <Pressable
            onPress={toggleColorScheme}
            className="flex-row items-center gap-3 rounded-full px-4 py-3 w-full bg-black/5 dark:bg-white/5 active:opacity-80"
            accessibilityLabel={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            accessibilityRole="button">
            {isDark ? (
              <Feather name="sun" size={20} color="#fafafa" />
            ) : (
              <Feather name="moon" size={20} color="#1f2937" />
            )}
            <Text className="text-base font-medium text-gray-800 dark:text-gray-200">
              {isDark ? 'Light mode' : 'Dark mode'}
            </Text>
          </Pressable>
          <Link href="/contact" asChild>
            <Pressable className="rounded-full overflow-hidden active:opacity-90 w-full">
              <View className="relative px-4 py-3 w-full items-center">
                {isDark ? (
                  <LinearGradient
                    colors={['#f97316', '#ea580c', '#c2410c']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFillObject}
                  />
                ) : (
                  <View style={[StyleSheet.absoluteFillObject, { backgroundColor: '#f97316' }]} />
                )}
                <Text className="text-white text-base font-semibold">Get in touch</Text>
              </View>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );

  const headerContent = (
    <View
      className="relative border-b border-gray-200 dark:border-white/10 backdrop-blur-xl overflow-hidden"
      role={Platform.OS === 'web' ? 'banner' : undefined}
      accessibilityRole="header"
      style={[
        Platform.OS === 'web' ? styles.headerFixed : undefined,
        // Platform.OS === 'web' ? { paddingTop: 'env(safe-area-inset-top, 0px)' } : undefined,
      ]}>
      {/* Dark mode: subtle top gradient for depth */}
      {/* {isDark && (
        <LinearGradient
          colors={['rgba(249, 115, 22, 0.06)', 'rgba(139, 92, 246, 0.03)', 'transparent']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={StyleSheet.absoluteFillObject}
          pointerEvents="none"
        />
      )} */}
      {/* Main bar — container mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-24 */}
      <View className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center h-24 relative z-10">
        {/* Logo menu — nav aria-label="Logo menu" */}
        <View className="relative z-[60] flex" accessibilityLabel="Logo menu">
          <Link href="/" asChild style={{ flexShrink: 0 }}>
            <Pressable className="active:opacity-90" accessibilityLabel="Home - Sevket Aydogdu">
              <View className="invert dark:invert-0">
                <Image
                  source={require('../../../assets/images/logo-white.png')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </Link>
        </View>

        {/* Mobile menu toggle — xl:hidden ml-auto, hamburger morphs to X (rotate 45deg) */}
        <Pressable
          onPress={() => setMenuOpen((o) => !o)}
          className="xl:hidden ml-auto relative z-[60] w-10 h-10 items-center justify-center rounded-full min-w-10 bg-black/6 dark:bg-white/8 active:opacity-90"
          style={({ pressed }) => [menuOpen && { opacity: 1 }, pressed && { opacity: 0.9 }]}
          accessibilityLabel={menuOpen ? 'Close main menu' : 'Open main menu'}
          accessibilityState={{ expanded: menuOpen }}
          accessibilityRole="button">
          <View className="w-6 h-5 justify-between">
            <View
              className="h-0.5 w-6 rounded-full bg-gray-900 dark:bg-white/95"
              style={menuOpen && { transform: [{ rotate: '45deg' }, { translateY: 9 }] }}
            />
            <View
              className="h-0.5 w-6 rounded-full bg-gray-900 dark:bg-white/95"
              style={menuOpen && { opacity: 0 }}
            />
            <View
              className="h-0.5 w-6 rounded-full bg-gray-900 dark:bg-white/95"
              style={menuOpen && { transform: [{ rotate: '-45deg' }, { translateY: -9 }] }}
            />
          </View>
        </Pressable>

        {/* Desktop nav — centered pill: light = white/75 + pastel gradient; dark = glass + violet–orange gradient */}
        <View
          className="hidden xl:flex flex-1 justify-center absolute left-0 right-0 pointer-events-none"
          accessibilityLabel="Main menu">
          <View
            className={`flex-row items-center self-center rounded-full border px-3 overflow-hidden  pointer-events-auto ${
              isDark
                ? 'border-white/15 ring-1 ring-white/10'
                : 'border-white/50 ring-1 ring-gray-800/[0.075] shadow-gray-800/5'
            } bg-neutral-100/40 dark:bg-neutral-800/10`}
            style={styles.navPill}>
            <View className="flex-row items-center shrink-0 relative z-10">
              <Link href="/" asChild>
                <Pressable className="flex-none group relative px-3 py-2.5 cursor-pointer">
                  <Text
                    className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 ${isActive('/') ? 'text-orange-500 dark:text-orange-400' : 'text-gray-800 dark:text-gray-200 group-hover:text-orange-500 dark:group-hover:text-orange-400'}`}>
                    Home
                  </Text>
                </Pressable>
              </Link>
              {NAV_LINKS.map((item) => (
                <Link key={item.href} href={item.href as any} asChild>
                  <Pressable className="flex-none group relative px-3 py-2.5 cursor-pointer">
                    <View
                      className="absolute left-1 right-1 h-px -bottom-0.5 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition duration-300"
                      style={styles.navLineWrap}>
                      {/* <LinearGradient
                        colors={lineColors}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.navLine}
                      /> */}
                    </View>
                    {/* <View
                      className="absolute left-4 right-4 -bottom-2 overflow-hidden opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition duration-300 origin-bottom"
                      style={styles.navGlowWrap}>
                      <View className="w-full h-full blur rounded-t-full">
                        <LinearGradient
                          colors={glowColors}
                          start={{ x: 0.5, y: 1 }}
                          end={{ x: 0.5, y: 0 }}
                          style={styles.navGlow}
                        />
                      </View>
                    </View> */}
                    <Text
                      className={`text-sm font-medium whitespace-nowrap transition-colors duration-300 ${isActive(item.href) ? 'text-orange-500 dark:text-orange-400' : 'text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400'}`}>
                      {item.title}
                    </Text>
                  </Pressable>
                </Link>
              ))}
            </View>
          </View>
        </View>

        {/* Desktop: theme toggle + CTA — right side of navbar */}
        <View className="hidden xl:flex flex-row items-center gap-3 flex-shrink-0 ml-auto">
          <Pressable
            onPress={toggleColorScheme}
            className="w-10 h-10 items-center justify-center rounded-full bg-black/6 dark:bg-white/8 active:opacity-80"
            style={({ pressed }) => [pressed && { opacity: 0.5 }]}
            accessibilityLabel={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            accessibilityRole="button">
            {isDark ? (
              <Feather name="sun" size={20} color="#fafafa" />
            ) : (
              <Feather name="moon" size={20} color="#1f2937" />
            )}
          </Pressable>
          <Link href="/contact" asChild>
            <Pressable
              className="rounded-full overflow-hidden active:opacity-90"
              style={({ pressed }) => [pressed && { opacity: 0.9 }]}>
              <View className="relative px-5 py-2.5">
                {isDark ? (
                  <LinearGradient
                    colors={['#f97316', '#ea580c', '#c2410c']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFillObject}
                  />
                ) : (
                  <View style={[StyleSheet.absoluteFillObject, { backgroundColor: '#f97316' }]} />
                )}
                <Text className="text-white text-sm font-semibold">Get in touch</Text>
              </View>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Mobile overlay — full viewport on web so it covers page */}
      {menuOpen && (
        <Pressable
          onPress={closeMenu}
          className="xl:hidden z-[45] bg-black/50"
          style={
            Platform.OS === 'web'
              ? { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 45 }
              : [StyleSheet.absoluteFillObject, { top: 96, zIndex: 45 }]
          }
          accessibilityLabel="Close menu"
        />
      )}

      {/* Mobile slide-out drawer — NativeWind bg-card; dark: subtle gradient */}
      <View
        className="xl:hidden z-50 border-r border-gray-200 dark:border-white/10 pt-24 pb-8 bg-card overflow-hidden"
        accessibilityLabel="Main menu"
        style={[
          styles.drawer,
          {
            width: DRAWER_WIDTH,
            transform: [{ translateX: menuOpen ? 0 : -DRAWER_WIDTH }],
            ...(Platform.OS === 'web'
              ? { position: 'fixed' as const, top: 0, left: 0, bottom: 0, zIndex: 50 }
              : { position: 'absolute' as const, left: 0, top: 96, bottom: 0 }),
          },
        ]}>
        {isDark && (
          <LinearGradient
            colors={['rgba(249, 115, 22, 0.08)', 'transparent', 'rgba(139, 92, 246, 0.05)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[StyleSheet.absoluteFillObject, { pointerEvents: 'none' }]}
          />
        )}
        <ScrollView className="flex-1 px-6 relative z-10" showsVerticalScrollIndicator={false}>
          <Link href="/" asChild>
            <Pressable
              onPress={closeMenu}
              className={`py-3.5 border-b border-gray-200 dark:border-white/10 ${isActive('/') ? 'bg-orange-500/10' : ''}`}>
              <Text
                className={`text-base font-medium ${isActive('/') ? 'text-orange-500 dark:text-orange-400' : 'text-gray-900 dark:text-white'}`}>
                Home
              </Text>
            </Pressable>
          </Link>
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href as any} asChild>
              <Pressable
                onPress={closeMenu}
                className={`py-3.5 border-b border-gray-200 dark:border-white/10 ${isActive(item.href) ? 'bg-orange-500/10' : ''}`}>
                <Text
                  className={`text-base font-medium ${isActive(item.href) ? 'text-orange-500 dark:text-orange-400' : 'text-gray-900 dark:text-white'}`}>
                  {item.title}
                </Text>
              </Pressable>
            </Link>
          ))}
          <View className="pt-6 flex-row items-center gap-3">
            <Pressable
              onPress={toggleColorScheme}
              className="w-12 h-12 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-black/[0.04] dark:bg-white/8"
              accessibilityLabel={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              accessibilityRole="button">
              {isDark ? (
                <Feather name="sun" size={22} color="#fafafa" />
              ) : (
                <Feather name="moon" size={22} color="#1f2937" />
              )}
            </Pressable>
            <Link href="/contact" asChild>
              <Pressable
                onPress={closeMenu}
                className="flex-1 rounded-xl bg-orange-500 py-3.5 items-center">
                <Text className="text-white font-semibold">Get in touch</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </View>
    </View>
  );

  // Desktop: portal the sidebar with position:fixed so it stays fixed when body scrolls. Mobile: portal the top bar + drawer.
  if (Platform.OS === 'web' && isDesktop && typeof document !== 'undefined' && document.body) {
    const { createPortal } = require('react-dom');
    return createPortal(desktopSidebar, getNavbarPortalRoot());
  }

  if (Platform.OS === 'web' && typeof document !== 'undefined' && document.body) {
    const { createPortal } = require('react-dom');
    return createPortal(headerContent, getNavbarPortalRoot());
  }
  return headerContent;
}

const styles = StyleSheet.create({
  logoImage: {
    width: 110,
    height: 36,
  },
  logoImageSidebar: {
    width: 100,
    height: 32,
  },
  desktopSidebarBase: {
    flexDirection: 'column',
    paddingTop: Platform.OS === 'web' ? ('env(safe-area-inset-top, 0px)' as any) : 0,
    paddingBottom: Platform.OS === 'web' ? ('env(safe-area-inset-bottom, 0px)' as any) : 0,
  },
  desktopSidebarFixed: {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    height: '100vh' as any,
    zIndex: 500,
  },
  navPill: {},
  navLineWrap: {
    minHeight: 1,
    height: 1,
  },
  navLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1,
    minHeight: 1,
  },
  navGlowWrap: {
    top: 0,
    left: 16,
    right: 16,
    bottom: -8,
  },
  navGlow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    borderTopLeftRadius: 9999,
    borderTopRightRadius: 9999,
  },
  headerFixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 500,
  },
  drawer: {},
});
