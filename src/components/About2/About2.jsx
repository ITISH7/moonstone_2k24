import React from "react";
import classes from "./About2.module.css";
import ranked1st from "./ranked1st.png";
import mhrd from "./mhrd-nirf.png";
import placement from "./placements.png";
import Qblock from "./Qblock.jpg";
import year_25_logo from "./25_saal_bemisaal.png";

const About2 = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            {/* <h3 className={classes.heading}>About</h3> */}
            <h2 className={classes.heading1}>Moonstone 2k24</h2>
            <p className={classes.para}>The annual college festival, Moonstone, is eagerly awaited by the students. The festival celebrates the talent, creativity, and enthusiasm of the students. The students come together to exhibit their diverse skills and passions, creating an unforgettable experience for everyone involved. A variety of events have been planned for the students, including cultural performances, literary competitions, sports events, art exhibits, and more. All students are cordially invited to take part in this exhilarating weekend filled with entertainment, learning, and discovery. Let us celebrate the power of community and the spirit of creativity that the university epitomises.</p>

            {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
            {/* <div className={classes.btn}>
            <Button label="Explore" />
          </div> */}
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={"https://res.cloudinary.com/dulzutyqm/image/upload/v1709542838/img43_z3zk7t.jpg"} alt="about" />
          </div>
        </div>
      </section>
      <hr />
      {/* ye apna achivements hai jo medicaps ke pass hai */}
      <section id="about" className={classes.aboutSec}>
        <div className={classes.img_about}>
          <div className={classes.img_details}>
            <div className={classes.image_row} style={{ marginLeft: "2vw" }}>
              <img style={{ paddingLeft: "6vw" }} width={"10vw"} src={ranked1st} alt="Image1" />
              <img style={{ paddingLeft: "6vw" }} width={"20vw"} src={mhrd} alt="Image2" />
              <img style={{ paddingLeft: "6vw" }} width={"10vw"} src={placement} alt="Image3" />
              <img style={{ paddingLeft: "6vw" }} width={"10vw"} src={year_25_logo} alt="Image4" />
              {/* <img style={{ paddingLeft: "2vw" }} width={"500px"} src={placement} alt="Image 3" /> */}
            </div>
          </div>
        </div>
      </section>


      <hr />

      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            {/* <h3 className={classes.heading}>About</h3> */}
            <h2 className={classes.heading1}>Medi-Caps University</h2>
            <p className={classes.para}>Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery. Hence the foundation of Medi-Caps University has been laid down. With a strong foundation of the Group scince 15 years, Medi-Caps University wishes to maintain the same objective of imparting quality education and producing sound professionals for the benefit of the society at large.</p>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={Qblock} alt="about" />
          </div>
        </div>
      </section>
      <hr />

      {/* c */}

      <section  className={classes.committee_aboutSec}>
        {/* <div className={classes.about}> */}
        <div className={classes.committee_details}>
          <h3 className={classes.comm_heading}>Committees</h3>
          <h2 className={classes.comm_heading1}>Moonstone 2k24</h2>
          {/* <p className={classes.para}>

                            The annual college festival, Moonstone, is eagerly awaited by the students. The festival celebrates the talent, creativity, and enthusiasm of the students. The students come together to exhibit their diverse skills and passions, creating an unforgettable experience for everyone involved. A variety of events have been planned for the students, including cultural performances, literary competitions, sports events, art exhibits, and more. All students are cordially invited to take part in this exhilarating weekend filled with entertainment, learning, and discovery. Let us celebrate the power of community and the spirit of creativity that the university epitomises.
                        </p> */}
        </div>
        <div className={classes.card}>
          <div className={classes.card_content}>
            <div className={classes.card2}>
              <div className={classes.image_container}>
                {/* <img src={classes.image2} alt={imageName} /> */}
                <img src="https://moonstone.onrender.com/images/Nair.jpeg" className={classes.img2} alt="" />
                <div className={classes.overlay}>
                  <h3>Prof. Pramod S Nair</h3>
                  <h5>Convener of Moonstone 2024</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default About2;
