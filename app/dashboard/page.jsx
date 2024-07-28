import React from "react";
import Link from "next/link";
import style from "../styles/dashboard.module.css";
import Card from "../Component/Card"
import CollecCard from "../Component/CollecCard"


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
        <div style={{display:"flex",alignItems:"center"}}>
          <img className={style.Image} src="https://sm.mashable.com/t/mashable_in/photo/default/netflix-turns-20-binge-watching-has-consumed-our-life-and-no_wa7p.1248.jpg" alt="sideImg" />
        </div>
      </div>

      <div className={style.title}>
      <p style={{marginTop:"0",marginBottom:"0",width:"91%",margin:"auto"}}>Brand new releases</p>
      </div>
      <div className={style.carddiv}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className={style.title}>
      <p style={{marginTop:"0",marginBottom:"0",width:"91%",margin:"auto",paddingTop:"30px",paddingBottom:"30px"}} className="">Collection</p>
      </div>
      <div className={style.collection}>
          <CollecCard/>
      </div>
      <div style={{paddingTop:"30px"}} className={style.title}>
      <p style={{marginTop:"0",marginBottom:"0",width:"91%",margin:"auto"}}>Funny TV shows</p>
      </div>
      <div style={{paddingBottom:"30px"}} className={style.carddiv}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  );
};

export default Dashboard;
