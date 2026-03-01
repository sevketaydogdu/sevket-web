---
name: sevket-web-ui
description: UI and frontend conventions for the sevket-web project. Use when building or editing screens, components, or styles in this repo. Covers React Native Web, Expo, NativeWind/Tailwind, theme tokens, section layout, and file structure.
---

# Sevket Web — Project UI Conventions

Apply this skill when working on any UI, screens, or styling in the sevket-web repository.

## Stack

- **Framework**: React Native (Web) with Expo Router
- **Styling**: NativeWind (Tailwind CSS), `global.css` for base and component classes
- **Animation**: react-native-reanimated (use `animations` from `@/constants/animations`)
- **Routing**: Expo Router — `app/(tabs)/` for main tabs, file-based routes

## Theme

- **Background**: `bg-background` → `rgb(10, 10, 10)`; cards/surfaces: `bg-background2` → `#1A1A1A`
- **Accent**: Orange — use `text-orange-400`, `bg-orange-500`, `border-orange-500`, etc.
- **Text**: White with opacity for hierarchy (`text-white/90`, `text-white/60`, `text-white/50`)
- **Scrollbar**: Themed in `global.css` (orange thumb); no need to restyle

## Layout & Typography

Use existing utilities from `global.css`:

- **Section wrapper**: `section-container` — max-width, horizontal padding, vertical rhythm (`max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24`)
- **Section title**: `title-h2` — large white bold heading
- **Section label** (small uppercase): `title-h2-accent` — orange-tinted, uppercase, tracking-widest

Example section structure:

```tsx
<View className="section-container">
  <Text className="title-h2-accent">Section label</Text>
  <Text className="title-h2">Section title</Text>
  {/* content */}
</View>
```

## File Structure

- **Screens**: `src/screens/<feature>/` — e.g. `home.web.tsx`, `aboutme.web.tsx`; split `.web.tsx` / `.native.tsx` when needed
- **Components**: `src/components/` — shared (e.g. `skill-bar`, `job-history`, `project-list`)
- **Constants**: `src/constants/` — `animations`, `skills`, `projects`, `job-history`
- **App routes**: `app/(tabs)/` — index, aboutme, projects, contact; `app/(tabs)/_layout.web.tsx` for sidebar/bottom nav

## Patterns

- **Links**: Use `Link` from `expo-router` with `href={'/route' as any}` and `asChild`; wrap `Pressable` for custom styling
- **Entrance animations**: Use `Animated.View` / `Animated.Text` with `entering={animations.entering.fade}` or `slideInDown` / `slideInLeft` / `slideInRight`, optionally `.delay(n)`
- **Gradients**: Use `LinearGradient` from `expo-linear-gradient` for backgrounds or buttons; React Native does not support CSS `background-image`
- **Images**: `require('../../../../assets/images/...')` from `src/screens/...` (adjust depth); use `resizeMode="cover"` for photos

## Do

- Reuse `section-container`, `title-h2`, `title-h2-accent` for new sections
- Keep dark theme and orange accent consistent
- Use existing `animations` from `@/constants/animations`
- Prefer Tailwind/NativeWind classes; add new utilities in `global.css` only when needed

## Avoid

- Introducing a second accent color or light theme unless explicitly requested
- Reimplementing section layout without using `section-container`
- Using inline styles for gradients; use `LinearGradient` instead
- Adding new global CSS without checking existing `@layer components` in `global.css`
