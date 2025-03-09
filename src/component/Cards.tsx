import React from "react";
import { Card } from "antd";

export function Cards() {
  return (
    <div className="card-container">
      <div className="card-box">
        <Card title="Card title" variant="outlined">
          Card content
        </Card>
      </div>
      <div className="card-box">
        <Card title="Card title" variant="outlined">
          Card content
        </Card>
      </div>
      <div className="card-box">
        <Card title="Card title" variant="outlined">
          Card content
        </Card>
      </div>
  
    </div>
  );
}
