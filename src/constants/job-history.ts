export interface JobHistoryEntry {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

export const jobHistory: JobHistoryEntry[] = [
  {
    id: 99,
    company: 'Gobito Digital Solutions',
    position: 'Senior React Native Developer',
    period: 'Jul 2025  - present',
    description: `Led the end-to-end redevelopment of a multi-application mobile ecosystem for both iOS and Android, built with TypeScript using Expo and React Native, consolidating 5–6 separately maintained applications into a single multi-tenant codebase capable of generating multiple branded apps from one source.
• Designed and implemented the application architecture from scratch, managing the entire lifecycle from initial setup to App Store and Google Play releases, ensuring scalable, maintainable, and efficient delivery across platforms.
• Implemented core features and infrastructure including Redux-based state management, React Query for server-state handling, RESTful API integrations via Axios, and environment-based tenant configurations.
• Improved application stability and performance by integrating Sentry for crash monitoring, applying performance optimizations, and streamlining build and release workflows to support faster iterations and reliable production deployments.`,
  },
  {
    id: 99,
    company: 'Ayyıldız Technology and Media',
    position: 'Senior React Native Developer',
    period: 'Jan 2023  - Jul 2025',
    description: `Developed and maintained Politicca Social App, The Election Post, and Seçim Vizyon, built with TypeScript using React Native and Expo. Implemented state management with Redux and Context API, API integration with Axios, and UI components with Tamagui. Introduced Jest and Maestro for test automation, multi-language support, custom hooks, and centralized theme management. Managed version control and CI workflows with GitHub.`,
  },
  {
    id: 98,
    company: 'Gulenayva Digital Agency',
    position: 'React Native Developer',
    period: 'Apr 2021 - Jan 2023',
    description: `Built cross-platform mobile apps with TypeScript, React, and React Native for agency clients, focusing on performance and consistency across iOS and Android. Delivered real-time location tracking, user authentication, and local caching for offline-first experiences. Worked with UX/UI teams to implement complex flows and business logic. Integrated third-party APIs and kept codebases modular for scalability.`,
  },
  {
    id: 97,
    company: 'Humantech Software',
    position: 'Junior React Native Developer',
    period: 'Feb 2020 - Apr 2021',
    description: `Supported product development on multiple React Native projects built with TypeScript: İş Asistanı, Fatihte Yasa (mobile and web), Botras, Eihale, and Kariyer Merkezi. Contributed to feature development, bug fixes, and cross-platform delivery under senior developer guidance. Learned best practices for mobile app architecture and Agile workflows.`,
  },
  // {
  //   id: 96,
  //   company: 'Freelance',
  //   position: 'UX/UI & React Native Developer',
  //   period: '2010 - Apr 2021',
  //   description: `Designed and built mobile apps and interfaces with TypeScript for clients across sectors. Applied UX/UI principles to user flows and visual design. Transitioned into React Native development for production apps while maintaining a focus on usability and performance.`,
  // },
  // Add more job entries as needed
];
