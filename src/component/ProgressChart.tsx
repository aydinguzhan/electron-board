import * as React from "react";
import { Flex, Progress } from "antd";

export function ProgressChart() {
  return (
    <div>
    <Flex gap="large" wrap>
      <Progress type="dashboard" percent={75} />
      <Progress type="dashboard" percent={10} status="normal" />
      <Progress type="dashboard" percent={80} status="normal" />
    </Flex>
    </div>
  );
}
