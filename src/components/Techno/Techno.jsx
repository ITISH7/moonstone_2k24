import React, { useEffect, useState } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./Techno.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
// import { eventsData } from "../../assets/eventsData";
import axios from "axios";
import ReactGA from "react-ga";
const Techno = () => {
  const url = "https://portal.iqpaths.com/"
  const [getTechoData, setGetTechnoData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}events/alleventData`)
      .then((res) => {
        // console.log(res.data);
        setGetTechnoData(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <div className={classes.events_section}>
        <h1 className={classes.heading} id="techno">
          Techno
        </h1>

        <div className={classes.events_container} id="techno">
          {getTechoData.map((eventData, i) => {
            return eventData.event_category === "Techno" ? (
              <>
                {/* <h1 className={classes.heading}>Techno</h1> */}
                <EventCard eventData={eventData} key={i} />
              </>
            ) : null;
          })}
        </div>
      </div>
    </>
  );
};

export default Techno;
