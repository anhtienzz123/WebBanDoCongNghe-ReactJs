import React from "react";
import PropTypes from "prop-types";
import "./main-page.scss";
import ItemInfo from "features/Cart/components/ItemInfo";
import { Button, Divider, Space, Typography } from "antd";
import FormInfo from "features/Cart/components/FormInfo";

const { Text } = Typography;

MainPage.propTypes = {};

function MainPage(props) {
  return (
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
  );
}

export default MainPage;
