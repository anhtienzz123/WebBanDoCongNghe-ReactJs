import React from "react";
import PropTypes from "prop-types";
import "./best-sales-product.scss";
import Product from "components/Product";
import { Button, Col, Row, Space } from "antd";
import { Link } from "react-router-dom";

BestSalesProduct.propTypes = {
  products: PropTypes.array,
  subCategories: PropTypes.array,
  productTypeName: PropTypes.string,
  productTypeSlug: PropTypes.string,
};

BestSalesProduct.defaultProps = {
  products: [],
  subCategories: [],
  productTypeName: "ĐIỆN THOẠI",
  productTypeSlug: "dien-thoai",
};

function BestSalesProduct(props) {
  const { products, subCategories, productTypeName, productTypeSlug } = props;

  return (
    <div className="best-sales-product">
      <div className="title">
        <div>
          <span
            style={{
              color: "#ef3f23",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {productTypeName} BÁN CHẠY
          </span>

          <div style={{ display: "inline", float: "right" }}>
            <Space direction="horizontal">
              {subCategories.map((s, index) => {
                const { name, code } = s;

                return (
                  <Button shape="round" danger key={index}>
                    <Link to={`/category/${productTypeSlug}/${code}`}>
                      {" "}
                      {name}
                    </Link>
                  </Button>
                );
              })}
              <Button shape="round" danger>
                <Link to={`/category/${productTypeSlug}`}>Tất cả</Link>
              </Button>
            </Space>
          </div>
        </div>
      </div>

      <Row>
        {products.map((p, index) => (
          <Col span={6} key={index}>
            <Product item={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BestSalesProduct;
