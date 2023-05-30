import React from "react";
import Cards from "../../../components/Cards/Card";

function Menus({ data }) {
  return (
    <section className="container">
      <div className="menus">
        <div>
          <p>Our Menus</p>
        </div>
        <Cards data={data} />
      </div>
    </section>
  );
}

export default Menus;
