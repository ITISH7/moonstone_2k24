import classes from "./About_video.module.css";

import React from "react";

const AboutVideo = () => {
  // const playerRef = useRef(null);
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.composition}>
            <video src="" autoPlay   loop></video>
          </div>
          <div className={classes.details}>
            <h3 className={classes.heading}>
              {" "}
              <i>About</i>
            </h3>
            <h2 className={classes.heading1}>Moonstone</h2>
            <p className={classes.para}>Moonstone Fest is the epitome of excitement, creativity, and community spirit at Medicaps University. Held annually over three days, this eagerly anticipated event brings together students, faculty, and staff for a celebration like no other.

              Steeped in tradition yet brimming with innovation, Moonstone Fest offers a platform for students to showcase their talents, compete in thrilling competitions, and immerse themselves in a vibrant cultural extravaganza.

              From pulsating performances to exhilarating competitions, Moonstone Fest embodies the diverse talents and passions that define our college community. It's a time to forge friendships, create memories, and celebrate the unique talents that make us who we are.

              Join us as we embark on this unforgettable journey of creativity, camaraderie, and endless possibilities. Let's come together under the radiant glow of the Moonstone and make memories that will last a lifetime.

              Welcome to Moonstone Fest – where the magic happens, and dreams take flight.</p>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutVideo;
