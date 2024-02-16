import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import store from '@/store/store';
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
const inter = Montserrat({ subsets: ["latin"] });


const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
   
    <html lang="en">
      <body className={inter.className}>
       {/* <Provider store={store}> */}
       <Header />
        {children}
        <Footer />
        {/* </Provider> */}
        </body>
    </html>
    
  );
}

export default RootLayout;