"use client";
import React from "react";
import Link from "next/link";
import style from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.icon}>
        <i
          class="fa-brands fa-square-instagram fa-2xl"
          style={{ color: "#e01b24" }}
        ></i>
        <i
          class="fa-brands fa-square-twitter fa-2xl"
          style={{ color: "#e01b24" }}
        ></i>
        <i
          class="fa-brands fa-linkedin fa-2xl"
          style={{ color: "#e01b24" }}
        ></i>
      </div>
      <div className={style.Links}>
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/about">About</Link>
        <Link href="/dashboard/watch">Contact Us</Link>
        <Link href="/dashboard/watch">Explore</Link>
      </div>
      <div className={style.Copyright}>
        Copyright &#169; 2024; Designed by <span>Omnath.A.G</span>
      </div>
    </div>
  );
};

export default Footer;
