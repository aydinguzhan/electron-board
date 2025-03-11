import * as React from "react";
import {
  Alert,
  Button,
  Input,
  InputNumber,
  notification,
  NotificationArgsProps,
  Select,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  CheckCircleFilled,
  DeleteOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { IJob } from "../mainProcess/interfaces";
export function JobsForm() {
  type NotificationPlacement = NotificationArgsProps["placement"];
  const [api, contextHolder] = notification.useNotification();
  const formikRef = React.useRef(null) as any;
  const openNotification = (notification: any) => {
    api.info({
      message: ` ${notification?.message}`,
      description: ` ${notification?.description}`,
      duration: 5,
      placement: "bottomRight",
      icon: <CheckCircleFilled />,
    });
  };
  return (
    <Formik
      innerRef={formikRef}
      validationSchema={validationSchema}
      initialValues={{
        jobTitle: "",
        jobDescription: "",
        jobStory: 0,
        topic: null,
      }}
      onSubmit={async (values: IJob) => {
        const response = await window.electronAPI.createJob(values);
        openNotification({
          message: response?.message,
          description:
            response?.description?.jobTitle + "başarılı şekilde kaydedildi.",
        });
      }}
    >
      {({ values, setFieldValue, errors, touched, resetForm, submitForm }) => {
        return (
          <Form>
            {contextHolder}
            <div className="form-buttons"></div>
            <div className="form-container">
              <div className="form-body">
                <div className="form-partical">
                  <label htmlFor="jobTitle">Job Title</label>
                  <Input
                    id="jobTitle"
                    defaultValue={values?.jobTitle}
                    value={values?.jobTitle}
                    status={errors.jobTitle && touched?.jobTitle && "error"}
                    placeholder="Basic usage"
                    onChange={(e: any) => {
                      console.log(e.target.value);
                      setFieldValue("jobTitle", e.target.value);
                    }}
                  />
                  {errors?.jobTitle && touched?.jobTitle && (
                    <Alert
                      message={errors?.jobTitle as string}
                      type="error"
                      banner
                    />
                  )}
                </div>
                <div className="form-partical">
                  <label htmlFor="topic">Job Topic </label>
                  <Select
                    id="topic"
                    showSearch
                    placeholder="topic"
                    defaultValue={values?.topic}
                    value={values?.topic}
                    status={errors.topic && touched?.topic && "error"}
                    onChange={(e: any, option: any) => {
                      setFieldValue("topic", option.label);
                      console.log(option);
                    }}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    loading={true}
                    options={[
                      { value: "1", label: "Jack" },
                      { value: "2", label: "Lucy" },
                      { value: "3", label: "Tom" },
                    ]}
                  />
                  {errors?.topic && touched?.topic && (
                    <Alert
                      message={errors?.topic as string}
                      type="error"
                      banner
                    />
                  )}
                </div>
              </div>
              <div className="form-body">
                <div className="form-partical">
                  <label htmlFor="jobDescription">Job Description </label>
                  <TextArea
                    id="jobDescription"
                    status={
                      errors.jobDescription &&
                      touched?.jobDescription &&
                      "error"
                    }
                    rows={1}
                    placeholder="maxLength is 6"
                    maxLength={6}
                    defaultValue={values?.jobDescription}
                    value={values?.jobDescription}
                    onChange={(val: any) =>
                      setFieldValue("jobDescription", val.target.value)
                    }
                  />
                  {errors?.jobDescription && touched?.jobDescription && (
                    <Alert
                      message={errors?.jobDescription as string}
                      type="error"
                      banner
                    />
                  )}
                </div>
                <div className="form-partical">
                  <label htmlFor="jobStory">Job Story</label>
                  <InputNumber
                    min={1}
                    max={10}
                    status={errors.jobStory && touched?.jobStory && "error"}
                    defaultValue={values?.jobStory}
                    value={values?.jobStory}
                    onChange={(val: any) => {
                      setFieldValue("jobStory", val);
                    }}
                  />
                  {errors?.jobStory && touched?.jobStory && (
                    <Alert
                      message={errors?.jobStory as string}
                      type="error"
                      banner
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="form-buttons">
              <div>
                <Button
                  type="primary"
                  icon={<SaveOutlined />}
                  onClick={() => {
                    submitForm();
                  }}
                >
                  Save Job
                </Button>
              </div>
              <div>
                <Button
                  type="primary"
                  icon={<DeleteOutlined />}
                  onClick={() => resetForm()}
                >
                  Clean Form
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

const validationSchema = Yup.object().shape({
  jobTitle: Yup.string().required("Job Title is required"),
  jobDescription: Yup.string().required("Job Description is required"),
  jobStory: Yup.number()
    .min(1, "Job Story must be at least 1")
    .max(10, "Job Story must be at most 10")
    .required("Job Story is required"),
  // topic: Yup.string().required("Job Topic is required"),
});
