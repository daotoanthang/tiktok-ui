import Header from "../components/Header";
import Slidebar from "./Slidebar";
import React from "react";

const DefaultLayout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <div>
      <Header></Header>
      <div className="containe">
        <Slidebar></Slidebar>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
