import Head from 'expo-router/head';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

// Landing page for Zikirmatik circle invites: https://sevketaydogdu.com/zikirmatik/c/<code>
// With the app installed, iOS Universal Links / Android App Links open the app
// directly and this page is never shown. Without it, the visitor gets the store
// button for their device and the code to type after installing.

const IOS_URL = 'https://apps.apple.com/app/id6450431673';
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.antiquemedia.zikirmatik';
const APP_SCHEME = 'com.antiquemedia.zikirmatik://zikirmatik/c/';

type Lang = 'en' | 'tr' | 'ar' | 'ms' | 'id';

const COPY: Record<Lang, Record<string, string>> = {
  en: {
    title: "You're invited to a dhikr circle",
    body: 'Count together toward a shared goal with Easy Dhikr. Install the app, open Dhikr Circles → Join, and enter this code:',
    copy: 'Copy code',
    copied: 'Copied',
    open: 'I have the app: open it',
    ios: 'Download on the App Store',
    android: 'Get it on Google Play',
  },
  tr: {
    title: 'Bir zikir halkasına davet edildin',
    body: 'Kolay Zikir ile ortak bir hedefe birlikte zikir çekin. Uygulamayı indir, Zikir Halkaları → Katıl bölümünü aç ve bu kodu gir:',
    copy: 'Kodu kopyala',
    copied: 'Kopyalandı',
    open: 'Uygulama yüklü: aç',
    ios: "App Store'dan indir",
    android: "Google Play'den indir",
  },
  ar: {
    title: 'تمت دعوتك إلى حلقة ذكر',
    body: 'اذكروا الله معًا نحو هدف مشترك. ثبّت التطبيق، وافتح حلقات الذكر ← انضمام، وأدخل هذا الرمز:',
    copy: 'نسخ الرمز',
    copied: 'تم النسخ',
    open: 'التطبيق مثبت: افتحه',
    ios: 'التنزيل من App Store',
    android: 'احصل عليه من Google Play',
  },
  ms: {
    title: 'Anda dijemput ke halaqah zikir',
    body: 'Berzikir bersama ke arah sasaran yang sama. Pasang aplikasi, buka Halaqah Zikir → Sertai, dan masukkan kod ini:',
    copy: 'Salin kod',
    copied: 'Disalin',
    open: 'Aplikasi sudah dipasang: buka',
    ios: 'Muat turun di App Store',
    android: 'Dapatkan di Google Play',
  },
  id: {
    title: 'Anda diundang ke majelis dzikir',
    body: 'Berdzikir bersama menuju target yang sama. Pasang aplikasi, buka Majelis Dzikir → Gabung, lalu masukkan kode ini:',
    copy: 'Salin kode',
    copied: 'Tersalin',
    open: 'Aplikasi sudah terpasang: buka',
    ios: 'Unduh di App Store',
    android: 'Dapatkan di Google Play',
  },
};

// ?lang=tr overrides the browser language (handy for previews and tests).
const detectLang = (override?: string): Lang => {
  if (override && override in COPY) return override as Lang;
  if (typeof navigator === 'undefined') return 'en';
  const code = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return (code in COPY ? code : 'en') as Lang;
};

const detectOS = (): 'ios' | 'android' | 'other' => {
  if (typeof navigator === 'undefined') return 'other';
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return 'android';
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && 'ontouchend' in document)) {
    return 'ios';
  }
  return 'other';
};

const go = (url: string) => {
  if (Platform.OS === 'web' && typeof window !== 'undefined') window.location.href = url;
};

export default function CircleInvitePage() {
  const { code: rawCode, lang: langParam } = useLocalSearchParams<{
    code: string;
    lang?: string;
  }>();
  const code = String(rawCode ?? '').trim().toUpperCase();

  // Language and OS are read after hydration so the static HTML stays stable.
  const [lang, setLang] = useState<Lang>('en');
  const [os, setOS] = useState<'ios' | 'android' | 'other'>('other');
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setLang(detectLang(langParam));
    setOS(detectOS());
  }, [langParam]);

  const t = COPY[lang];
  const rtl = lang === 'ar';

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the code is still visible to type.
    }
  };

  const stores = [
    { key: 'ios', label: t.ios, url: IOS_URL },
    { key: 'android', label: t.android, url: ANDROID_URL },
  ].filter((s) => os === 'other' || s.key === os);

  return (
    <View style={styles.page}>
      <Head>
        <title>Dhikr circle invite · Easy Dhikr</title>
        <meta name="description" content="Join a dhikr circle and count together toward a shared goal." />
        <meta property="og:title" content="You're invited to a dhikr circle" />
        <meta property="og:description" content="Count together toward a shared goal with Easy Dhikr." />
        <meta name="robots" content="noindex" />
      </Head>
      <View style={[styles.card, rtl && styles.rtl]}>
        <Text style={styles.eyebrow}>Easy Dhikr · Kolay Zikir</Text>
        <Text style={[styles.title, rtl && styles.rtlText]}>{t.title}</Text>
        <Text style={[styles.body, rtl && styles.rtlText]}>{t.body}</Text>

        <View style={styles.codeRow}>
          <Text style={styles.code} selectable>
            {code}
          </Text>
          <Pressable onPress={copyCode} style={styles.copyBtn} accessibilityRole="button">
            <Text style={styles.copyText}>{copied ? t.copied : t.copy}</Text>
          </Pressable>
        </View>

        {stores.map((s) => (
          <Pressable
            key={s.key}
            onPress={() => go(s.url)}
            style={styles.primaryBtn}
            accessibilityRole="link"
          >
            <Text style={styles.primaryText}>{s.label}</Text>
          </Pressable>
        ))}

        {os !== 'other' && (
          <Pressable
            onPress={() => go(APP_SCHEME + encodeURIComponent(code))}
            style={styles.secondaryBtn}
            accessibilityRole="link"
          >
            <Text style={styles.secondaryText}>{t.open}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const GREEN = '#22a55a';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    minHeight: '100vh' as unknown as number,
    backgroundColor: '#04150b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 48,
  },
  card: {
    width: '100%',
    maxWidth: 440,
    gap: 16,
  },
  rtl: { direction: 'rtl' } as object,
  rtlText: { textAlign: 'right' },
  eyebrow: { color: '#7fd8a1', fontSize: 14, fontWeight: '600', letterSpacing: 0.4 },
  title: { color: '#fff', fontSize: 30, lineHeight: 36, fontWeight: '700' },
  body: { color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 24 },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(127,216,161,0.35)',
    backgroundColor: 'rgba(34,165,90,0.12)',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginVertical: 8,
  },
  code: { color: '#fff', fontSize: 26, fontWeight: '700', letterSpacing: 3 },
  copyBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  copyText: { color: '#7fd8a1', fontSize: 14, fontWeight: '600' },
  primaryBtn: { backgroundColor: GREEN, borderRadius: 999, paddingVertical: 16, alignItems: 'center' },
  primaryText: { color: '#fff', fontSize: 17, fontWeight: '700' },
  secondaryBtn: { paddingVertical: 12, alignItems: 'center' },
  secondaryText: { color: '#7fd8a1', fontSize: 15, fontWeight: '600' },
});
