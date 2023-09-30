import {
  MenuOutlined,
  HomeOutlined,
  HddOutlined,
} from "@ant-design/icons";
import React from "react";
import { Button } from "antd";

const Navbar = () => {
  return (
    <div className="Navbar">
      {/*  MENU */}
      <Button size="small" className="btn">
        <MenuOutlined />
      </Button>
      <div>
        {/*  HOME */}
      <Button size="small" className="btn">
        <HomeOutlined />
      </Button>
        {/*  LIST */}
      <Button size="small" className="btn">
        <HddOutlined />
      </Button>
      </div>
      {/*  USER */}
      <div className="user">nt</div>
    </div>
  );
};

export default Navbar;
