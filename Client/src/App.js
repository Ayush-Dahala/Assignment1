import React from "react";
import Grid from "./Component/Grid";
import { Routes, Route } from "react-router-dom";
import Chart from "./Component/Chart";

const App = () => {
  return (
    <div>
      <Chart/>
      <Routes>
        <Route path="/" element={<Grid />}></Route>
        <Route path="/about" element={<h1>About Us</h1>}></Route>
      </Routes>
    </div>
  );
};

export default App;
