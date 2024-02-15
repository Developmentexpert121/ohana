import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
const inter = Inter({ subsets: ["latin"] });


const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
   
    <html lang="en">
      <body className={inter.className}>
       <StoreProvider>
        {children}
        </StoreProvider>
        </body>
    </html>
    
  );
}

export default RootLayout;