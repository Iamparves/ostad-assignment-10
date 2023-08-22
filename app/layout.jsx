import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Hind_Siliguri, Josefin_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["400", "500", "600", "700"],
});
const source_serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source_serif",
  weight: ["400", "500", "600"],
});
const siliguri = Hind_Siliguri({
  subsets: ["bengali"],
  variable: "--font-siliguri",
  weight: ["400", "500"],
});

export const metadata = {
  title: "LuminaLore",
  description:
    "LuminaLore is more than a collection of words; it's a journey through ideas, insights, and stories that illuminate the mind. Get to know the minds behind the words and the passion that fuels our pursuit of wisdom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#F9F9FE] ${josefin.variable} ${source_serif.variable} ${siliguri.variable} font-josefin`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
