import React from "react";
import PropTypes from "prop-types";
import "./product.scss";
import { Button, Card, Rate, Typography, Space } from "antd";
import commonFunction from "utils/commonFunction";

const { Text } = Typography;

Product.propTypes = {
  item: PropTypes.object,
};

Product.defaultProps = {
  item: {},
};

function Product(props) {
  const { item } = props;
  const {
    id,
    name,
    image,
    code,
    price,
    discount,
    priceAfterDiscount,
    rate,
    commentNumber,
    attributes = [],
  } = item;

  return (
    <div className="product">
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt="example" style={{ padding: "20px" }} src={image} />}
      >
        <Space direction="vertical" size="small" style={{ width: "100%" }}>
          <Text style={{ display: "block", fontWeight: "bold" }}>{name}</Text>

          <Text style={{ display: "block", fontWeight: "bold" }}>
            <Text style={{ color: "#d70018" }}>
              {commonFunction.formatMoney(priceAfterDiscount)}
            </Text>{" "}
            <Text delete disabled>
              {commonFunction.formatMoney(price)}
            </Text>
          </Text>

          {attributes.map((atb, index) => {
            const { key, value } = atb;
            return (
              <Text key={index} style={{ display: "block" }} keyboard strong>
                {key}: {value}
              </Text>
            );
          })}

          <div style={{ width: "80%" }}>
            <Rate value={rate} style={{ fontSize: "14px" }} />{" "}
            <Text>{commentNumber} đánh giá</Text>
          </div>
        </Space>
      </Card>
    </div>
  );
}

export default Product;
