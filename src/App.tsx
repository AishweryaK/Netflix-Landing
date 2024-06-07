import React from "react";
import "./App.css";
import Header from "./pages/landing-page";
import Accordion from "./components/Accordion";
import GoTopButton from "./components/Accordion";

function App():JSX.Element{
  return (
    <div className="App">
      <Header />
      <Header />
      <Header />
      <Header />
      {/* <Accordion /> */}
      <GoTopButton />
    </div>
  );
}

export default App;
