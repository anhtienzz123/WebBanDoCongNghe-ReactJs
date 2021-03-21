import React from "react";
import PropTypes from "prop-types";
import "./menu.scss";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

CategoryMenu.propTypes = {};

function CategoryMenu(props) {
  const handleClick = () => {};

  return (
    <div className="menu">
      <Menu
        onClick={handleClick}
        style={{ width: "100%" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<LaptopOutlined />} title="Điện thoại">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Laptop">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default CategoryMenu;
