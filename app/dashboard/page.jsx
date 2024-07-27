import React from "react";
import Link from "next/link";
import style from "../styles/dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={style.mainhero}>
        <div className={style.hero}>
          <h1 className={style.h3text}>
            Discover the latest and trading{" "}
            <span className={style.span}>movies & T.V</span> show only on{" "}
            <span className={style.span}>CINAMA</span>
          </h1>
          <div className={style.explorebutton}>
            <Link href="/dashboard/watch">Explore</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
