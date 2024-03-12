import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import { Provider } from 'jotai';
import ThemeWrapper from './contexts/ThemeWrapper';
import ThemeProvider from './contexts/ThemeContext';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Currency Converter',
  description: 'App that converts currencies',
  authors: [{ name: 'Robin Sevelin' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <ThemeProvider>
            <ThemeWrapper>
              <Header />
              <main>{children}</main>
              <Footer />
            </ThemeWrapper>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
