import React from "react";
import img from "../assets/rename.jpeg";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="conatiner-fluid">
        <div className="row">
          <div className=" col me-5">
            <img className="child" src={img} alt="" />
          </div>
          <div className="col ">colums</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
