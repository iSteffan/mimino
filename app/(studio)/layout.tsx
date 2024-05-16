import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Mimino admin panel',
  description: 'Admin panel for Mimino website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
