import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Phat Pham | Data Engineering Portfolio',
  description:
    'Portfolio of Phat Pham, aspiring Data Engineer focused on ETL pipelines, analytics, and machine learning systems.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
