import React from "react";
import { Calendar } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

export function MyCalendar() {
  return (
    <div>
      <Calendar fullscreen={true} onPanelChange={onPanelChange} />
    </div>
  );
}
