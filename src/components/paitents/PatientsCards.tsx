import { useState, useEffect } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  Col,
  Row,
  Modal,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deletePatient, editPatient } from "../../store/action";
const { Option } = Select;

const PatientsCards: any = () => {
  const [form] = Form.useForm();

  interface Patient {
    id: number;
    patient_name: string;
    email: string;
    phone: number;
    age: number;
    Diagnosis: string;
    Department: string;
  }


  const [editedPatient, setEditedPatient] = useState({});

  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    dispatch(editPatient(values));
    handleCancel();
  };
  const handleDeleltePatient = (id: number) => {
    dispatch(deletePatient(id));
  };
  const handleEditPatient = (patient: any) => {
    setEditedPatient(patient);
    form.setFieldsValue(patient);
    showModal();
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditedPatient({ patient_name: "" });
  };
  const patients: [] = useSelector((state: any) => state.patient.patient);
  return (
    <>
      {patients.map((patient: Patient, index: number) => {
        return (
          <div key={index} className="site-card-wrapper">
            <Row>
              <Col span={6}>
                <Card
                  title="Patient Card"
                  bordered={true}
                  style={{ width: 300 }}
                >
                  <p>patient Name :{patient.patient_name}</p>
                  <p>patient email :{patient.email}</p>
                  <p>patient phone:{patient.phone} </p>
                  <p>patient age: {patient.age}</p>
                  <p>patient Diagnosis: {patient.Diagnosis}</p>
                  <p>patient Department: {patient.Department}</p>
                  <Button
                    type="primary"
                    className="editpatientmodalbutton"
                    onClick={() => {
                      handleEditPatient(patient);
                    }}
                  >
                    edit
                  </Button>

                  <Form.Item>
                    <Button
                      onClick={() => {
                        handleDeleltePatient(patient.id);
                      }}
                      htmlType="submit"
                      className="deletepatientbutton"
                    >
                      delelte
                    </Button>
                  </Form.Item>
                  <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={null}
                  >
                    <div className="w-50">
                      <h2 className="paient-card-text">PAITENT CARD</h2>
                      <Form
                        name="normal_login"
                        className="login-form"
                        form={form}
                        initialValues={editedPatient}
                        onFinish={onFinish}
                      >
                        <Form.Item
                          name="id"
                          label="id"
                          style={{ display: "none" }}
                        >
                          <Input type="number" />
                        </Form.Item>

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
                          name="phone"
                          label="Phone Number"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                            {
                              min: 11,
                              message: "your number must be 11 digits",
                            },
                            {
                              max: 11,
                              message: "your number must be 11 digits",
                            },
                          ]}
                        >
                          <Input style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item
                          name="age"
                          label="Age"
                          rules={[
                            {
                              required: true,
                              message: "Please input your age",
                            },
                          ]}
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
                            {
                              type: "string",
                              message: "your diagnosis must be string",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="Department"
                          label="Department"
                          rules={[
                            {
                              required: true,
                              message: "Please select department!",
                            },
                          ]}
                        >
                          <Select placeholder="select your gender">
                            <Option value="surgery">surgery</Option>
                            <Option value="Critical Care">Critical Care</Option>
                            <Option value="Haematology">Haematology</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <Button
                            htmlType="submit"
                            className="login-form-button"
                          >
                            edit
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </Modal>
                </Card>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
};

export default PatientsCards;
