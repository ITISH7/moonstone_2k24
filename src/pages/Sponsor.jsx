import React from 'react'
import classes from './Sponsor.module.css'
import img from '../assets/sponsor.jpg'

const Sponsor = () => {
    return (
        <>
            <section id="about" className={classes.aboutSec}>
                <h2 className={classes.heading1} >Sponsor</h2>
                <div className={classes.about}>


                    <div className={classes.details}>
                        {/* <h3 className={classes.heading}>EMPOWER YOUR FUTURE </h3> */}
                        <img src={img} alt="Sponsor Image" srcset="" className={classes.spo} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sponsor
