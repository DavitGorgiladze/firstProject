import React from "react";
import classes from "./Heading.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Heading() {
  return (
    <>
      <div className={classes.heading}>
        <div>
          <Link to="/">
            <HomeIcon />
          </Link>
        </div>
        <div className={classes.info}>
          <Link to="/about">
            <button>About Us</button>
          </Link>
          <Link to="/services">
            <button>Services</button>
          </Link>
          <Link to="/team">
            <button>Team</button>
          </Link>
          <Link to="contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
}
