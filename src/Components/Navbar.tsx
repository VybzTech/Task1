import { MenuOutlined, HomeOutlined, HddOutlined, ContainerOutlined } from "@ant-design/icons";
import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      {/*  MENU */}
      <MenuOutlined />
      <div>
        {/*  HOME */}
        <HomeOutlined />
        {/*  LIST */}
        <HddOutlined/>
      </div>
      {/*  USER */}
      <div className="user">nt</div>
    </div>
  );
};

export default Navbar;
