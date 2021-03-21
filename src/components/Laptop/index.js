import React from "react";
import PropTypes from "prop-types";
import "./laptop.scss";
import { Button, Card, Rate, Typography, Space } from "antd";

const { Text } = Typography;

Laptop.propTypes = {};

Laptop.defaultProps = {};

function Laptop(props) {
  return (
    <div className="laptop">
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={
          <img
            alt="example"
            style={{ padding: "20px" }}
            src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-plus-3.jpg"
          />
        }
      >
        <Space direction="vertical" size="small" style={{ width: "100%" }}>
          <Text style={{ display: "block", fontWeight: "bold" }}>
            Samsung Galaxy S21 Plus 5G
          </Text>

          <Text style={{ display: "block", fontWeight: "bold" }}>
            <Text style={{ color: "#d70018" }}>17.300.000 đ</Text>{" "}
            <Text delete disabled>
              20.000.000 đ
            </Text>
          </Text>
          <Text keyboard strong>
            Màn hình: 15.6 inches
          </Text>
          <Text style={{ display: "block" }} keyboard strong>
            CPU: I9-10000 4 nhân
          </Text>
          <Text style={{ display: "block" }} keyboard strong>
            Ổ cứng: 256GB SSD
          </Text>
          <Text style={{ display: "block" }} keyboard strong>
            Ram: 8GB DDR4
          </Text>

          <div style={{ width: "80%" }}>
            <Rate value={3} style={{ fontSize: "14px" }} />{" "}
            <Text>5 đánh giá</Text>
          </div>
        </Space>
      </Card>
    </div>
  );
}

export default Laptop;
