import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Topnav from "@/components/Layout/Topnav";
import AppProvider from "@/redux/provider/AppProvider";
import LeftSidebar from "@/components/Layout/LeftSidebar";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "TONPUMP - Leading Provider of Smart Contract Solutions for Businesses",
  description:
    "Unlock the power of secure and automated transactions with our cutting-edge smart contract solutions. Learn how we streamline business operations using blockchain technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${workSans.className} `}>
        <AppProvider>
          <div className="h-screen ">
            <div className="h-20 bg-green-500">
              <Topnav />
            </div>
            <div className="h-[calc(100vh-80px)] p-2">
              <div className="h-full w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-3">
                <div className="hidden lg:block h-full p-2.5 rounded-2xl w-[275px] 2xl:w-[300px] border-2 border-purplee overflow-y-auto">
                  <div className="overflow-y-auto rounded-lg h-full">
                    <LeftSidebar />
                  </div>
                </div>
                <div className="rounded-2xl overflow-y-auto">{children}</div>
              </div>
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
