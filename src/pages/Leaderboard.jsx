import React from "react";
import classes from "./Leaderboard.module.css";

const Leaderboard = () => {
  const data = [
    
    {
      id: 1,
      image: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728639429/Itish_Jain_vmudtl.jpg",
      name: "Itish Jain",
      pos: "Full stack Developer",
      linkdin: "https://www.linkedin.com/in/itish-jain-a3479822a/",
      gmail: "mailto:itishjain7@gmail.com",
      github: "https://github.com/ITISH7",
    },
    

  ];

  return (
    <>
      {/* section ke just neech se apn sir ka karnge nd secction ke beeche me student half and section ke upper baaki ke students ka */}

      <div className={classes.leaderboard_section}>
        <h1 className={classes.heading}> About Developer</h1>

        <div className={classes.home_container}>
          {/* isme mei map lagana hai */}
          {data.map((ele, id) => {
            return (
              <div className={classes.profile_card} key={ele.id}>
                <div className={classes.img}>
                  <img src={ele.image} alt="Profile" />
                </div>
                <div className={classes.caption}>
                  <h3>{ele.name}</h3>
                  <p>{ele.pos}</p>
                  <div className={classes.social_links}>
                    {/* linkdin */}
                    <a href={ele.linkdin} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                      <img src="https://res.cloudinary.com/dejlssoxx/image/upload/v1728639546/linkdinlogo_rnmy8w.jpg " alt="" />
                    </a>

                    {/* gamil */}
                    <a href={ele.gmail} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                      <img src="https://res.cloudinary.com/dejlssoxx/image/upload/v1728639546/gmaillogo_e7ddsz.png " alt="" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
