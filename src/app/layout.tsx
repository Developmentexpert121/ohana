import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import store from '@/store/store';
const inter = Inter({ subsets: ["latin"] });


const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
   
    <html lang="en">
      <body className={inter.className}>
       {/* <Provider store={store}> */}
        {children}
        {/* </Provider> */}
        </body>
    </html>
    
  );
}

export default RootLayout;