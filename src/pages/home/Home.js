import React from "react";
import "./index.scss";

import Carousels from "./components/Carousel";
import Menus from "./components/Menus";

import data from "../../constant/data.json";

function Home() {
  return (
    <>
      <Carousels data={data?.data?.slider} />
      <Menus data={data?.data?.cards} />
    </>
  );
}

export default Home;
