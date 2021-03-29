import React from "react";
import PropTypes from "prop-types";
import { Divider, Select, Space, Tag, Typography } from "antd";
import "./sort-criteria.scss";

const { Title, Text } = Typography;
const { Option } = Select;

SortCriteria.propTypes = {
  onSortChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  filterBy: PropTypes.array,
  productTotal: PropTypes.number,
};

function SortCriteria(props) {
  const { onSortChange, onPageSizeChange, filterBy, productTotal } = props;

  const handleSortChange = (checkValue) => {
    onSortChange(checkValue);
  };

  const handlePageChange = (checkValue) => {
    onPageSizeChange(checkValue);
  };

  return (
    <div className="sort-criteria">
      <Space direction="vertical">
        <Title level={3}>Tìm thấy ({productTotal} sản phẩm)</Title>

        <div>
          <Text style={{ fontSize: "20px", marginRight: "5px" }} strong>
            Lọc theo:
          </Text>
          {filterBy.length === 0 ? (
            <Tag
              style={{ padding: "5px 10px", borderRadius: "5px" }}
              color="red"
            >
              Tất cả
            </Tag>
          ) : (
            ""
          )}

          {filterBy.map((s, index) => (
            <Tag
              key={index}
              style={{ padding: "5px 10px", borderRadius: "5px" }}
              color="red"
            >
              {s}
            </Tag>
          ))}
        </div>

        <div>
          <Text
            style={{
              fontSize: "20px",
              marginRight: "5px",
            }}
            strong
          >
            Sắp xếp:
          </Text>

          <Space>
            <Select
              defaultValue="Mặc định"
              style={{
                width: "200px",
              }}
              size="large"
              onChange={handleSortChange}
            >
              <Option value="default">Mặc định</Option>
              <Option value="priceAsc">Giá tăng dần</Option>
              <Option value="priceDesc">Giá giảm dần</Option>
              <Option value="discount">Khuyến mãi</Option>
            </Select>

            <Select
              defaultValue="12 sản phẩm"
              style={{
                width: "200px",
              }}
              size="large"
              onChange={handlePageChange}
            >
              <Option value="12">12 sản phẩm</Option>
              <Option value="16">16 sản phẩm</Option>
              <Option value="24">24 sản phẩm</Option>
              <Option value="48">48 sản phẩm</Option>
            </Select>
          </Space>
        </div>
      </Space>
      <Divider />
    </div>
  );
}

export default SortCriteria;
