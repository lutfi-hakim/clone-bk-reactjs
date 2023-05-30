import React from "react";
import Card from "../../../components/Cards/Card";

function ContentTabs({ data }) {
  console.log(data);
  return (
    <div className="list-item-tabs">
      {data.map((v, i) => {
        return (
          <article className="cards" key={i}>
            <img src={v.image} alt="" />
            <div className="content">
              <h3>{v.name}</h3>
              <span>Rp. 100</span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ContentTabs;
