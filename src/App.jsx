import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import Button from "./components/common/Button/Button";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import MainEvents from "./components/MainEvents/MainEvents";
// import Faq from "../src/components/Faq/Faq";
import Homepage from "./pages/Homepage";
import SingleEventPage from "./components/SingleEventPage/SingleEventPage";
import Leaderboard from "./pages/Leaderboard";
import AboutPage from "./pages/AboutPage";
import Register from "./pages/registerPage/RegisterPage";
import ContactUs from "./components/ContactUs/ContactUs";
import Loading from "./components/common/Loading/Loading";

// import SwupOverlayTheme from "@swup/overlay-theme";
// import Swup from "swup";
/* Google Analytics */
import ReactGA from "react-ga";
import Glimpses from "./pages/Glimpses";
import Sponsor from "./pages/Sponsor";
import Cultural from "./components/cultural page/Cultural";
import Night from "./components/Night/Night";
import Sports from "./components/Sports/Sports";
import Techno from "./components/Techno/Techno";
import Management from "./components/Managment/Management";

const TRACKING_ID = "UA-257375779-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  // const swup = new Swup({
  //   plugins: [
  //     new SwupOverlayTheme({
  //       color: "#2D2E82",
  //       duration: 500,
  //       direction: "to-right",
  //     }),
  //   ],
  // });
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location);
  }, [location]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3100);
  useEffect(() => {});
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/events" element={<MainEvents />} />
            <Route path="/events/:eventId" element={<SingleEventPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/hidden" element={<Hidden />} /> */}
            <Route path="/glimpses" element={<Glimpses />} />
            <Route path="/sponsor" element={<Sponsor />} />

            {/* <Route path="/register/:eventid/:category/:fees/:maxsize/:minsize/:qrhalf/:eventName" element={<Register />} /> */}
            <Route path="/cultural" element={<Cultural />} />
            <Route path="/night" element={<Night />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/techno" element={<Techno />} />
            <Route path="/management" element={<Management />} />

            <Route path="/register/:eventid/:category/:fees/:maxsize/:minsize/:eventName" element={<Register />} />

            {/*   <Route path="/leaderboard/:eventId" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />}></Route> */}
            {/* <Route path="/" element={<Landing />}></Route>  */}
            {/* <Route path="/" element={<Faq />}></Route>  */}
          </Routes>
          <Footer />
          {/* <Button /> */}
          {/* </div> */}
        </>
      )}
    </>
  );
};

export default App;
