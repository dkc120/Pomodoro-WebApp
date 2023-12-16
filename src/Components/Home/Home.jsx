import React, { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [time, setTime] = useState(60);
  const [watch, setWatch] = useState(0);
  const [value, setValue] = useState(true);
  let a;
  const startme = () => {
    setValue(false);
    a = setInterval(() => {
      setTime((previous) => {
        return previous - 1;
      });
    }, 1000);
    setWatch(a);
  };
  if (time === 0) {
    clearInterval(watch);
  }
  const stopme = () => {
    setValue(true);
    clearInterval(watch);
  };

  const hello = () => {
    if (value) {
      startme();
    } else {
      stopme();
    }

    if (time === 0) {
      setTime(60);
      setValue(true);
      startme();
    }
  };
  console.log(value, time);
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="timerbar">
          <span className="time">{time}</span>
        </div>
      </div>
      <button type="button" onClick={hello}>
        {!time ? "start again" : value ? "start" : "stop"}
      </button>
    </div>
  );
};

export default Home;
