import React, { useEffect, useState } from "react";
import classes from "./SingleEventPage.module.css";
// import sample from "../../assets/Events/sample.jpeg";
// import Button from "../common/Button/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

const SingleEventPage = ({ eventData }) => {
  const { eventId } = useParams();
  const [getdata, setgetdata] = useState([]);
  console.log(eventId);
  useEffect(() => {
    axios.get(`https://moonstone-backend-new.onrender.com/events/${eventId}`).then((res) => {
      console.log(res.data);
      setgetdata(res.data);
    });
  }, [eventId]);
  const { eventName, event_image_link, aboutEvent, instruction, max_team_size, min_team_size, fees, event_venue, Eventdate, _id, event_category } = getdata;
  // const { _id, event_image_link, eventName, event_category, fees, max_team_size, min_team_size, event_qr_link } = eventData;

  const newdate = new Date(Eventdate)
  return (
    <>
      <div className={classes.singleEvent}>
        <div className={classes.singleEventCard}>
          <div className={classes.col1}>
            <img className={classes.eventPoster} src={event_image_link} alt="eventName" />
          </div>

          <div className={classes.col2}>
            <div className={classes.head}>
              <h1 className={classes.eventHeading}>{eventName}</h1>
              {event_category === "sports" ? <button className={classes.custom_button}>Registeration closed</button> : <NavLink to={`/register/${_id}/${event_category}/${fees}/${max_team_size}/${min_team_size}/${eventName}`}>
                <button className={classes.custom_button} >
                  Register
                </button>
              </NavLink>}
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Description</h2>
              <p className={classes.content}>{aboutEvent}</p>
            </div>
            <div className={classes.rowcol}>
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Team</h2>
                <p className={classes.content}>
                  {min_team_size}-{max_team_size}
                </p>
              </div>
              <div className={classes.subheading}>
                <h2 className={classes.heading}>Fees</h2>
                <p className={classes.content}>{fees}</p>
              </div>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Instructions</h2>
              <p className={classes.content}>{instruction}</p>
            </div>

            <div className={classes.subheading}>
              <h2 className={classes.heading}>Event Venue</h2>
              <p className={classes.content}>{event_venue}</p>
            </div>
            <div className={classes.subheading}>
              <h2 className={classes.heading}>Date</h2>
              <p className={classes.content}>{newdate.getDate()}/0{newdate.getMonth() + 1}/{newdate.getFullYear()}</p>
              <br />

              {event_category === "sports" ? <button className={classes.custom_button}>Registeration closed</button> : <NavLink to={`/register/${_id}/${event_category}/${fees}/${max_team_size}/${min_team_size}/${eventName}`}>
                <p style={{ textAlign: "center" }}>register now!!</p>
              </NavLink>}

            </div>
          </div>

          {/* ass {link !== "" ? <Button hrefLink={link} label="Register" /> : onSpot !== "" ? <p className={cles.soon}>Registration will be taken on spot! </p> : <p className={classes.soon}>Registration will be open soon.</p>} */}
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
