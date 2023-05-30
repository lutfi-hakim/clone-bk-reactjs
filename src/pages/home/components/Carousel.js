import React from "react";

import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  // height: "540px",
  width: "100%",
  height: "600px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};

function Carousels({ data }) {
  console.log(data);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <section>
      <Carousel afterChange={onChange} autoplay>
        {data.map((v, i) => {
          return (
            <div key={i}>
              <img src={v.image} style={contentStyle} />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Carousels;
