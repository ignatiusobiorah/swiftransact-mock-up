import React from "react";
import FrontLayout from "../components/FrontLayout";
import "../styles/error.scss";

const Error: React.FC = () => {
  return (
    <FrontLayout>
      <div className="error">
        <div className="errorText">
          <h2>Oops! Page not found.</h2>
          <h1>404</h1>
          <p>We can't find the page you're looking for</p>
          <a href="/">
            <button>Go back home</button>
          </a>
        </div>
      </div>
    </FrontLayout>
  );
};

export default Error;
