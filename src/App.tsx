import { useState } from "react";
import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import Feature from "./Components/Feature";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Feature />
      </div>
      {/* <div className="container-fluid d-flex flex-lg-row">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
          <h3>{count}</h3>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
      </div> */}
    </>
  );
}

export default App;
