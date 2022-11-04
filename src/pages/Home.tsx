import React from "react";
import { Helmet } from "react-helmet-async";
import FrontLayout from "../components/FrontLayout";
import bitcoin from "../img/btc.png";
import "../styles/home.scss";

const Home: React.FC = () => {
  return (
    <FrontLayout>
      <div className="home">
        <Helmet>
          <title>Swiftransact</title>
          <meta
            name="description"
            content="Effortlessly manage your digital assets and make instant
            transactions across the Milky Way.."
          />
          <link rel="canonical" href="/" />
        </Helmet>
        <div className="contentText">
          <h4>SAFE AND SECURE</h4>
          <h2>Buy and sell crypto currencies</h2>
          <h6>
            Effortlessly manage your digital assets and make instant
            transactions across the Milky Way..
          </h6>
          <button className="contentBtn">
            <a href="/sign">
              {" "}
              SIGN IN<i className="fa-solid fa-circle-arrow-right"></i>
            </a>
          </button>
        </div>
        <div className="contentImg">
          <img src={bitcoin} alt="bitcoin-image" />
        </div>
      </div>
    </FrontLayout>
  );
};

export default Home;
