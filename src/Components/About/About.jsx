import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/Bharat.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Bharat Bhangale, a passionate Computer Engineering student with a strong foundation in web development technologies such as HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.</p>
            <p>I am now seeking an internship to utilize my talents and gain hands-on experience.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p> HTML,CSS & JS</p> <hr style={{ width: "70%" }} /> </div>
            <div className="about-skill"><p> React Js</p> <hr style={{ width: "75%" }} /></div>
            <div className="about-skill"><p> Node Js & Express Js</p> <hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p> MongoDB</p> <hr style={{ width: "80%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Fresher</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
