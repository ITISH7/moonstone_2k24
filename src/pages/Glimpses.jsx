import React from "react";
import classes from "./Glimpses.module.css";

const Glimpses = () => {
  const data = [
    {
      id: 1,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542835/img23_k5w80v.jpg ",
    },
    {
      id: 2,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542844/img34_hiqhan.jpg ",
    },
    {
      id: 3,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709543079/img5-min_m4idxh.jpg ",
    },
    {
      id: 4,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542839/img44_ioqfc2.jpg ",
    },
    {
      id: 5,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542831/img6_yczbbm.jpg ",
    },
    {
      id: 6,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542838/img16_tbgqus.jpg ",
    },
    {
      id: 7,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709543078/img28-min_i49hch.jpg ",
    },
    {
      id: 8,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709543079/img11-min_xhm2cd.jpg ",
    },
    {
      id: 9,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709543079/img40-min_u3n39d.png ",
    },
    {
      id: 10,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709543079/img18-min_slal1o.jpg ",
    },
    {
      id: 11,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542840/img45_hn9nl0.jpg ",
    },
    {
      id: 12,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542838/img37_q2icsn.jpg ",
    },
    {
      id: 14,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542729/img15_x3sgi0.jpg ",
    },
    {
      id: 15,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542768/img10_qhae9s.jpg ",
    },
    {
      id: 16,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542830/img12_waemq3.jpg ",
    },
    {
      id: 17,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542830/img13_m3fh77.jpg ",
    },
    {
      id: 18,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542838/img37_q2icsn.jpg ",
    },
    {
      id: 19,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542837/img32_c2wb9u.jpg ",
    },
    {
      id: 20,
      imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542838/img43_z3zk7t.jpg ",
    },
    // {
    //     id: 21,
    //     imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709544963/img39-min_y77crt.jpg ",
    // },
    // {
    //     id: 22,
    //     imagSrc: Img22,
    // },
    // {
    //     id: 23,
    //     imagSrc: Img23,
    // },
    // {
    //     id: 24,
    //     imagSrc: Img24,
    // },
  ];

  return (
    <>
      <div className={classes.about_page}>
        <h1 className={classes.headingx}>Glimpse</h1>
        {/* <About /> */}
        {/* <EventSection /> */}
        {/* <About2 /> */}
      </div>
      <section className={classes.aboutSec}>
        <div className={classes.about}>
          {/* <div className={classes.details}> */}

          {/* yaha apne manas ka code add akr denge */}
          <div className={classes.gallery}>
            {data.map((item) => {
              return (
                <div className={classes.pics} key={item.id}>
                  <img src={item.imagSrc} style={{ width: "100%" }} alt={item.id} />
                </div>
              );
            })}
            {/* </div>S */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Glimpses;
