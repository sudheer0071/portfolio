import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import RecoilContextProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudheer",
  description: "A portfolio handcrafted by sudheer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} scroll scroll-smooth`}> 
<RecoilContextProvider>{children}</RecoilContextProvider> 
        </body>
    </html>
  );
}
