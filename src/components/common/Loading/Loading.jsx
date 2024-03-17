import React from "react";
import classes from "./Loading.module.css";
import { useState } from "react";
import { useEffect } from "react";

// var loader=document.querySelector(classes.svg_frame)
// setTimeout(function(){
//     loader.style.top="-100%"
// },2000)

const Loading = () => {
  const [loaderTop, setLoaderTop] = useState('0'); // Initial top position of the loader

  useEffect(() => {
    // const loader = document.querySelector(classes.svg_frame);

    // Set the loader top position to "-100%" after 2000 milliseconds
    const timeoutId = setTimeout(() => {
      setLoaderTop('-100%');
    }, 1900);

    // Clear the timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <div>
      {/* Your other component content */}
      <div
        className={classes.svg_frame}
        style={{ top: loaderTop }}
      >
        <h1>Embrace</h1>
        <h1>Your</h1>
        <h1>Journey</h1>
      </div>
    </div>
  );
};

export default Loading;
