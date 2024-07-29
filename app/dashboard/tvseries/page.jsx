import React from "react";
import style from "../../styles/tvseries.module.css";
import Dropdown from "../../Component/dropdown";
import Link from "next/link";
import cardstyle from "../../styles/dashboard.module.css";
import Card from "../../Component/Card";

const page = () => {
  return (
    <>
      <div className={style.maindiv}>
        <div className={style.genrediv}>
          <h1 style={{ width: "96.5%" }} className={style.headtext}>
            TV series
          </h1>
          <Dropdown />
        </div>
      </div>
      <div className={style.title}>
        <p style={{marginLeft:"50px",marginTop:"0",marginBottom:"0"}}>Newest</p>
      </div>
      <div className={cardstyle.carddiv}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default page;
