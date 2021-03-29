import React from "react";
import PropTypes from "prop-types";
import "./product-list.scss";

import { Col, Divider, Row, Select, Space, Tag, Typography } from "antd";
import Product from "components/Product";

const { Text, Title } = Typography;
const { Option } = Select;

ProductList.propTypes = {
  items: PropTypes.array,
};

ProductList.defaultProps = {
  items: [],
};

function ProductList(props) {
  const { items } = props;

  return (
    <div className="product-list-category">
      <div className="products-info">
        <Row>
          {items.map((s, index) => (
            <Col key={index} span={6}>
              <Product item={s} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ProductList;
