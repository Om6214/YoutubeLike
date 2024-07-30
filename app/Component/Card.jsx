import React from 'react'
import style from "../styles/card.module.css"

const Card = () => {
  return (
    <div className={style.card}>
        <img className={style.cardImg} src="/bodybg.jpeg" alt="image" />
        <div className={style.overlayText}>
            Inside div Text
            <div className={style.cardbuttons}>
              <button style={{marginTop:"5px", marginBottom:"5px"}} className={style.button}>Watch Now</button>
              <button className={style.button}>Watch list</button>
            </div>
        </div>
    </div>
  )
}

export default Card