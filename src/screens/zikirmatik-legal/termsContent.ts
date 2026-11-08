import type { LegalSection } from './LegalPage';

const EMAIL = 'sevket@antiquemedia.net';
const MAILTO = `mailto:${EMAIL}`;
const PRIVACY_URL = 'https://sevketaydogdu.com/zikirmatik/privacy';
const APPLE_SUBS = 'https://apps.apple.com/account/subscriptions';
const GOOGLE_SUBS = 'https://play.google.com/store/account/subscriptions';
const APPLE_REFUND = 'https://reportaproblem.apple.com';
const GOOGLE_REFUND = 'https://support.google.com/googleplay/answer/2479637';

export const termsSections: LegalSection[] = [
  {
    lang: 'en',
    title: 'Zikirmatik (Easy Dhikr) Terms of Use',
    lastUpdated: 'Last updated: 8 November 2026',
    blocks: [
      {
        type: 'p',
        text: [
          'These Terms of Use ("Terms") govern your use of the Zikirmatik / Easy Dhikr mobile application ("the App", bundle ID com.antiquemedia.zikirmatik), provided by Şevket Aydoğdu. By downloading or using the App you agree to these Terms. Please also read our ',
          { text: 'Privacy Policy', url: PRIVACY_URL },
          '.',
        ],
      },
      { type: 'h2', text: '1. The App' },
      {
        type: 'p',
        text: 'The App lets you count and track dhikr, keep dhikr lists and join shared dhikr rooms (circles). A free version with ads and an optional premium subscription are available.',
      },
      { type: 'h2', text: '2. Premium subscriptions' },
      {
        type: 'ul',
        items: [
          'Premium is offered as an auto-renewable subscription with a monthly and a yearly plan. Prices are shown in the App before you purchase and may vary by country.',
          'The yearly plan includes a 7-day free trial for new subscribers. If you do not cancel at least 24 hours before the trial ends, the yearly subscription starts and you are charged automatically. Any unused part of a free trial is forfeited when you purchase a subscription, where applicable.',
          'Payment is charged to your Apple ID account (App Store) or Google account (Google Play) at confirmation of purchase, or when the free trial ends.',
          'Subscriptions renew automatically for the same period and price unless auto-renew is turned off at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the end of the current period.',
        ],
      },
      { type: 'h2', text: '3. Managing and cancelling' },
      {
        type: 'ul',
        items: [
          [
            'iPhone / iPad: open Settings > [your name] > Subscriptions, or visit ',
            { text: APPLE_SUBS, url: APPLE_SUBS },
            '.',
          ],
          [
            'Android: open the Google Play Store app > Profile > Payments & subscriptions > Subscriptions, or visit ',
            { text: GOOGLE_SUBS, url: GOOGLE_SUBS },
            '.',
          ],
          'Cancelling stops future renewals; you keep premium access until the end of the period you have already paid for. Deleting the App does not cancel a subscription.',
        ],
      },
      { type: 'h2', text: '4. Refunds' },
      {
        type: 'p',
        text: [
          'All payments are processed by Apple or Google, and refunds are handled by them under their policies. We cannot issue refunds directly. You can request a refund from Apple at ',
          { text: APPLE_REFUND, url: APPLE_REFUND },
          ' or from Google Play as described at ',
          { text: GOOGLE_REFUND, url: GOOGLE_REFUND },
          '.',
        ],
      },
      { type: 'h2', text: '5. Public rooms and acceptable use' },
      {
        type: 'ul',
        items: [
          'Room names and display names may be visible to other users. You are responsible for what you enter.',
          'Do not create rooms or use names that are offensive, hateful, insulting, sexually explicit, violent, misleading, or that mock religious beliefs or any group of people.',
          'Do not use the App for spam, harassment, impersonation, illegal activity, or to disrupt the service (for example by artificially inflating counts or abusing the servers).',
          'We may rename, hide or remove rooms or names, and suspend or delete accounts, that break these rules.',
        ],
      },
      { type: 'h2', text: '6. Your account and data' },
      {
        type: 'p',
        text: 'An anonymous account is created automatically; signing in with Apple or Google is optional and helps you keep your data across devices. You can delete your account at any time in the App (Settings > Delete Account). How we handle your data is described in the Privacy Policy.',
      },
      { type: 'h2', text: '7. Intellectual property' },
      {
        type: 'p',
        text: 'The App, its design, code and content (excluding content you create) belong to Şevket Aydoğdu or its licensors. You receive a personal, non-exclusive, non-transferable licence to use the App on devices you own or control, in line with these Terms and the App Store / Google Play terms.',
      },
      { type: 'h2', text: '8. Disclaimer' },
      {
        type: 'p',
        text: 'The App is provided "as is" and "as available", without warranties of any kind, express or implied. We do not guarantee that the App will be uninterrupted or error-free, or that counts and data will never be lost. The App is a counting and tracking tool; it does not provide religious rulings or guidance.',
      },
      { type: 'h2', text: '9. Limitation of liability' },
      {
        type: 'p',
        text: 'To the maximum extent permitted by law, Şevket Aydoğdu is not liable for any indirect, incidental, special or consequential damages, or for loss of data, arising from your use of or inability to use the App. Our total liability for any claim relating to the App is limited to the amount you paid for the App in the 12 months before the claim. Nothing in these Terms limits liability that cannot be limited under applicable law or your statutory consumer rights.',
      },
      { type: 'h2', text: '10. Changes and termination' },
      {
        type: 'p',
        text: 'We may update the App and these Terms from time to time. The "Last updated" date shows the latest version; continuing to use the App after a change means you accept the updated Terms. You may stop using the App at any time.',
      },
      { type: 'h2', text: '11. Governing law' },
      {
        type: 'p',
        text: 'These Terms are governed by the laws of the Republic of Türkiye. Disputes are subject to the competent courts and consumer arbitration committees of Türkiye, without prejudice to mandatory consumer protection rules of your country of residence.',
      },
      { type: 'h2', text: '12. Apple-specific terms' },
      {
        type: 'p',
        text: 'If you downloaded the App from the App Store, Apple’s standard Licensed Application End User License Agreement also applies. Apple is not responsible for the App or its content and has no obligation to provide support for it.',
      },
      { type: 'h2', text: '13. Contact' },
      {
        type: 'p',
        text: ['Şevket Aydoğdu — ', { text: EMAIL, url: MAILTO }],
      },
    ],
  },
  {
    lang: 'tr',
    title: 'Zikirmatik (Kolay Zikir) Kullanım Koşulları',
    lastUpdated: 'Son güncelleme: 8 Kasım 2026',
    blocks: [
      {
        type: 'p',
        text: [
          'Bu Kullanım Koşulları ("Koşullar"), Şevket Aydoğdu tarafından sunulan Zikirmatik / Easy Dhikr mobil uygulamasının ("Uygulama", paket kimliği com.antiquemedia.zikirmatik) kullanımını düzenler. Uygulamayı indirerek veya kullanarak bu Koşulları kabul etmiş olursunuz. Lütfen ',
          { text: 'Gizlilik Politikamızı', url: PRIVACY_URL },
          ' da okuyun.',
        ],
      },
      { type: 'h2', text: '1. Uygulama' },
      {
        type: 'p',
        text: 'Uygulama; zikir saymanızı ve takip etmenizi, zikir listeleri tutmanızı ve ortak zikir halkalarına (odalara) katılmanızı sağlar. Reklamlı ücretsiz bir sürüm ve isteğe bağlı premium abonelik sunulur.',
      },
      { type: 'h2', text: '2. Premium abonelikler' },
      {
        type: 'ul',
        items: [
          'Premium, aylık ve yıllık planları olan otomatik yenilenen bir abonelik olarak sunulur. Fiyatlar satın almadan önce Uygulamada gösterilir ve ülkeye göre değişebilir.',
          'Yıllık plan, yeni aboneler için 7 günlük ücretsiz deneme içerir. Deneme bitmeden en az 24 saat önce iptal etmezseniz yıllık abonelik başlar ve ücret otomatik olarak tahsil edilir. Geçerli olduğu durumlarda, abonelik satın aldığınızda ücretsiz denemenin kullanılmayan kısmı sona erer.',
          'Ödeme, satın alma onaylandığında veya ücretsiz deneme bittiğinde Apple Kimliği hesabınızdan (App Store) ya da Google hesabınızdan (Google Play) tahsil edilir.',
          'Otomatik yenileme, mevcut dönemin bitiminden en az 24 saat önce kapatılmadığı sürece abonelik aynı süre ve fiyatla otomatik olarak yenilenir. Yenileme ücreti, mevcut dönemin bitiminden önceki 24 saat içinde tahsil edilir.',
        ],
      },
      { type: 'h2', text: '3. Yönetme ve iptal' },
      {
        type: 'ul',
        items: [
          [
            'iPhone / iPad: Ayarlar > [adınız] > Abonelikler bölümünü açın veya ',
            { text: APPLE_SUBS, url: APPLE_SUBS },
            ' adresini ziyaret edin.',
          ],
          [
            'Android: Google Play Store uygulaması > Profil > Ödemeler ve abonelikler > Abonelikler bölümünü açın veya ',
            { text: GOOGLE_SUBS, url: GOOGLE_SUBS },
            ' adresini ziyaret edin.',
          ],
          'İptal, sonraki yenilemeleri durdurur; ödemesini yaptığınız dönemin sonuna kadar premium erişiminiz devam eder. Uygulamayı silmek aboneliği iptal etmez.',
        ],
      },
      { type: 'h2', text: '4. İadeler' },
      {
        type: 'p',
        text: [
          'Tüm ödemeler Apple veya Google tarafından işlenir ve iadeler onların politikalarına göre yine onlar tarafından değerlendirilir. Doğrudan iade yapamayız. Apple’dan iade talebi için ',
          { text: APPLE_REFUND, url: APPLE_REFUND },
          ', Google Play için ',
          { text: GOOGLE_REFUND, url: GOOGLE_REFUND },
          ' adresindeki adımları izleyebilirsiniz.',
        ],
      },
      { type: 'h2', text: '5. Herkese açık halkalar ve kabul edilebilir kullanım' },
      {
        type: 'ul',
        items: [
          'Halka (oda) adları ve görünen adlar diğer kullanıcılar tarafından görülebilir. Girdiğiniz içerikten siz sorumlusunuz.',
          'Saldırgan, nefret içeren, hakaret eden, müstehcen, şiddet içeren, yanıltıcı ya da dini inançlarla veya herhangi bir grupla alay eden halka adları veya kullanıcı adları kullanmayın.',
          'Uygulamayı spam, taciz, başkasını taklit etme, yasa dışı faaliyetler veya hizmeti bozmak (ör. sayaçları yapay olarak şişirmek ya da sunucuları kötüye kullanmak) için kullanmayın.',
          'Bu kurallara aykırı halkaları veya adları yeniden adlandırabilir, gizleyebilir ya da kaldırabilir; ilgili hesapları askıya alabilir veya silebiliriz.',
        ],
      },
      { type: 'h2', text: '6. Hesabınız ve verileriniz' },
      {
        type: 'p',
        text: 'Anonim bir hesap otomatik olarak oluşturulur; Apple veya Google ile giriş isteğe bağlıdır ve verilerinizi cihazlar arasında korumanıza yardımcı olur. Hesabınızı istediğiniz zaman Uygulamada (Ayarlar > Hesabı Sil) silebilirsiniz. Verilerinizi nasıl işlediğimiz Gizlilik Politikasında açıklanmıştır.',
      },
      { type: 'h2', text: '7. Fikri mülkiyet' },
      {
        type: 'p',
        text: 'Uygulama, tasarımı, kodu ve içeriği (sizin oluşturduğunuz içerik hariç) Şevket Aydoğdu’ya veya lisans verenlerine aittir. Size, bu Koşullar ile App Store / Google Play koşullarına uygun olarak Uygulamayı sahip olduğunuz veya kontrol ettiğiniz cihazlarda kullanmanız için kişisel, münhasır olmayan ve devredilemez bir lisans verilir.',
      },
      { type: 'h2', text: '8. Sorumluluk reddi' },
      {
        type: 'p',
        text: 'Uygulama, açık veya örtülü hiçbir garanti verilmeksizin "olduğu gibi" ve "mevcut olduğu şekilde" sunulur. Uygulamanın kesintisiz veya hatasız çalışacağını ya da sayaçların ve verilerin hiçbir zaman kaybolmayacağını garanti etmeyiz. Uygulama bir sayma ve takip aracıdır; dini hüküm veya rehberlik sunmaz.',
      },
      { type: 'h2', text: '9. Sorumluluğun sınırlandırılması' },
      {
        type: 'p',
        text: 'Yasaların izin verdiği azami ölçüde Şevket Aydoğdu, Uygulamanın kullanımından veya kullanılamamasından doğan dolaylı, arızi, özel veya sonuç niteliğindeki zararlardan ya da veri kaybından sorumlu değildir. Uygulamayla ilgili herhangi bir talep için toplam sorumluluğumuz, talepten önceki 12 ay içinde Uygulama için ödediğiniz tutarla sınırlıdır. Bu Koşullardaki hiçbir hüküm, yürürlükteki mevzuat gereği sınırlandırılamayan sorumlulukları veya yasal tüketici haklarınızı sınırlamaz.',
      },
      { type: 'h2', text: '10. Değişiklikler ve sona erme' },
      {
        type: 'p',
        text: 'Uygulamayı ve bu Koşulları zaman zaman güncelleyebiliriz. "Son güncelleme" tarihi en güncel sürümü gösterir; bir değişiklikten sonra Uygulamayı kullanmaya devam etmeniz güncellenmiş Koşulları kabul ettiğiniz anlamına gelir. Uygulamayı istediğiniz zaman kullanmayı bırakabilirsiniz.',
      },
      { type: 'h2', text: '11. Uygulanacak hukuk' },
      {
        type: 'p',
        text: 'Bu Koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda, ikamet ettiğiniz ülkenin emredici tüketici koruma kuralları saklı kalmak kaydıyla, Türkiye’deki yetkili mahkemeler ve tüketici hakem heyetleri yetkilidir.',
      },
      { type: 'h2', text: '12. Apple’a özgü koşullar' },
      {
        type: 'p',
        text: 'Uygulamayı App Store’dan indirdiyseniz Apple’ın standart Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi (EULA) de geçerlidir. Apple, Uygulamadan veya içeriğinden sorumlu değildir ve Uygulama için destek sağlama yükümlülüğü yoktur.',
      },
      { type: 'h2', text: '13. İletişim' },
      {
        type: 'p',
        text: ['Şevket Aydoğdu — ', { text: EMAIL, url: MAILTO }],
      },
    ],
  },
];
