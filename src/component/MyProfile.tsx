import * as React from "react";
import { Card, Col, Row, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

interface IMyProfile {
  StaticticOptions: {
    title: "Active" | "Idle";
    value: number;
    precision: number;
    valueStyle?: any;
    prefix?: any;
    suffix: string;
  };
}
export function MyProfile({ StaticticOptions }: IMyProfile) {
  const { precision, prefix, suffix, title, value, valueStyle } =
    StaticticOptions;
  return (
    <div className="statics-card-box">
      <Card variant="borderless">
        <Statistic
          title={title}
          value={value}
          precision={precision}
          valueStyle={valueStyle ?? { color: "#3f8600" }}
          prefix={prefix ?? <ArrowUpOutlined />}
          suffix={suffix}
        />
      </Card>
    </div>
  );
}
