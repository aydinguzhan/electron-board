import * as React from "react";
import { Cards } from "../component/Cards";
import { JobsForm } from "../component/JobsForm";

export function Jobs() {
  React.useEffect(() => {
    (async () => {
      if (window?.electronAPI?.getAllJob) {
        // electronAPI'nin var olduğundan emin ol
        try {
          const jobs = await window.electronAPI.getAllJob();
          console.log(jobs);
        } catch (error) {
          console.error("Failed to fetch jobs:", error);
        }
      } else {
        console.error("electronAPI is not available");
      }
    })();
  }, []);

  return (
    <div className="jobs-area">
      <Cards />
      <JobsForm />
    </div>
  );
}
