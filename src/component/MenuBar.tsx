import React, { useContext, useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
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
    const {setPage} = React.useContext(Context);
    const items: MenuItem[] = [
      { key: "1", icon: <PieChartOutlined />, label: "Dashboard", onClick:()=>setPage(PAGES.DASHBOARD) },
      { key: "2", icon: <DesktopOutlined />, label: "Profil" ,onClick : ()=>setPage(PAGES.PROFILE)},
      { key: "3", icon: <ContainerOutlined />, label: "Option 3" ,  onClick	: ()=>console.log("dasds")},
      {
        key: "sub1",
        label: "Navigation One",
        icon: <MailOutlined />,
        children: [
          { key: "5", label: "Option 5" },
          { key: "6", label: "Option 6" },
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      
      },
      {
        key: "sub2",
        label: "Navigation Two",
        icon: <AppstoreOutlined />,
        children: [
          { key: "9", label: "Option 9" },
          { key: "10", label: "Option 10" },
          {
            key: "sub3",
            label: "Submenu",
            children: [
              { key: "11", label: "Option 11" },
              { key: "12", label: "Option 12" },
            ],
          },
        ],
      },
    ];
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Button
      className="w-full"
        type="primary"
        onClick={toggleCollapsed}
    
      >
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
