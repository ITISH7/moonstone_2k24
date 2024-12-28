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
    {
      id: 2,
      image: "https://res.cloudinary.com/dejlssoxx/image/upload/v1735368033/jayesh_qezr4j.jpg",
      name: "jayesh tapdiya",
      pos: "Full stack Developer",
      linkdin: "https://www.linkedin.com/in/jayesh-tapdiya-01573024a/",
      gmail: "mailto:jayesh121220@gmail.com",
      github: "https://github.com/JayeshTapdiya12",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dejlssoxx/image/upload/v1735369147/khushi_itdt5a.jpg",
      name: "Khushi Sharma",
      pos: "Full stack Developer",
      linkdin: "https://www.linkedin.com/in/khushi-sharma-74a218224",
      gmail: "mailto:khushidksharma@gmail.com",
      github: "https://github.com/Khushisharma23",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dejlssoxx/image/upload/v1735369412/mahak_yjby83.jpg",
      name: "Mahak hardiya",
      pos: "Full stack Developer",
      linkdin: "https://www.linkedin.com/in/mahak-hardiya-650aa5230",
      gmail: "mailto:mahakhardiya@gmail.com",
      github: "https://github.com/mahakhardiya ",
    }

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
