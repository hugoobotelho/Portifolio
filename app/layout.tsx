import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/NavBar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Hugo Portifolio | Next.js",
  description: "Portifolio feito com Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
