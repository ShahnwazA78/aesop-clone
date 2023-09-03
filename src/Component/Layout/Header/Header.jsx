import React from "react";
import Advice from "./OffersAndAdvice/Advice";
import Offers from "./OffersAndAdvice/Offers";
import Navbar from "../Navbar/Navbar";
import "./header.css"
const Header = () => {
  return (
    <section className="Header">
      <Advice />
      <Offers />
      <Navbar />
    </section>
  );
};

export default Header;
