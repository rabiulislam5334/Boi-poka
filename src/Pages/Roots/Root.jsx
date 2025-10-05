import React from "react";
import Navber from "../../Component/Header/Navber";
import { Outlet } from "react-router";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
  return (
    <div className=" w-10/12 mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
