import React from "react";
import style from "../styles/CollecCard.module.css";

const CollecCard = () => {
  return (
    <>
      <div className={style.CollecCard}>
        <img className={style.Imgdiv} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s" alt="collecImg" />
        <div className={style.overlayText}>
          <p className={style.fontset}>00's RomComs</p>
        </div>
      </div>
      <div className={style.CollecCard}>
        <img className={style.Imgdiv} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNYoEFNTd4Kf_SJibuaTOdCSkNszBr-De1zQ&s" alt="collecImg" />
        <div className={style.overlayText}>
          <p className={style.fontset}>Comedy Hub</p>
        </div>
      </div>
      <div className={style.CollecCard}>
        <img className={style.Imgdiv} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioBmQROutVd6sJ-4hNG5bHzkNnjNCF_FBaQ&s" alt="collecImg" />
        <div className={style.overlayText}>
          <p className={style.fontset}>Horrors</p>
        </div>
      </div>
      <div className={style.CollecCard}>
        <img className={style.Imgdiv} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlJh-uo2RXVR3k9vlR544HW6K5H9sq80gng&s" alt="collecImg" />
        <div className={style.overlayText}>
          <p className={style.fontset}>Cartoons</p>
        </div>
      </div>
      <div className={style.CollecCard}>
        <img className={style.Imgdiv} src="https://www.shutterstock.com/image-vector/noir-movies-vintage-poster-design-600nw-2161792951.jpg" alt="collecImg" />
        <div className={style.overlayText}>
          <p className={style.fontset}>True Crime</p>
        </div>
      </div>
    </>
  );
};

export default CollecCard;
