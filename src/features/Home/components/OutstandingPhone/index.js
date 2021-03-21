import { Button, Col, Row, Space } from "antd";
import SmartPhone from "components/SmartPhone";
import React from "react";
import "./outstanding-phone.scss";

OutstandingPhone.propTypes = {};

function OutstandingPhone(props) {
  const dienThoaiNoiBats = [1, 2, 3, 4, 5, 6, 7, 8];
  const thuongHieuDienThoais = ["Apple", "Samsung", "Xiaomi", "Vsmart", "Khác"];
  return (
    <div className="outstanding-phone">
      <div className="outstanding-phone_title">
        <div>
          <span
            style={{
              color: "#ef3f23",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            ĐIỆN THOẠI NỔI BẬT
          </span>

          <div style={{ display: "inline", float: "right" }}>
            <Space direction="horizontal">
              {thuongHieuDienThoais.map((s) => (
                <Button shape="round" danger>
                  {s}
                </Button>
              ))}
            </Space>
          </div>
        </div>
      </div>

      <Row>
        {dienThoaiNoiBats.map((s) => (
          <Col span={6}>
            <SmartPhone />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OutstandingPhone;
