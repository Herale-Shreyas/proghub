import React from "react";
import Solve from "./pages/Solve";
import "./style.scss";
import Header from "./pages/components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Solve />
    </div>
  );
};

export default App;
