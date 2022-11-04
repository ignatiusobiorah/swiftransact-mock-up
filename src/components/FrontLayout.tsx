import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const FrontLayout: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <div className="frontLayout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
