import Header from "../components/Header";
import React from "react";

const HeaderOnly = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div>
      <Header></Header>
      <div className="containe">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default HeaderOnly;
