import { useState } from "react";
import { Form, Input, Button, Select, InputNumber, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addPatient } from "../../store/action";
const { Option } = Select;
const Addpatient = () => {
  const [form] = Form.useForm();
  const state = useSelector((state: any) => state.patient);

  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    const data = { ...values, id: state.patient.length + 1 };
    dispatch(addPatient(data));
    handleCancel();
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button
        type="primary"
        className="addpatientmodalbutton"
        onClick={showModal}
      >
        Add patient
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="w-50">
          <h2 className="paient-card-text">PAITENT CARD</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
          >
            <Form.Item
              name="patient_name"
              label=" Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="number"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
                { min: 11, message: "your number must be 11 digits" },
                { max: 11, message: "your number must be 11 digits" },
              ]}
            >
              <Input style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: "Please input your age" }]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="Diagnosis"
              label=" Diagnosis"
              rules={[
                {
                  required: true,
                  message: "Please input your Diagnosis",
                },
                { type: "string", message: "your diagnosis must be string" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="Department"
              label="Department"
              rules={[{ required: true, message: "Please select department!" }]}
            >
              <Select placeholder="select your gender">
                <Option value="surgery">surgery</Option>
                <Option value="Critical Care">Critical Care</Option>
                <Option value="Haematology">Haematology</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="login-form-button">
                Add paitient
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Addpatient;
