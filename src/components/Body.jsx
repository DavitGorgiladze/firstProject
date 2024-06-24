import React from "react";
import classes from "./Body.module.css";
import lawimg from "../imgs/lawimg.jpg";
import lawyer from "../imgs/lawyer.jpg";

export default function Body() {
  return (
    <>
      <div className={classes.midbody}>
        <div
          style={{
            backgroundImage: `url(${lawimg})`,
          }}
          className={classes.midbodydiv}
        >
          <div className={classes.middivinfo}>
            <div>Whenever you feel you're being treated wrong call me!</div>
            <div>
              Dont they give you what you own, you know what to do, don't you?
            </div>
            <div>They don't wanna see you standing behind me !</div>
          </div>
        </div>
      </div>
    </>
  );
}
