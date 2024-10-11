import React from "react";
import classes from "./Glimpses.module.css";

const Glimpses = () => {
  const data = [
    {
      id: 1,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728635811/SaveClip.App_450147023_791755416461445_8337933301269881048_n_mopfls.jpg ",
    },
    {
      id: 2,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728636834/SaveClip.App_453846537_808300384806948_7458678361663714931_n_nvljeo.jpg ",
    },
    {
      id: 3,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728636833/SaveClip.App_453976828_808300371473616_3876492190915780622_n_yuoano.jpg",
    },
    {
      id: 4,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728636834/SaveClip.App_452098112_799904695646517_7443917146098365544_n_t2jhzw.jpg",
    },
    {
      id: 5,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728636832/SaveClip.App_434362512_399532576360733_1883271924429448149_n_gmquvz.jpg",
    },
    {
      id: 6,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728636832/SaveClip.App_434263124_261185910390054_5085116166518271731_n_kaypzd.jpg",
    },
    {
      id: 7,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728636834/SaveClip.App_452195160_799904722313181_6453146402425761982_n_b3bkhw.jpg ",
    },
    {
      id: 8,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728636832/SaveClip.App_434561934_786970433340015_3565513365893367969_n_a7j6yu.jpg",
    },
    {
      id: 9,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728635812/SaveClip.App_462521889_878567417310911_4536411965012835692_n_pmpmlh.jpg ",
    },
    {
      id: 10,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728635812/SaveClip.App_462704594_1865413090620371_8143185432720928837_n_tglyjm.jpg",
    },
    {
      id: 11,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728635812/SaveClip.App_454583855_812621384374848_8819387516437269943_n_uyml85.jpg",
    },
    {
      id: 12,
      imagSrc: "https://res.cloudinary.com/dejlssoxx/image/upload/v1728635812/SaveClip.App_459968342_1017433573212864_2016697063859775758_n_hsg7ip.jpg",
    },
    // {
    //   id: 14,
    //   imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542729/img15_x3sgi0.jpg ",
    // },
    // {
    //   id: 15,
    //   imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542768/img10_qhae9s.jpg ",
    // },
    // {
    //   id: 16,
    //   imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542830/img12_waemq3.jpg ",
    // },
    // {
    //   id: 17,
    //   imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542830/img13_m3fh77.jpg ",
    // },
    // {
    //   id: 18,
    //   imagSrc: "https://res.cloudinary.com/dulzutyqm/image/upload/v1709542838/img37_q2icsn.jpg ",
    // },
    // 
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
