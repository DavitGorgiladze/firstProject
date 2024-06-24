import React from "react";
import classes from "./Contact.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);
  const [mapClicked, setMapclicked] = useState(false);

  const nameinp = useRef();
  const surnameinp = useRef();
  const phoneinp = useRef();
  const mailinp = useRef();
  const texttextarea = useRef();

  const handleClick = (event) => {
    setIsClicked(true);
    event.preventDefault();
    nameinp.current.value = "";
    surnameinp.current.value = "";
    phoneinp.current.value = "";
    mailinp.current.value = "";
    texttextarea.current.value = "";
  };

  function handleMap() {
    setMapclicked((prevState) => !prevState);
  }

  return (
    <>
      <div className={classes.contact}>
        <div className={classes.info}>
          <div>Adr: Georgia, Batumi, blank str N5</div>
          <div>Call: +995 577382997</div>
          <div>Email: d.gorgiladze1@gmail.com</div>
        </div>

        <div className={classes.box}>
          <div>Get to the closest point in Batumi</div>
          <div>Cheapest but most hard-working Lawyers</div>
        </div>

        <div className={classes.onlinecontact}>
          <form action="" method="submit">
            <div className={classes.oncontact}>
              <div>Contact online</div>
              <input
                ref={nameinp}
                type="text"
                placeholder="Enter Name"
                name=""
                id=""
              />
              <input
                ref={surnameinp}
                type="text "
                placeholder="Enter Surname"
              />
              <input
                ref={phoneinp}
                type="text"
                placeholder="Enter phone number"
              />
              <input
                ref={mailinp}
                type="email"
                placeholder="Enter Email"
                name=""
                id=""
              />
              <br />
              <textarea
                ref={texttextarea}
                name=""
                placeholder="Write down your questions shortly"
                id=""
              ></textarea>
            </div>
            <button onClick={handleClick}>Click</button>
          </form>
        </div>

        <div className={classes.icons}>
          <Link to="https://www.facebook.com/">
            <FacebookIcon />
          </Link>

          <Link to="https://instagram.com/">
            <InstagramIcon />
          </Link>

          <Link to="https://www.whatsapp.com/">
            <WhatsAppIcon />
          </Link>

          <div></div>
          <button onClick={handleMap}>
            <LocationOnIcon />
          </button>

          <div className={classes.showmap}>
            {mapClicked && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5376.640093103239!2d41.5965905409467!3d41.62100413738101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406788b240e7f22b%3A0xb3d2ce0cc7fd25d9!2sBatumi%20Municipality%2C%20Batumi%2C%20Georgia!5e1!3m2!1sen!2sus!4v1719157234910!5m2!1sen!2sus"
                width="400"
                height="220"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Responsive Google Map"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
