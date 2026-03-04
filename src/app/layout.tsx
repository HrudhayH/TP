
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vriksa Global | Premium Agricultural Export',
  description: 'From Indian Farms to Global Markets. Exporting premium Rice, Millets, Pulses, Spices, and Dry Fruits.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent/20">
        {children}
      </body>
    </html>
  );
}
