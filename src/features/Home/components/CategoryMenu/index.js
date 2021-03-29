import React from "react";
import PropTypes from "prop-types";
import "./menu.scss";

import { Menu, Typography, List } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;
const { SubMenu } = Menu;

CategoryMenu.propTypes = {
  categories: PropTypes.array.isRequired,
};

function CategoryMenu(props) {
  const { categories } = props;

  function handleClick(e) {
    console.log("click", e);
  }

  return (
    <div className="menu">
      <Menu onClick={handleClick} style={{ width: "100%" }} mode="vertical">
        {categories.map((s, index) => {
          const { name, code, subCategories } = s;

          return (
            <SubMenu
              key={`category${index}`}
              icon={<LaptopOutlined />}
              title={
                <Link to={`/category/${code}`} style={{ color: "black" }}>
                  {name}
                </Link>
              }
            >
              {subCategories.map((sub, index) => {
                return (
                  <Menu.Item key={`sub${index}`}>
                    <Link to={`/category/${code}/${sub.code}`}>{sub.name}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
}

export default CategoryMenu;
