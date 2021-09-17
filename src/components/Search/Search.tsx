import { Input, Space, Form, Select, Button} from "antd";
import { filterdPatientDep, searchPatient } from "../../store/action";
import { useDispatch } from "react-redux";
const { Option } = Select;

const Search = () => {
  const { Search } = Input;

  const dispatch = useDispatch();
  const onSearch = (value: any) => {
    dispatch(searchPatient(value));
  };
  const onfilter = (value: any) => {
    dispatch(filterdPatientDep(value));
  };

  return (
    <div className="search">
      <Space direction="vertical">
        <Search
          placeholder="input search name"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      <Form
      onFinish={onfilter}>
        <Form.Item name="Department" label="Search by Department">
          <Select placeholder="select your gender">
            <Option value="sergury">sergury</Option>
            <Option value="Critical Care">Critical Care</Option>
            <Option value="Haematology">Haematology</Option>
          </Select>
        </Form.Item>
        <Form.Item>
              <Button htmlType="submit" className="">
               Filter Now
              </Button>
            </Form.Item>
      </Form>
    </div>
  );
};

export default Search;
