import React from "react";
import TabsLeft from "./components/Tabs";

import "./index.scss";

import { AutoComplete, Input } from "antd";
import { useState } from "react";

import data from "../../constant/data.json";

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

function Order() {
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };
  return (
    <section style={{ marginTop: "44px" }}>
      <div className="container-content">
        <div className="search-menus">
          <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
              width: 214,
            }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
          >
            <Input.Search size="large" placeholder="input here" enterButton />
          </AutoComplete>
        </div>
        <TabsLeft data={data?.data?.cards} />
      </div>
    </section>
  );
}

export default Order;
