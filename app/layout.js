import { Inter } from "next/font/google";
import style from "./styles/page.module.css";
import Navbar from "./Component/navbar";
import { getAuthSession } from "../utils/auth";
import "./globals.css";
import Footer from "./Component/Footer";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const { isUserAuthenticated } = await getAuthSession();
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/a0c975bac5.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body
        className={`${style.background} ${isUserAuthenticated ? style.authenticated : style.notauthenticated}`}
      >
        <Navbar />
        {children}
        {
          isUserAuthenticated?(<Footer/>):null
        }
      </body>
    </html>
  );
}
