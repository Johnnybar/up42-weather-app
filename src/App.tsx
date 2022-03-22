import React, { SyntheticEvent, useEffect } from "react";
import axios from "axios";
import "./App.scss";

function App() {
  return (
    <div className="up42-app">
      <div className="container">
        <div className="row">
          <div className="col-md-4">sky icon</div>
          <div className="col-md-4">weather</div>
          <div className="col-md-4">info </div>
        </div>
      </div>
    </div>
  );
}

export default App;
