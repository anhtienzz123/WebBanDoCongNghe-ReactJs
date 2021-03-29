import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./search-criteria.scss";
import { List, Typography } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";

const { Text, Title } = Typography;

SearchCriteria.propTypes = {
  searchCriterias: PropTypes.array,
  onChange: PropTypes.func,
};

SearchCriteria.defaultProps = {
  searchCriterias: [],
  onChange: null,
};

function SearchCriteria(props) {
  const { searchCriterias, onChange } = props;

  const handleChange = (subCategory, value, checked) => {
    onChange(subCategory, value, checked);
  };

  return (
    <div className="search-criteria">
      <List
        size="large"
        header={
          <div
            style={{ fontSize: "20px", fontWeight: "bold", color: "#d70018" }}
          >
            Tìm theo
          </div>
        }
        bordered
        dataSource={searchCriterias}
        renderItem={(item) => {
          const { name, code, datas } = item;
          return (
            <List.Item>
              <div>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                  type="danger"
                >
                  {name}
                </Text>
                <div>
                  <ul>
                    {datas.map((s, index) => (
                      <li key={index}>
                        <Checkbox
                          onChange={(e) =>
                            handleChange(code, s, e.target.checked)
                          }
                        >
                          {s}
                        </Checkbox>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
}

export default SearchCriteria;
