import React, { useEffect, useState } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./Sports.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
// import { eventsData } from "../../assets/eventsData";
import axios from "axios";
import ReactGA from "react-ga";
const Sports = () => {
    const [getSportsData, setGetSportsData] = useState([]);
    useEffect(() => {
        axios
            .get("https://moonstone-backend-new.onrender.com/events/alleventData")
            .then((res) => {
                // console.log(res.data);
                setGetSportsData(res.data);
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
                <h1 className={classes.heading}>Sports</h1>
                <div className={classes.events_container} id="sports" >

                    {getSportsData.map((eventData, i) => {
                        return (eventData.event_category === "sports" ? <EventCard eventData={eventData} key={i} /> : null);
                    })}
                </div>
            </div>



        </>
    )
}

export default Sports
