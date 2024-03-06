import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = ({ image }) => {
  return (
    <Fragment>
      <Header image={image}></Header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Main;
