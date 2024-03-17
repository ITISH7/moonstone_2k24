import React from "react";
import classes from "./EventCard.module.css";
// import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const EventCard = ({ eventData }) => {
  const { _id, event_image_link, eventName, event_category, fees, max_team_size, min_team_size } = eventData;

  return (
    <>
      <NavLink to={`/events/${_id}`}>
        <div className={classes.card}>
          <div className={classes.card2}>
            <h3 className={classes.event_name}>{eventName}</h3>
            <div className={classes.img_container}>
              <img className={classes.event_image} src={event_image_link} alt="eventImage" />
            </div>
            {/* <p className={classes.event_desc}>{description}</p> */}
            <div className={classes.view_more_btn}>
              {/* <button link={`/events/${_id}`} label="View More" className={classes.pranay} >View-More</button> */}
              {/* <button link={`/events/${_id}`} label="Register" >Register</button> */}
              <button className={classes.custom_button}>View-More</button>

              {event_category === "sports" ? <button className={classes.custom_button}>Registeration closed</button>
                : <NavLink to={`/register/${_id}/${event_category}/${fees}/${max_team_size}/${min_team_size}/${eventName}`}>
                  <button className={classes.custom_button}>Register</button>
                </NavLink>
              }
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default EventCard;
