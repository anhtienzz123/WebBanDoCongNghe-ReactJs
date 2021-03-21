import { Button, Col, Row, Space } from "antd";
import Laptop from "components/Laptop";
import React from "react";
import "./outstanding-laptop.scss";

OutstandingLaptop.propTypes = {};

function OutstandingLaptop(props) {
  const laptopNoiBats = [1, 2, 3, 4, 5, 6, 7, 8];
  const thuongLaptops = [
    "Mac",
    "Microsoft Surface",
    "HP",
    "Asus",
    "Dell",
    "Tất cả",
  ];
  return (
    <div className="outstanding-laptop">
      <div className="outstanding-laptop_title">
        <div>
          <span
            style={{
              color: "#ef3f23",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            LAPTOP NỔI BẬT
          </span>

          <div style={{ display: "inline", float: "right" }}>
            <Space direction="horizontal">
              {thuongLaptops.map((s) => (
                <Button shape="round" danger>
                  {s}
                </Button>
              ))}
            </Space>
          </div>
        </div>
      </div>

      <Row>
        {laptopNoiBats.map((s) => (
          <Col span={6}>
            <Laptop />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OutstandingLaptop;
