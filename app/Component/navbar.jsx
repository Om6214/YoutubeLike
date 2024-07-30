import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import style from "../styles/navbar.module.css";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const User = await getUser();
  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navLogo}>
          <h1 className={style.h1}>CINEMA</h1>
        </div>
        <div>
          <ul className={style.ul}>
            {isUserAuthenticated ? (
              <>
                <li className={style.li}>
                  <Link className={style.Link} href="/dashboard">
                  <i class="fa-solid fa-house"></i> Home
                  </Link>
                </li>
                <li className={style.li}>
                  <Link className={style.Link} href="/dashboard/mylist">
                  <i class="fa-solid fa-list"></i> My List
                  </Link>
                </li>
                <li className={style.li}>
                  <Link className={style.Link} href="/dashboard/tvseries">
                  <i class="fa-solid fa-tv"></i> TV series
                  </Link>
                </li>
                <li className={style.li}>
                  <Link className={style.Link} href="/dashboard/movies">
                  <i class="fa-solid fa-film"></i> Movies
                  </Link>
                </li>
                <li className={style.login}>
                  <LogoutLink className={style.loginlink}>Logout</LogoutLink>
                </li>
              </>
            ) : (
              <>
                <li className={style.login}>
                  <LoginLink className={style.loginlink}>Login</LoginLink>
                </li>
                <li className={style.register}>
                  <RegisterLink className={style.Link}>Register</RegisterLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {isUserAuthenticated?<p className={style.profileImg}>{User.given_name}</p>:null}
      </div>
    </>
  );
};
export default Navbar;
