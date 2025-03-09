import * as React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

export interface ITabsProfileProps {
  tabsOptions: TabsProps["items"];
}

export function TabsProfile({ tabsOptions }: ITabsProfileProps) {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={tabsOptions} onChange={onChange} />
    </div>
  );
}
