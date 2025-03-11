import React from "react";
import type { TabsProps } from "antd";
import { TabsProfile } from "../component/TabsProfile";
import { MyProfile } from "../component/MyProfile";
import { ArrowDownOutlined, MinusOutlined } from "@ant-design/icons";
import { MyCalendar } from "../component/MyCalendar";
import { Jobs } from "./Jobs";

const dataArray = [
  {
    precision: 2,
    suffix: "%",
    title: "Web",
    value: 22.7,
  },
  {
    precision: 2,
    suffix: "%",
    title: "Reading",
    value: 0,
    valueStyle: { color: "#FFB200" },
    prefix: <MinusOutlined />,
  },
  {
    precision: 2,
    suffix: "%",
    title: "Tasks",
    value: 10.05,
    valueStyle: { color: "#cf1322" },
    prefix: <ArrowDownOutlined />,
  },
];
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Profil",
    children: (
      <div className="statics-card-container">
        {dataArray.map((item: any) => (
          <MyProfile StaticticOptions={item} />
        ))}
      </div>
    ),
  },
  {
    key: "2",
    label: "Calendar Board",
    children: <MyCalendar />,
  },
  {
    key: "3",
    label: "Jobs",
    children: <Jobs />,
  },
];

export default function Profile() {
  return (
    <div>
      <TabsProfile tabsOptions={items} />
    </div>
  );
}
