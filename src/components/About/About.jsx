// import Button from "../common/Button/Button";
import classes from "./About.module.css";
// import about from "./about.svg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>
              {" "}
              <i>EMPOWER YOUR FUTURE </i>
            </h3>
            <h2 className={classes.heading1}>MOONSTONE AWAITS YOU!</h2>
            <p className={classes.para}>The annual college festival, Moonstone, is eagerly awaited by the students. The festival celebrates the talent, creativity, and enthusiasm of the students. The students come together to exhibit their diverse skills and passions, creating an unforgettable experience for everyone involved.</p>
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={"https://res.cloudinary.com/dejlssoxx/image/upload/v1728637466/2024-07-08_ceizno.jpg"} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
