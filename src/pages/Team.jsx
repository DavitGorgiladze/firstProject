import React from "react";
import classes from "./Team.module.css";
import davit from "../imgs/davit.jpg";
import giorgi from "../imgs/giorgi.jpg";
import revaz from "../imgs/revaz.jpg";
import levan from "../imgs/levan.jpg";
import tamar from "../imgs/tamar.jpg";
import mariam from "../imgs/mariam.jpg";
import ana from "../imgs/ana.jpg";
import nika from "../imgs/nika.jpg";
import zaza from "../imgs/zaza.jpg";
import teo from "../imgs/teo.jpg";

export default function Team() {
  return (
    <>
      <div className={classes.team}>
        <div
          style={{ backgroundImage: `url(${davit})` }}
          className={classes.head}
        >
          <div className={classes.title}>Head of the Group</div>
          <div>Davit Gorgiladze</div>
        </div>

        <div className={classes.senior}>
          <div className={classes.title}>Senior Lawyers</div>
          <div className={classes.seniornames}>
            <div style={{ backgroundImage: `url(${giorgi})` }}>Giorgi</div>
            <div style={{ backgroundImage: `url(${levan})` }}>Levan</div>
            <div style={{ backgroundImage: `url(${revaz})` }}>Revaz</div>
            <div style={{ backgroundImage: `url(${tamar})` }}>Tamar</div>
            <div style={{ backgroundImage: `url(${mariam})` }}>Mariam</div>
          </div>
        </div>
        <div className={classes.junior}>
          <div className={classes.title}>Junior Lawyers</div>
          <div className={classes.juniornames}>
            <div style={{ backgroundImage: `url(${ana})` }}>Ana</div>
            <div style={{ backgroundImage: `url(${teo})` }}>Teo</div>
            <div style={{ backgroundImage: `url(${nika})` }}>Nika</div>
            <div style={{ backgroundImage: `url(${zaza})` }}>Zaza</div>
          </div>
        </div>
      </div>
    </>
  );
}
