import React from "react";
import "../App.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.jpg";

const Feature = () => {
  return (
    <div className="mt-4 contaienr-fluid featureContainer ">
      <div className="d-flex justify-content-center pt-8 fs-2 fw-bolder">
        Features
      </div>
      <div className="container text-center">
        <div className="row mt-5">
          <div className="col">
            <img src={img1} alt="" style={{ width: "80%", height: "90%" }} />
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              maiores quibusdam consequatur vitae aliquid nulla iusto deserunt
              ipsum, deleniti beatae commodi eveniet, reiciendis ipsa dicta qui!
              Quae odio labore autem.
            </p>
          </div>
          <div className="col">
            <img src={img2} alt="" style={{ width: "80%", height: "90%" }} />
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              consequatur sit exercitationem assumenda illo voluptate facere
              maiores harum modi, ullam ratione architecto in consectetur cum
              officiis? Molestiae doloribus ullam hic.
            </p>
          </div>
          <div className="col">
            <img src={img3} alt="" style={{ width: "80%", height: "90%" }} />
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nulla dolor, esse at exercitationem perspiciatis non deserunt
              nesciunt quasi optio, eius soluta commodi, vero eveniet temporibus
              quidem consectetur? Cum, expedita!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
