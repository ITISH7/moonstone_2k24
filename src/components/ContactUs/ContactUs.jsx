import React from 'react'
import classes from "./ContactUs.module.css"

import Contact from '../Contact/Contact'

const ContactUs = () => {
  return (
    <>
      <div className={classes.background}>
        <section id="about" className={classes.aboutSec}>
          <div className={classes.about}>
            <div className={classes.details}>
              {/* <h3 className={classes.heading}>EMPOWER YOUR FUTURE </h3> */}
              <h2 className={classes.heading1} >Contact us</h2>

              <p className={classes.para}>
                Medi-Caps University A.B. Road, Pigdamber, Rau Indore - 453331
              </p>
              <div className={classes.manas}>
                <div className={classes.manas_chotu}>
                  <h3 className={classes.heading}>For Sponsership</h3>
                  <p className={classes.para}>
                    Prof. Shilpa Trripati <br />
                    +91 98275 29922
                  </p>
                </div>
                <div className={classes.manas_chotu}>
                  <h3 className={classes.heading}>For Cultural Event</h3>
                  <p className={classes.para}>
                    Prof. Preeti Jain <br />
                    9827061982
                  </p>
                </div>


              </div>
              <div className={classes.manas}>
                <div className={classes.manas_chotu}>
                  <h3 className={classes.heading}>For Sports Event</h3>
                  <p className={classes.para}>
                    Prof. Ruchir Lashkari <br />
                    9009574161
                  </p>
                </div>
                <div className={classes.manas_chotu}>
                  <h3 className={classes.heading}>For Management</h3>
                  <p className={classes.para}>
                    Prof. D.K. Pandey<br />
                    +91 82348 20312
                  </p>
                </div>


              </div>
              <div className={classes.manas_chotu}>
                <h3 className={classes.heading}>For Techno Event</h3>
                <p className={classes.para}>
                Prof. Latika Mam(Technichal Events) <br />
                  +91 94798 89242
                </p>
              </div>
              <div className={classes.manas_chotu}>
                <h3 className={classes.heading}>Technichal Assistance</h3>
                <p className={classes.para}>
                  Prof. Sanket gupta<br />
                  +91 97130 29078<br/>
                  Itish Jain<br />
                    +91 98266 51112<br/>
                    Pranay Mishra<br />
                    +91 93010 08559
                </p>
                
               
              </div>


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


          </div>
        </section>
        {/* <div className={classes.registerForm}> */}
        {/* <div className={classes.card}>
          <div className={classes.card2}>
            <h1 className={classes.heading}>Contact Us</h1>
            <div className={classes.userData}>
              <div className={classes.input_container}>
                <label className={classes.input_label} >
                  Name<span className={classes.mandatory}>*</span>
                </label>
                <input className={classes.input} />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Email<span className={classes.mandatory}>*</span>
                </label>
                <input className={classes.input} />
              </div>
              <div className={classes.input_container}>
                <label className={classes.input_label}>
                  Message<span className={classes.mandatory}>*</span>
                </label>
                <textarea className={classes.message}>Enter message Here</textarea>
              </div>
            </div>
            <div className={classes.button}><Button label="Send" /></div>
          </div>
        </div> */}
        {/* </div> */}
      </div>
      <Contact />
    </>
  )
}

export default ContactUs