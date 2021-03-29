import React, { useState } from "react";
import PropTypes from "prop-types";
import "./header.scss";

import { Menu, Button, Typography, Row, Col } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Text } = Typography;

Header.propTypes = {};

function Header(props) {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="header">
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <Link to="/">Trang Chủ</Link>
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          <Link to="/cart">Xem giỏ hàng</Link>
        </Menu.Item>
        <Menu.Item key="gop" icon={<AppstoreOutlined />}>
          <Text>Xem giỏ hàng</Text>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
