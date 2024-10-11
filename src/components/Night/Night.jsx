import React, { useEffect, useState } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./Night.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
// import { eventsData } from "../../assets/eventsData";
import axios from "axios";
import ReactGA from "react-ga";

const Night = () => {
    const url = "https://portal.iqpaths.com/";
    const [getNightData, setGetNightData] = useState([]);
    useEffect(() => {
        axios
            .get(`${url}events/alleventData`)
            .then((res) => {
                // console.log(res.data);
                setGetNightData(res.data);
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
                <h1 className={classes.heading} id="night">Night events</h1>

                <div className={classes.events_container} id="night">
                    {getNightData.map((eventData, i) => {

                        return (eventData.event_category === "Night" ? <>
                            {/* <h1 className={classes.heading}>Techno</h1> */}
                            <EventCard eventData={eventData} key={i} /></> : null);
                    })}
                </div>
            </div>

        </>
    )
}

export default Night
