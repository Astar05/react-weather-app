import React from "react";
import "./styles.css";

export default function WeatherVideo() {
  return (
    <div className="WeatherVideo">
      <video autoPlay loop playsInline muted>
        <source src="media/cloudy-sun.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
