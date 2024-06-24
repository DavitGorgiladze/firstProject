import React from "react";
import classes from "./Services.module.css";

export default function Services() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.agreements}>
          <div>Agreements</div>
          <ul>
            <li>Sales</li>
            <li>Rent</li>
            <li>Gift</li>
            <li>Service</li>
            <li>Lease</li>
          </ul>
        </div>

        <div className={classes.other}>
          <div>Court Cases</div>
          <div>Representation in three instances</div>
          <div>
            dispute resolution in the field of land, building, tax, civil and
            administrative disputes
          </div>
          <div>Heritage and family law</div>
        </div>
      </div>
    </>
  );
}
