import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Google AI Studio App',
  description: 'Premium venue and facility management system for Universitas Negeri Jakarta, managed by Badan Pengelola Usaha.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
