import React from 'react'
import classes from './Sponsor.module.css'
import img from '../assets/sponsor.jpg'
import img2 from '../assets/sponsor2.jpg'
const Sponsor = () => {
    return (
        <>
            <section id="about" className={classes.aboutSec}>
                <h2 className={classes.heading1} >Sponsor</h2>
                <div className={classes.about}>


                    <div className={classes.details}>
                        {/* <h3 className={classes.heading}>EMPOWER YOUR FUTURE </h3> */}
                        <img src={img} alt="Sponsor " srcset="" className={classes.spo} />
                        <img src={img2} alt="Sponsor2 " srcset="" className={classes.spo2} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sponsor
