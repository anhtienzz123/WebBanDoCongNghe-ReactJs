import React from "react";
import PropTypes from "prop-types";
import "./main-page.scss";
import ItemInfo from "features/Cart/components/ItemInfo";
import { Breadcrumb, Button, Divider, Space, Typography } from "antd";
import FormInfo from "features/Cart/components/FormInfo";

const { Text } = Typography;

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="main-page">
      <div className="bread-crumb">
        <Breadcrumb style={{ border: "1px solid black" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="main-page">
        <div className="list-item-info">
          <ItemInfo />
          <ItemInfo />
        </div>

        <div style={{ textAlign: "right" }}>
          <Text type="danger" style={{ fontSize: "24px" }} strong>
            Tổng thanh toán 13.800.000₫
          </Text>
        </div>

        <Divider>Thông tin giao hàng</Divider>
        <FormInfo />
        <Divider />
        <div style={{ textAlign: "center" }}>
          <Button
            block
            type="danger"
            size="large"
            style={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
          >
            Đặt hàng
          </Button>

          <Button
            block
            type="primary"
            size="large"
            style={{
              width: "20%",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
              marginLeft: "5px",
            }}
          >
            Lưu lại thông tin mua hàng
          </Button>
        </div>
      </div>

      <div className="list-item-info">
        <ItemInfo />
        <ItemInfo />
      </div>

      <div style={{ textAlign: "right" }}>
        <Text type="danger" style={{ fontSize: "24px" }} strong>
          Tổng thanh toán 13.800.000₫
        </Text>
      </div>

      <Divider>Thông tin giao hàng</Divider>
      <FormInfo />
      <Divider />
      <div style={{ textAlign: "center" }}>
        <Button
          block
          type="danger"
          size="large"
          style={{ width: "20%", textAlign: "center", fontWeight: "bold" }}
        >
          Đặt hàng
        </Button>

        <Button
          block
          type="primary"
          size="large"
          style={{
            width: "20%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
            marginLeft: "5px",
          }}
        >
          Lưu lại thông tin mua hàng
        </Button>
      </div>
    </div>
  );
}

export default MainPage;
