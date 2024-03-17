import React from "react";
import classes from "./Leaderboard.module.css";

const Leaderboard = () => {
  const data = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709881740/IMG-20240308-WA0000_aplgg7.jpg",
      name: "Sanket Gupta",
      pos: "Deployment Expert & Guide Assistant Prof.CSE, MU",
      linkdin: "https://www.linkedin.com/in/sanket-gupta-04a11895/",
      gmail: "sanket.gupta@medicaps.ac.in",
      // github: "github",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709800591/IMG-20240307-WA0013_xywfmd.jpg",
      name: "Itish Jain",
      pos: "MERN",
      linkdin: "https://www.linkedin.com/in/itish-jain-a3479822a/",
      gmail: "mailto:itishjain7@gmail.com",
      github: "https://github.com/ITISH7",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709797956/IMG-20240307-WA0005_fjxate.jpg",
      name: "Jayesh Tapdiya",
      pos: "MERN",
      linkdin: "https://www.linkedin.com/in/jayesh-tapdiya-01573024a/",
      gmail: "mailtto:jayesh121220@gmail.com",
      github: "https://github.com/jayeshtapdiya",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709790198/f18fa73a-ac60-4623-a31d-666bfab12598_s5fnfa.jpg",
      name: "Khushi Sharma",
      pos: "MERN",
      linkdin: "https://www.linkedin.com/in/khushi-sharma-74a218224/",
      gmail: "mailto:khushidksharma@gmail.com",
      github: "https://github.com/Khushisharma23",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709800072/IMG-20240307-WA0009_oabpu6.jpg",
      name: "Manas Choudhary",
      pos: "MERN",
      linkdin: "https://www.linkedin.com/in/manas-choudhary-019411226/",
      gmail: "mailto:mannchoudhary3431@gmail.com",
      github: "https://github.com/ManasGitRep",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709800069/IMG-20240307-WA0011_w9vugo.jpg",
      name: "Pranay Mishra",
      pos: "MERN",
      linkdin: "https://www.linkedin.com/in/pranay-mishra-0189b1248/",
      gmail: "mailto:mishrapranay21@gmail.com",
      github: "https://github.com/Work-from-Pranay",
    },
   

    {
      id: 7,
      image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709800071/IMG-20240307-WA0010_rxotgn.jpg",
      name: "Madhvendra Singh Bais",
      pos: "MERN",
      linkdin: "https://www.linkedin.com/in/madhvendra-singh-bais-a537a0238/",
      gmail: "mailto:madhvebais2002@gmail.com",
      github: "https://github.com/madhavbais",
    },
    

    
    {
      id: 8,
      image: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709800068/IMG-20240307-WA0012_qmrzka.jpg",
      name: "Mahak Hardiya",
      pos: "MERN",
      linkdin: "https://www.linkedin.com/in/mahak-hardiya-650aa5230/",
      gmail: "mailto:mahakhardiya@gmailcom",
      github: "https://github.com/mahakhardiya",
    },

  ];

  return (
    <>
      {/* section ke just neech se apn sir ka karnge nd secction ke beeche me student half and section ke upper baaki ke students ka */}

      <div className={classes.leaderboard_section}>
        <h1 className={classes.heading}>Developers</h1>

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
                      <img src="https://res.cloudinary.com/dulzutyqm/image/upload/v1709616689/linkedin-circled--v1_jignzr.png " alt="" />
                    </a>

                    {/* gamil */}
                    <a href={ele.gmail} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                      <img src="https://res.cloudinary.com/dulzutyqm/image/upload/v1709617445/t_500x300_znjzks.jpg " alt="" />
                    </a>

                    {/* github */}
                    <a href={ele.github} target="_blank" rel="noopener noreferrer" className={classes.footer_a_link}>
                      <img src="https://res.cloudinary.com/dulzutyqm/image/upload/v1709617630/icons8-github-30_l91dpj.png  " alt="" />
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
