import React from "react";
import FrontLayout from "../components/FrontLayout";
import app from "../img/app-3.png";
import "../styles/about.scss";

const About: React.FC = () => {
  return (
    <FrontLayout>
      <div className="about">
        <div className="aboutText">
          <h3>SWIFTRANSACT</h3>
          <p>
            This is a mock up of the crypto site I began working on to put to
            use what I have been learning from Altschool so far..
          </p>
          <p>This mock up site is used to acheieve the following tasks:</p>
          <ul>
            <li>Setup react-router</li>
            <li>Implement Nested routes</li>
            <li>404 page</li>
            <li>Error Boundary</li>
            <li>
              Setup fake userAuthContext to always carry out a fake
              authenthication
            </li>
            <li>
              Extract out a custom hook to get the currently logged-in user
            </li>
            <li>Implent SEO and Navigation Menu on each page</li>
          </ul>
        </div>
        <div className="aboutImg">
          <img src={app} alt="mobile-phone-image" />
        </div>
      </div>
    </FrontLayout>
  );
};

export default About;
