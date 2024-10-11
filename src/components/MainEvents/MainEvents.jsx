import React, { useEffect, useState } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./MainEvents.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
// import { eventsData } from "../../assets/eventsData";
import axios from "axios";
import ReactGA from "react-ga";

const MainEvents = () => {
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 600,
  //       direction: "to-right",
  //     }),
  //   ],
  // });

  const url= "https://portal.iqpaths.com/"
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}events/alleventData`)
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
         console.log(err);
      });
  }, []);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <>
      <div className={classes.events_section}>

        <h1 className={classes.heading}>Techno</h1>
        <div className={classes.events_container} id="cul">
          {data.map((eventData, i) => {
            return <>{eventData.event_category === "Techno" ? <EventCard eventData={eventData} key={i} /> : null}</>;
          })}
        </div>

        <br />
        <br />

        <br />
        <hr />
        <h1 className={classes.heading}>Management</h1>

        <div className={classes.events_container} id="sports">
          {data.map((eventData, i) => {
            return eventData.event_category === "Managment" ? <EventCard eventData={eventData} key={i} /> : null;
          })}
        </div>

        <br />
        <br />

        <br />
        <hr />
        <h1 className={classes.heading} id="techno">
          Sports
        </h1>
        <div className={classes.events_container} id="techno">
          {data.map((eventData, i) => {
            return eventData.event_category === "sports" ? (
              <>
                {/* <h1 className={classes.heading}>Techno</h1> */}
                <EventCard eventData={eventData} key={i} />
              </>
            ) : null;
          })}
        </div>
        <br />
        <br />
        <br />
        <hr />

        {/* <div className={classes.events_section}> */}
        <h1 className={classes.heading} id="Managment">
          Cultural
        </h1>

        <div className={classes.events_container} id="Managment">
          {data.map((eventData, i) => {
            return eventData.event_category === "cultural" ? (
              <>
                {/* <h1 className={classes.heading}>Techno</h1> */}
                <EventCard eventData={eventData} key={i} />
              </>
            ) : null;
          })}
          {/* </div> */}
        </div>
        <br />
        <br />
        <br />
        <hr />
        {/* <hr /> */}
        <h1 className={classes.heading}>Night Events</h1>

        <div className={classes.events_container} id="night">
          {data.map((eventData, i) => {
            return eventData.event_category === "night" ? (
              <>
                <h1 className={classes.heading}>Techno</h1>
                <EventCard eventData={eventData} key={i} />
              </>
            ) : null;
          })}
        </div>
      </div>
    </>
  );
};

export default MainEvents;
