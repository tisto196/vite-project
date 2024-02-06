import React, { useState, useEffect } from "react";
import img from "../assets/rename.jpeg";

const Home = () => {
  const [text, setText] = useState("GET All IN ONE");

  const wordsArray = ["Netflix", "Disney+", "Hulu", "SonyLiv"];
  const colorsArray = ["#E50914", " #113ccf", "#3dbb3d", "#165b65"];

  let index = 0;
  useEffect(() => {
    const intervalID = setInterval(() => {
      const coloredText = `<span style="Color:${colorsArray[index]}">${wordsArray[index]}</span>`;
      setText("GET All IN ONE " + coloredText);
      index = (index + 1) % wordsArray.length;
    }, 1200);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="mt-5">
      <div className="conatiner-fluid">
        <div className="row">
          <div className=" col me-5">
            <img className="child " src={img} alt="" />
          </div>
          <div className="col dynamic  ">
            <p
              className="fs-1 fw-bolder"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              consectetur tempora praesentium officia laboriosam in magnam
              facilis, atque non, odit asperiores consequuntur vitae rerum hic
              possimus? In beatae provident ab.
            </p>
            <button className="btn btn-primary d-flex justify-content-start">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
