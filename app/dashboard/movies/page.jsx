import style from "../../styles/movie.module.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const page = () => {
  return (
    <div className={style.maindiv}>
      <img className={style.movieimg} src="bodybg.jpeg" alt="profimg" />
      <div className={style.detail}>
        <p className={style.title}>Movie Title</p>
        <p>Director - Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>Cast - Lorem ipsum dolor sit.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          asperiores minima necessitatibus doloribus dolor perferendis numquam
          repellendus obcaecati omnis! Delectus doloremque velit quidem ad,
          numquam magni eum similique ut eligendi.
        </p>
        <div className={style.Button}>
          <Button variant="contained">Watch Now</Button>
          <Button variant="contained">Watch Trailer</Button>
        </div>
      </div>
    </div>
    
  );
};

export default page;
