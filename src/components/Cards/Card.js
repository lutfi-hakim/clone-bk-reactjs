import React from "react";
import "./index.scss";

function Card({ data }) {
  return (
    <div className="list-item">
      {data.map((v, i) => {
        return (
          <article className="cards" key={i}>
            <img src={v.image} alt="" />
            <div className="content">
              <h3>{v.name}</h3>
              <button className="btn-order">Order</button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Card;
