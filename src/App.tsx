import React from "react";
import "./App.css";
import LandingPage from "./pages/landing-page";
import GoTopButton from "./components/ScrollToTop";

function App():JSX.Element{
  return (
    <div className="App">
      <LandingPage />
      {/* <Accordion /> */}
      <GoTopButton />
    </div>
  );
}

export default App;
