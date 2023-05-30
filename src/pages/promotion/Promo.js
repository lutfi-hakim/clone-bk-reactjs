import React from "react";
import data from "../../constant/data.json";

import "./index.scss";

function Promo() {
  return (
    <section>
      <div className="container-content">
        {data?.data?.promo.map((v, i) => {
          return (
            <div key={i}>
              <img src={v.image} className="img-promo" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Promo;
