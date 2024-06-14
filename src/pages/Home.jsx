import { useState } from "react";
import Cards from "../components/organisms/Cards";
import Header from "../components/molecules/Header";
import "./Home.css";

function Home() {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div id="div-div__home">
      <Header OnClick={handleClick}></Header>
      <Cards></Cards>
    </div>
  );
}

export default Home;
