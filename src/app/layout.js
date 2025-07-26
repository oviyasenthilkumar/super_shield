import "./globals.css";
import ApolloWrapper from "@/lib/ApolloWrapper";
import { Poppins, Open_Sans } from "next/font/google";

// Load the fonts with weights and subsets
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

// const open-sans = Open_Sans({
//   subsets: ["latin"],
//   weight: ["400", "600", "700", "800"],
//   variable: "--font-open-sans",
// });

export const metadata = {
  title: "Super Shield",
  description: "",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} `}>
      <link rel="icon" href="/favicon.png" />
      <body className="antialiased font-sans">
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}