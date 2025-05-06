import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";

// Load the fonts with weights and subsets
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Super Shield",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
