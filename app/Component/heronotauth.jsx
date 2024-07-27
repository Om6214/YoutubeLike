import React from "react";
import style from "../styles/heronoauthdiv.module.css";

const heronotauth = () => {
  return (
    <>
      <div className={style.herodiv}>
        <div className={style.innerdiv}>
          <h1 className={style.h1}>CINEMA</h1>
          <h3 className={style.h3}>Stream now newest movies and TV series</h3>
          <button className={style.button}>Sign up now</button>
        </div>
      </div>
    </>
  );
};

export default heronotauth;
