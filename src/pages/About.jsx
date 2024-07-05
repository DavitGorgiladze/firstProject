import React from "react";
import classes from "./About.module.css";
import { Typography, Rating } from "@mui/material";

export default function About() {
  return (
    <>
      <div className={classes.about}>
        <div>We are based in Georgia working on legal stuff</div>
        <div>
          Our company works for foreign and local companies as well as for other
          persons
        </div>
        <div>
          The company consists of highly qualified and skilled team members
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          aliquam illum dicta, nihil maiores praesentium illo nesciunt numquam
          possimus. Laboriosam aliquam eum eveniet nemo placeat debitis quasi
          totam quisquam adipisci!
        </div>
      </div>
      <section className={classes.badge}>
        <div className={classes.title}>CALL US SOON !</div>
        <div className={classes.contact}>+995 111 111 111</div>
        <div className={classes.rating}>
    <div className={classes.ratetext}>Rate Our Services</div>
          <Rating
            name="simple-controlled"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </section>
    </>
  );
}
