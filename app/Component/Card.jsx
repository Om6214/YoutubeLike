import React from 'react'
import style from "../styles/card.module.css"

const Card = () => {
  return (
    <div className={style.card}>
        <img className={style.cardImg} src="bodybg.jpeg" alt="image" />
        <div className={style.overlayText}>
            Inside div Text
        </div>
    </div>
  )
}

export default Card