import React from "react";
import PropTypes from "prop-types";
import "./main-page.scss";

import { Row, Col, Space, Card, Typography, Divider, Button } from "antd";
import CategoryMenu from "features/Home/components/CategoryMenu";
import Slider from "features/Home/components/Slider";
import ProductItem from "components/ProductItem";
import OutstandingPhone from "features/Home/components/OutstandingPhone";
import OutstandingLaptop from "features/Home/components/OustandingLaptop";

const { Text } = Typography;

MainPage.propTypes = {};

function MainPage(props) {
  const dienThoaiNoiBats = [1, 2, 3, 4, 5, 6, 7, 8];
  const thuongHieuDienThoais = [
    "Apple",
    "Samsung",
    "Vsmart",
    "Xiaomi",
    "ASUS",
    "Tất cả",
  ];
  return (
    <div className="home">
      <div className="introduce">
        <Row gutter={8}>
          <Col span={5}>
            <CategoryMenu />
          </Col>

          <Col span={14}>
            <Slider />
          </Col>

          <Col span={5}>
            <Space direction="vertical">
              <img
                src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/640x278_Right_banner-sss.png"
                alt=""
              />
              <img
                src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/640x278_Right_banner-sss.png"
                alt=""
              />
              <img
                src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/640x278_Right_banner-sss.png"
                alt=""
              />
            </Space>
          </Col>
        </Row>
      </div>

      <div>
        <img
          src="https://cdn.cellphones.com.vn/media/wysiwyg/1200x75-MFD.png"
          alt=""
          width="100%"
        />
      </div>

      {/* hot sale */}
      <div className="hot-sale">
        <div className="hot-sale_title">
          <div>
            <span
              style={{
                color: "#ef3f23",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              HOT SALE
            </span>
            <span style={{ float: "right", fontSize: "18px" }}>
              <Text strong> Kết thúc sau:</Text> <Text keyboard>10</Text>giờ :{" "}
              <Text keyboard>50</Text> phút : <Text keyboard>15</Text> giây
            </span>{" "}
            <img
              src="https://cellphones.com.vn/media/icon/flash.gif"
              alt=""
              width="20px"
            />
          </div>
        </div>

        <Row>
          <Col span={6}>
            <ProductItem />
          </Col>
          <Col span={6}>
            <ProductItem />
          </Col>
          <Col span={6}>
            <ProductItem />
          </Col>
          <Col span={6}>
            <ProductItem />
          </Col>
        </Row>
      </div>

      {/* Điện thoại nổi bật */}
      <OutstandingPhone />

      {/* laptop noi bat */}
      <OutstandingLaptop />
    </div>
  );
}

export default MainPage;
