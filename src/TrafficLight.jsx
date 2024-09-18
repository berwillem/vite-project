import { useState, useEffect } from "react";
import "./TrafficLight.css";

export default function TrafficLight() {
  // par défaut la couleur est rouge
  const [initialLight, setInitialLight] = useState("red");

  // useEffect to change the color every set of time
  useEffect(() => {
    const interval = setInterval(() => {
      setInitialLight((prevLight) => {
        if (prevLight === "red") {
          return "yellow";
        } else if (prevLight === "yellow") {
          return "green";
        } else if (prevLight === "green") {
          return "red";
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Apply the initial light as a class to the appropriate div
    <div className="traffic-light">
      <div className={`light ${initialLight === "red" ? "red" : ""}`}></div>
      <div
        className={`light ${initialLight === "yellow" ? "yellow" : ""}`}
      ></div>
      <div className={`light ${initialLight === "green" ? "green" : ""}`}></div>
    </div>
  );
}
