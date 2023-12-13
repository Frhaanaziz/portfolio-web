// import type { Metadata } from 'next';
// import { Inter as FontSans } from 'next/font/google';
// import './globals.css';
// import { cn } from '@/lib/utils';

// export const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });

// export const metadata: Metadata = {
//   title: 'Farhan Aziz Ath Thariq',
//   description: 'Personal website of Farhan Aziz Ath Thariq',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={cn(
//           'min-h-screen bg-background font-sans antialiased',
//           fontSans.variable
//         )}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import { ReactNode } from 'react';

const RootLayoutProps = ({ children }: { children: ReactNode }) => children;

export default RootLayoutProps;
