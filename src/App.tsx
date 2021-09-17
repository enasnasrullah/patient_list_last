import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { FC } from "react";
import PatientsCards from './components/paitents/PatientsCards';
import Addpatient from './components/AddPatient/Addpatient'
import Search from "./components/Search/Search";
const App: FC = () => {
  return (
    <>
        <Navbar />
        <Search/>
           <Addpatient/>
        <PatientsCards/>
     
    </>
  );
};

export default App;
