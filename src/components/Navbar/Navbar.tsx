import logo from '../../assets/logo_icon.png';
import React, { FC } from "react";
const Navbar: FC = () => {
  return <>
<div className="NavFlex">
    <div >
        <img src={logo} alt="logo"  />
    </div>
    <div>
        <h2>Paitent list card</h2>
    </div>

</div>
  
  </>;
};

export default Navbar;
