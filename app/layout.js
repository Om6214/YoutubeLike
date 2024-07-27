import { Inter } from "next/font/google";
import style from "./page.module.css"
import Navbar from "./Component/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.background}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
