import React from "react";
import PropTypes from "prop-types";
import "./item-info.scss";

import { Row, Col, Image, Typography, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;
const ButtonGroup = Button.Group;

ItemInfo.propTypes = {};

function ItemInfo(props) {
  return (
    <div className="item-info">
      <Row>
        <Col span={4}>
          <Image src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/m/a/macbook-air-gold-select-201810_4.jpg" />
        </Col>
        <Col span={12} className="p-30-0">
          <Text style={{ fontSize: "18px" }} strong>
            Apple MacBook Air M1 256GB 2020 I I Chính hãng Apple Việt Nam
          </Text>
        </Col>
        <Col span={4} className="p-30-0">
          <Text style={{ display: "block" }} strong>
            17.000.000 đ
          </Text>
          <Text delete style={{ display: "inline" }} disabled strong>
            18.000.000 đ
          </Text>
          | <Text strong>-55%</Text>
        </Col>
        <Col span={4} className="p-30-0">
          <ButtonGroup>
            <Button>
              <MinusOutlined />
            </Button>
            <Button>ds</Button>
            <Button>
              <PlusOutlined />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ItemInfo;
