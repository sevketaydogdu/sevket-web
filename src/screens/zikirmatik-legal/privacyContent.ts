import type { LegalSection } from './LegalPage';

const EMAIL = 'sevket@antiquemedia.net';
const MAILTO = `mailto:${EMAIL}`;

const thirdPartyLinks = [
  [{ text: 'Google Privacy Policy', url: 'https://policies.google.com/privacy' }],
  [{ text: 'Firebase Privacy and Security', url: 'https://firebase.google.com/support/privacy' }],
  [
    {
      text: 'How Google uses information from apps that use its services (AdMob)',
      url: 'https://policies.google.com/technologies/partner-sites',
    },
  ],
  [{ text: 'RevenueCat Privacy Policy', url: 'https://www.revenuecat.com/privacy' }],
  [{ text: 'Apple Privacy Policy', url: 'https://www.apple.com/legal/privacy/' }],
];

export const privacySections: LegalSection[] = [
  {
    lang: 'en',
    title: 'Zikirmatik (Easy Dhikr) Privacy Policy',
    lastUpdated: 'Last updated: 8 November 2026',
    blocks: [
      {
        type: 'p',
        text: 'This Privacy Policy explains how the Zikirmatik / Easy Dhikr mobile application ("the App", bundle ID com.antiquemedia.zikirmatik) collects, uses and protects your information.',
      },
      { type: 'h2', text: '1. Data controller' },
      {
        type: 'p',
        text: [
          'The data controller is Şevket Aydoğdu. For any privacy question or request, contact ',
          { text: EMAIL, url: MAILTO },
          '.',
        ],
      },
      { type: 'h2', text: '2. Information we process' },
      { type: 'h3', text: 'Account and app data (Firebase)' },
      {
        type: 'ul',
        items: [
          'When you open the App, an anonymous account is created with Firebase Authentication. This gives you a random user identifier; it does not require your name or email.',
          'Your dhikr lists, counts and room (dhikr circle) participation are stored in Google Cloud Firestore so they can be synced and restored.',
          'If you set a display name, or sign in with Apple or Google, that display name may be stored and shown to other participants in rooms you join.',
        ],
      },
      { type: 'h3', text: 'Optional sign-in with Apple or Google' },
      {
        type: 'p',
        text: 'Signing in with Apple or Google is optional. If you choose it, we receive the account identifier and the basic profile information the provider shares (such as your name and, where provided, email address) to link your data to that account. With Sign in with Apple you can choose to hide your email address.',
      },
      { type: 'h3', text: 'Analytics (Firebase Analytics)' },
      {
        type: 'p',
        text: 'We use Firebase Analytics to understand how the App is used (for example, screens viewed, app version, device type and approximate region) so we can fix problems and improve features.',
      },
      { type: 'h3', text: 'Advertising (Google AdMob)' },
      {
        type: 'ul',
        items: [
          'The free version of the App shows ads served by Google AdMob.',
          'AdMob may use your device advertising identifier (Advertising ID on Android, IDFA on iOS) and similar data to show and measure ads. Personalised ads are only used with your consent.',
          'Where required (for example in the EEA, UK and Switzerland), we show a Google User Messaging Platform (UMP) consent form. On iOS, the App asks for permission through Apple’s App Tracking Transparency (ATT) prompt before the IDFA can be used.',
          'You can change your ad consent choices at any time in the App under Settings > Ad privacy options. On iOS you can also change tracking permission in the device Settings > Privacy & Security > Tracking.',
        ],
      },
      { type: 'h3', text: 'Subscriptions (RevenueCat)' },
      {
        type: 'p',
        text: 'We use RevenueCat to check whether you have an active subscription and to restore purchases. RevenueCat receives your anonymous app user identifier and purchase receipts/status. Payments are processed by Apple (App Store) or Google (Google Play); we never receive or store your payment card details.',
      },
      { type: 'h2', text: '3. Why we use your information' },
      {
        type: 'ul',
        items: [
          'To provide the App’s features: saving and syncing your dhikr lists and counts, and running shared rooms.',
          'To provide and verify premium subscriptions.',
          'To show ads in the free version, in line with your consent choices.',
          'To analyse usage, fix bugs and improve the App.',
          'To keep the App secure and prevent abuse.',
        ],
      },
      { type: 'h2', text: '4. Sharing and sale of data' },
      {
        type: 'p',
        text: 'We do not sell your personal data. We share data only with the service providers listed above (Google/Firebase, Google AdMob, RevenueCat, Apple and Google as store and sign-in providers), who process it to provide their services, or when required by law.',
      },
      { type: 'h2', text: '5. Data retention and deletion' },
      {
        type: 'ul',
        items: [
          'We keep your data while your account exists.',
          'You can delete your account and its associated data at any time in the App (Settings > Delete Account).',
          [
            'You can also request deletion by emailing ',
            { text: EMAIL, url: MAILTO },
            '. We will respond within a reasonable time and no later than required by law.',
          ],
          'Deleting the App from your device does not by itself delete data stored in the cloud.',
        ],
      },
      { type: 'h2', text: '6. Your rights' },
      {
        type: 'p',
        text: [
          'Depending on where you live (for example under the GDPR or Turkish Personal Data Protection Law No. 6698, KVKK), you may have the right to access, correct, delete or export your data, to object to or restrict processing, and to withdraw consent. To exercise these rights, contact ',
          { text: EMAIL, url: MAILTO },
          '. You may also lodge a complaint with your local data protection authority.',
        ],
      },
      { type: 'h2', text: '7. International transfers and security' },
      {
        type: 'p',
        text: 'Our service providers may process data on servers outside your country, including in the United States and the European Union. We rely on their safeguards and use reasonable technical measures, such as encrypted connections and access rules, to protect your data.',
      },
      { type: 'h2', text: '8. Children' },
      {
        type: 'p',
        text: 'The App is not directed at children under 13, and we do not knowingly collect personal data from children under 13. If you believe a child has provided us with personal data, contact us and we will delete it.',
      },
      { type: 'h2', text: '9. Third-party privacy policies' },
      { type: 'ul', items: thirdPartyLinks },
      { type: 'h2', text: '10. Changes to this policy' },
      {
        type: 'p',
        text: 'We may update this Privacy Policy from time to time. The "Last updated" date above shows when it was last changed. Significant changes will be communicated in the App or on this page.',
      },
      { type: 'h2', text: '11. Contact' },
      {
        type: 'p',
        text: ['Şevket Aydoğdu — ', { text: EMAIL, url: MAILTO }],
      },
    ],
  },
  {
    lang: 'tr',
    title: 'Zikirmatik (Kolay Zikir) Gizlilik Politikası',
    lastUpdated: 'Son güncelleme: 8 Kasım 2026',
    blocks: [
      {
        type: 'p',
        text: 'Bu Gizlilik Politikası, Zikirmatik / Easy Dhikr mobil uygulamasının ("Uygulama", paket kimliği com.antiquemedia.zikirmatik) bilgilerinizi nasıl topladığını, kullandığını ve koruduğunu açıklar.',
      },
      { type: 'h2', text: '1. Veri sorumlusu' },
      {
        type: 'p',
        text: [
          'Veri sorumlusu Şevket Aydoğdu’dur. Gizlilikle ilgili her türlü soru ve talep için: ',
          { text: EMAIL, url: MAILTO },
        ],
      },
      { type: 'h2', text: '2. İşlenen bilgiler' },
      { type: 'h3', text: 'Hesap ve uygulama verileri (Firebase)' },
      {
        type: 'ul',
        items: [
          'Uygulamayı açtığınızda Firebase Authentication ile anonim bir hesap oluşturulur. Bu hesap rastgele bir kullanıcı kimliğinden ibarettir; adınızı veya e-postanızı gerektirmez.',
          'Zikir listeleriniz, sayaçlarınız ve zikir halkalarına (odalara) katılımınız, eşitlenebilmesi ve geri yüklenebilmesi için Google Cloud Firestore’da saklanır.',
          'Bir görünen ad belirlerseniz veya Apple ya da Google ile giriş yaparsanız, bu görünen ad saklanabilir ve katıldığınız halkalardaki diğer katılımcılara gösterilebilir.',
        ],
      },
      { type: 'h3', text: 'İsteğe bağlı Apple veya Google ile giriş' },
      {
        type: 'p',
        text: 'Apple veya Google ile giriş yapmak isteğe bağlıdır. Bu seçeneği kullanırsanız, verilerinizi bu hesaba bağlamak için sağlayıcının paylaştığı hesap kimliğini ve temel profil bilgilerini (adınız ve sağlanıyorsa e-posta adresiniz gibi) alırız. Apple ile Giriş’te e-posta adresinizi gizlemeyi seçebilirsiniz.',
      },
      { type: 'h3', text: 'Analiz (Firebase Analytics)' },
      {
        type: 'p',
        text: 'Sorunları gidermek ve özellikleri geliştirmek amacıyla Uygulamanın nasıl kullanıldığını (ör. görüntülenen ekranlar, uygulama sürümü, cihaz türü ve yaklaşık bölge) anlamak için Firebase Analytics kullanırız.',
      },
      { type: 'h3', text: 'Reklamlar (Google AdMob)' },
      {
        type: 'ul',
        items: [
          'Uygulamanın ücretsiz sürümünde Google AdMob tarafından sunulan reklamlar gösterilir.',
          'AdMob, reklamları göstermek ve ölçmek için cihazınızın reklam kimliğini (Android’de Reklam Kimliği, iOS’ta IDFA) ve benzeri verileri kullanabilir. Kişiselleştirilmiş reklamlar yalnızca onayınızla kullanılır.',
          'Gerekli olduğu yerlerde (ör. AEA, Birleşik Krallık ve İsviçre) Google User Messaging Platform (UMP) onay formu gösterilir. iOS’ta IDFA kullanılmadan önce Apple’ın Uygulama Takibi Şeffaflığı (ATT) izni istenir.',
          'Reklam onayı tercihlerinizi istediğiniz zaman Uygulamada Ayarlar > Reklam gizlilik seçenekleri bölümünden değiştirebilirsiniz. iOS’ta takip iznini ayrıca cihazın Ayarlar > Gizlilik ve Güvenlik > Takip bölümünden değiştirebilirsiniz.',
        ],
      },
      { type: 'h3', text: 'Abonelikler (RevenueCat)' },
      {
        type: 'p',
        text: 'Aktif bir aboneliğiniz olup olmadığını kontrol etmek ve satın alımları geri yüklemek için RevenueCat kullanırız. RevenueCat, anonim uygulama kullanıcı kimliğinizi ve satın alma makbuzu/durum bilgisini alır. Ödemeler Apple (App Store) veya Google (Google Play) tarafından işlenir; kart bilgilerinizi hiçbir zaman almayız veya saklamayız.',
      },
      { type: 'h2', text: '3. Bilgilerin kullanım amaçları' },
      {
        type: 'ul',
        items: [
          'Uygulama özelliklerini sunmak: zikir listelerinizi ve sayaçlarınızı kaydetmek ve eşitlemek, ortak halkaları çalıştırmak.',
          'Premium abonelikleri sağlamak ve doğrulamak.',
          'Ücretsiz sürümde, onay tercihlerinize uygun şekilde reklam göstermek.',
          'Kullanımı analiz etmek, hataları gidermek ve Uygulamayı geliştirmek.',
          'Uygulamanın güvenliğini sağlamak ve kötüye kullanımı önlemek.',
        ],
      },
      { type: 'h2', text: '4. Paylaşım ve veri satışı' },
      {
        type: 'p',
        text: 'Kişisel verilerinizi satmayız. Verileri yalnızca yukarıda belirtilen hizmet sağlayıcılarla (Google/Firebase, Google AdMob, RevenueCat ve mağaza ve giriş sağlayıcısı olarak Apple ve Google), hizmetlerini sunmaları amacıyla veya yasal zorunluluk hâlinde paylaşırız.',
      },
      { type: 'h2', text: '5. Saklama süresi ve silme' },
      {
        type: 'ul',
        items: [
          'Verilerinizi hesabınız var olduğu sürece saklarız.',
          'Hesabınızı ve ilişkili verilerinizi istediğiniz zaman Uygulamada (Ayarlar > Hesabı Sil) silebilirsiniz.',
          [
            'Silme talebinizi ayrıca ',
            { text: EMAIL, url: MAILTO },
            ' adresine e-posta göndererek iletebilirsiniz. Talebinize makul bir süre içinde ve yasal sürelere uygun olarak yanıt veririz.',
          ],
          'Uygulamayı cihazınızdan kaldırmak, bulutta saklanan verileri tek başına silmez.',
        ],
      },
      { type: 'h2', text: '6. Haklarınız' },
      {
        type: 'p',
        text: [
          '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve bulunduğunuz yere göre GDPR gibi mevzuat kapsamında; verilerinize erişme, düzeltme, silme, taşıma, işlemeye itiraz etme veya kısıtlama ve onayınızı geri çekme haklarına sahip olabilirsiniz. Bu haklarınızı kullanmak için ',
          { text: EMAIL, url: MAILTO },
          ' adresine yazabilirsiniz. Ayrıca yetkili veri koruma kurumuna (ör. Kişisel Verileri Koruma Kurumu) şikâyette bulunabilirsiniz.',
        ],
      },
      { type: 'h2', text: '7. Yurt dışına aktarım ve güvenlik' },
      {
        type: 'p',
        text: 'Hizmet sağlayıcılarımız verileri, ABD ve Avrupa Birliği dâhil olmak üzere bulunduğunuz ülke dışındaki sunucularda işleyebilir. Bu sağlayıcıların güvencelerine dayanır ve verilerinizi korumak için şifreli bağlantılar ve erişim kuralları gibi makul teknik önlemler kullanırız.',
      },
      { type: 'h2', text: '8. Çocuklar' },
      {
        type: 'p',
        text: 'Uygulama 13 yaşından küçük çocuklara yönelik değildir ve 13 yaşından küçük çocuklardan bilerek kişisel veri toplamayız. Bir çocuğun bize kişisel veri verdiğini düşünüyorsanız bizimle iletişime geçin; bu verileri sileriz.',
      },
      { type: 'h2', text: '9. Üçüncü taraf gizlilik politikaları' },
      { type: 'ul', items: thirdPartyLinks },
      { type: 'h2', text: '10. Bu politikadaki değişiklikler' },
      {
        type: 'p',
        text: 'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Yukarıdaki "Son güncelleme" tarihi son değişikliğin ne zaman yapıldığını gösterir. Önemli değişiklikler Uygulamada veya bu sayfada duyurulur.',
      },
      { type: 'h2', text: '11. İletişim' },
      {
        type: 'p',
        text: ['Şevket Aydoğdu — ', { text: EMAIL, url: MAILTO }],
      },
    ],
  },
];
