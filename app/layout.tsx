import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { cn } from '@/lib/utils';
import { NextDevtoolsProvider } from '@next-devtools/core';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <NextDevtoolsProvider>{children}</NextDevtoolsProvider>
      </body>
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
    </html>
  );
}
