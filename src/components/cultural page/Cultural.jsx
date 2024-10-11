
import React, { useEffect, useState } from "react";
import EventCard from "../common/EventCard/EventCard";
import classes from "./Cultural.module.css";
// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
// import { eventsData } from "../../assets/eventsData";
import axios from "axios";
import ReactGA from "react-ga";

const Cultural = () => {
    const url ="https://portal.iqpaths.com/";
    const [getculturalData, setGetCulturalData] = useState([]);
    useEffect(() => {
        axios
            .get(`${url}events/alleventData`)
            .then((res) => {
                console.log(res.data);
                setGetCulturalData(res.data);
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
                {/* <h1 className={classes.heading}>Events</h1> */}
                {/* <img src="x" alt="" /> */}

                {/* buttons */}
                {/* <h1 className={classes.heading} id="cul">Events</h1> */}





                {/* this are the categoary wise div */}
                <h1 className={classes.heading} >Cultural</h1>
                <div className={classes.events_container} id="cul" >
                    {getculturalData.map((eventData, i) => {
                        return (<>
                            {eventData.event_category === "cultural" ? <EventCard eventData={eventData} key={i} /> : null}
                        </>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Cultural
