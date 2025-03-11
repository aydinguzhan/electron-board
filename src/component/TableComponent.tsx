import React, { useState, useEffect } from "react";
import { Table } from "antd";

export function TableComponent() {
  const columns: any = [
    {
      title: "Job",
      dataIndex: "jobTitle",
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Description",
      dataIndex: "jobDescription",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Topic",
      dataIndex: "topic",
      // filters: [
      //   {
      //     text: "London",
      //     value: "London",
      //   },
      //   {
      //     text: "New York",
      //     value: "New York",
      //   },
      // ],
      // onFilter: (value, record) => record.address.startsWith(value as string),
      filterSearch: true,
      width: "40%",
    },
  ];

  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    (async () => {
      if (window?.electronAPI?.getAllJob) {
        // electronAPI'nin var olduğundan emin ol
        try {
          const jobs = await window.electronAPI.getAllJob();
          console.log(jobs);
          setTableData(jobs);
        } catch (error) {
          console.error("Failed to fetch jobs:", error);
        }
      } else {
        console.error("electronAPI is not available");
      }
    })();
  }, []);
  return (
    <div>
      <Table<any> columns={columns} dataSource={tableData} />
    </div>
  );
}
