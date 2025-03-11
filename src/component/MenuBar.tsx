import React, { useState } from "react";
import {
  AppstoreOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { Context } from "../contexts/mainContext";
import { PAGES } from "../utils/Enums";
type MenuItem = Required<MenuProps>["items"][number];

export default function MenuBar() {
  const [collapsed, setCollapsed] = useState(false);
  const { setPage } = React.useContext(Context);
  const items: MenuItem[] = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Dashboard",
      onClick: () => setPage(PAGES.DASHBOARD),
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "Profil",
      onClick: () => setPage(PAGES.PROFILE),
    },
    {
      key: "sub1",
      label: "Analiz",
      icon: <AppstoreOutlined />,
      children: [
        { key: "5", label: "Analiz-1", onClick: () => setPage(PAGES.ANALIZ_1) },
        { key: "6", label: "Analiz-2", onClick: () => setPage(PAGES.ANALIZ_2) },
        { key: "7", label: "Analiz-3", onClick: () => setPage(PAGES.ANALIZ_3) },
      ],
    },
  ];
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Button className="w-full" type="primary" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />
    </>
  );
}
