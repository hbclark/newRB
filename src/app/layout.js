import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A2Z Recycle Pty. Ltd",
  description: "A2Z Recycle Pty. Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        
        {children}
        <ChatButton />
        <Footer />  </body>
    </html>
  );
}
