import React from "react";
import Menu from "./Menu";
import Footer from './Footer'
import vid from '../assets/hero.mp4';
import hero from '../assets/floor.jpg';
const Base = ({
  title = "My Title",
  description = "",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
     
      <div className="text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <Footer/>
  </div>
);

export default Base;
