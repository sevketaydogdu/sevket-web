export const projects = [
  {
    id: 4,
    title: 'X - UI Clone',
    subtitle: 'with React Native & Expo Router',
    imagePath: require('../../assets/images/x_logo.jpg'),

    description: `Built with React Native, Expo and Tailwind Css

💯 Expo Router 
✅ Shared Routes
✅ Nativewind
✅ iOS, Web, Android all from same codebase!


Deployed to Eas Hosting`,
    technicalDetails: ['React Native', 'Expo', 'Expo Router', 'Reanimated', 'Nativewind'],
    storeLinks: {
      google: '',
      apple: '',
      web: 'https://twitter-ui-clone.expo.app/',
      github: 'https://github.com/sevketaydogdu/twitter-ui-clone',
    },
  },
  {
    id: 1,
    title: 'Easy Dhikr: Zikirmatik',
    subtitle: 'Easily Manage Your Dhikrs',
    imagePath: require('../../assets/images/zikirmatikLogo1.png'),
    description: `Easy Dhikr: ZikirMatik is a dhikr (remembrance of God) application that allows you to easily track your dhikr without disturbing and intrusive ads. It automatically records your dhikr, making it easy to keep track of your counts. With its user-friendly interface and convenient features, it is an excellent choice for dhikr. \n\nEasy Dhikr: ZikirMatik is a dedicated mobile app that helps you manage your dhikr in a practical way. This user-friendly app enables you to organize your dhikr, auto-save your counts, and delete them whenever you want. Upon entering the app, you can create personalized dhikr lists. The app provides an automatic counter, freeing you from the constant need to count while doing dhikr.\n\n One of the standout features of Easy Dhikr: ZikirMatik is the ability to donate your dhikr lists and delete them. If you have completed a dhikr list or wish to reset it, you can easily delete it by donating the list. This flexibility allows users to restart or modify their dhikr lists whenever they want.\n\nEasy Dhikr: ZikirMatik prioritizes user privacy. The app does not request personal information and securely stores user data, ensuring that your dhikr experience remains entirely private. The app is an ideal solution for those with busy lifestyles, individuals looking to regularly track their dhikr, or those who want to manage their dhikr in a more systematic way.\n\nWith Easy Dhikr: ZikirMatik, managing your dhikr is now easier and more convenient. Create your own dhikr lists, track your dhikr with the auto-save feature, and delete your dhikr whenever you like. Download this user-friendly app that accompanies you on your spiritual journey and experience the convenience of organizing your dhikr.`,
    technicalDetails: [
      'React Native ',
      'Expo',
      'Expo Router',
      'Tamagui',
      'Redux',
      'Context API',
      'Localization (with i18n)',
      'Reanimated',
      'React Native Animated',
      'Admob',
      'Applovin',
      'In app purchase',
      'Firebase',
      'Lottie',
      'Swr',
      'Axios',
      'Google Analytics',
    ],

    storeLinks: {
      google: 'https://play.google.com/store/apps/details?id=com.antiquemedia.zikirmatik',
      apple: 'https://apps.apple.com/app/zikirmatik-kolay-kullan%C4%B1m/id6450431673',
      // web: 'https://zikirmatik.com',
      web: '',
      github: '',
    },
  },
  {
    id: 2,
    title: 'Politicca',

    // title:
    //   'PoliticcaPoliticcaPoliticcaPoliticcaPoliticcaPoliticcaPoliticcaPoliticcaPoliticcaPoliticcaPoliticca',
    description: `The ultimate platform for politics, news, organizations, politicians and individuals. With Politicca, you'll find a dynamic blend of social media, news, campaign donations, and political marketing all in one place, tailored to your political interests.

    Key Features:
    
    News: Stay informed with the latest political news and analysis from reliable sources. Dive deep into the world of politics and get a 360-degree view of current events.
    
    Donations: Support your favorite politicians and campaigns directly through the app. Contribute to the causes and candidates that matter most to you, making a real impact on the political landscape.
    
    Marketing for Politics: Whether you're a candidate, activist, or just passionate about an issue, our platform offers innovative tools to help you reach and engage your audience. Spread your message and influence change with ease.
    
    Social Networking: Connect with like-minded individuals, follow politicians, engage in discussions, and share your thoughts on the latest developments. Build your political network and be part of a community that shares your interests.
    
    Messaging: Communicate with other users through our secure messaging system, fostering discussions, and sharing ideas.
    
    Politicca is your go-to app for all things political, ensuring you're always in the know and actively involved in shaping the future. Join us today and be a part of the conversation!`,
    technicalDetails: [
      'React Native',
      'Expo',
      'Expo Router',
      'Tamagui',
      'Redux',
      'Context API',
      'Reanimated',
      'Admob',
      'Swr',
      'react-query',
      'Axios',
      'i18n-js',
      'Google Analytics',
      'react-hook-form',
      'Firebase',
      'React Native Reanimated',
      'react-native-apple-authentication',
      'Stylesheet',
    ],
    subtitle: 'Social Media Platform',

    imagePath: require('../../assets/images/politiccaLogo1.png'),
    storeLinks: {
      google: 'https://play.google.com/store/apps/details?id=com.politicca.app&hl=tr',
      apple: 'https://apps.apple.com/us/app/politicca/id6470504299',
      web: 'https://politicca.com',
    },
  },
  {
    id: 3,
    title: 'SkorSever',
    subtitle: 'Live Scores and Match Results',
    description: `Real-Time Sports App
I developed a real-time sports application using a monorepo setup that spans across both mobile (React Native with Expo) and web (Next.js) platforms, providing users with an engaging, cross-platform experience. This project demonstrates my ability to build scalable, maintainable applications using modern technologies while maintaining performance across multiple environments.

Key Features & Technologies
Monorepo Architecture: The app was structured using a monorepo to manage both the mobile and web codebases. This approach ensured efficient development, with shared components, utilities, and state management logic, while keeping platform-specific implementations separate. This made the project easier to scale and maintain in the long term.

Cross-Platform Support: Leveraging React Native (Expo) for the mobile app and Next.js for the web app, I ensured a seamless user experience across multiple platforms. By building reusable components and optimizing for both mobile and web, users enjoy a consistent interface regardless of the device they use.

API Integration: I implemented REST API integration to fetch sports data, allowing real-time updates of match scores, player statistics, and game events. Using React Query for data fetching and caching enabled efficient, asynchronous data management and reduced unnecessary API calls, improving overall app performance.

Global State Management: For managing application-wide state, I utilized React Context API, which enabled me to share states such as user preferences, authentication status, and game data between various components without the need for prop drilling.

Authentication & Security: I developed a complete authentication flow for secure login, registration, and session management. This included handling secure tokens (JWT) for user authentication and implementing protected routes that ensured users could only access certain features after logging in.

Version Control: The project was managed with Git for version control, ensuring efficient collaboration, tracking of changes, and maintaining code quality through branching and commit history.

Modular & Scalable Development: Following best practices for modular development, I organized the project into clear, maintainable modules. This structure made it easier to add new features, debug issues, and enhance scalability, ensuring the app could grow with minimal technical debt.

Performance & User Experience
Firebase Integration: I integrated Firebase for real-time database management and user authentication. Firebase enabled quick updates on match data and player stats without reloading, providing a smoother user experience. I also used Firebase Cloud Functions for handling backend logic securely.

SignalR Integration: To ensure real-time communication, I integrated SignalR, a robust framework for handling WebSockets and long-polling. This allowed the app to deliver real-time notifications and live updates for scores, match events, and other game-related activities, giving users the thrill of immediate action.

Tamagui for UI Components: To further enhance the user experience, I integrated Tamagui, a design system and component library optimized for performance across both mobile and web platforms. This allowed for responsive layouts, high-performance rendering, and a smooth, native-like experience on both platforms.

Conclusion
Through this project, I gained valuable experience in creating real-time, cross-platform applications with an emphasis on performance, scalability, and user-centric design. By combining powerful technologies like React Native, Next.js, Firebase, and SignalR, I was able to deliver a high-quality sports app that provides a dynamic and engaging experience for users.`,
    imagePath: require('../../assets/images/skorsever.png'),
    technicalDetails: [],

    storeLinks: {
      google: '',
      apple: '',
      web: '',
      github: '',
    },
  },
  {
    id: 4,
    title: 'Botanik',
    subtitle: 'Pharmacy-warehouse management application',
    technicalDetails: [],
    imagePath: require('../../assets/images/botanik-icon.jpg'),

    storeLinks: {
      google: '',
      apple: '',
      web: '',
      github: '',
    },
  },
];
