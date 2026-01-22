import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../components/Home/NavBar/ResponsiveNav";
import Footer from "../components/Home/Footer/Footer";
import ScrollToTop from "../components/Helper/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Hugo Portifolio | Next.js",
  description: "Portifolio feito com Next.js 16",
};


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;

}>) {

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${font.className} antialiased bg-[#242424] scroll-smooth`}
      >
        <NextIntlClientProvider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
          <Toaster position="bottom-left" reverseOrder={false} />
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
