import { Button, Card, Rate, Space, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

const { Text, Title } = Typography;

ProductItem.propTypes = {};

function ProductItem(props) {
  return (
    <div className="product-item">
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
        <Space direction="vertical" style={{ width: "100%" }}>
          <Text style={{ display: "block", fontWeight: "bold" }}>
            Samsung Galaxy S21 Plus 5G
          </Text>

          <Text style={{ display: "block", fontWeight: "bold" }}>
            <Text style={{ color: "#d70018" }}>17.300.000 đ</Text>{" "}
            <Text delete disabled>
              20.000.000 đ
            </Text>
          </Text>

          <div style={{ width: "80%" }}>
            <Rate value={3} style={{ fontSize: "14px" }} />{" "}
            <Text>5 đánh giá</Text>
          </div>
          <div style={{ display: "", marginTop: "10px" }}>
            <Space>
              <Button
                type="danger"
                size="large"
                style={{ fontWeight: "bold", borderRadius: "5px" }}
              >
                Mua ngay
              </Button>
              <Button
                type="primary"
                size="large"
                style={{ fontWeight: "bold", borderRadius: "5px" }}
              >
                Thêm giỏ hàng
              </Button>
            </Space>
          </div>
        </Space>
      </Card>
    </div>
  );
}

export default ProductItem;
