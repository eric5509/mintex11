import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from 'next/font/google'
import Topnav from "@/components/Layout/Topnav";
import AppProvider from "@/redux/provider/AppProvider";
import Background from "./background";
import Main from "@/components/Layout/Main";

const workSans = Work_Sans({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "TONPUMP - Leading Provider of Smart Contract Solutions for Businesses",
  description: "Unlock the power of secure and automated transactions with our cutting-edge smart contract solutions. Learn how we streamline business operations using blockchain technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${workSans.className} `}
      >
        <AppProvider>
          <Background>
            <main className="max-w-[1600px] mx-auto flex w-full overflow-y-auto h-screen flex-col">
              <Topnav />
              <Main children={children} />
            </main>
          </Background>
        </AppProvider>
      </body>
    </html>
  );
}
