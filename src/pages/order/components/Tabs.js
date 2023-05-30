import React from "react";

import { Radio, Space, Tabs } from "antd";
import { useState } from "react";
import ContentTabs from "./ContentTabs";

function TabsLeft({ data }) {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div>
      <Tabs
        tabPosition={tabPosition}
        items={data.map((v, i) => {
          const id = String(i + 1);
          return {
            label: v.name,
            key: id,
            children: <ContentTabs data={v.data} />,
          };
        })}
      />
    </div>
  );
}

export default TabsLeft;
