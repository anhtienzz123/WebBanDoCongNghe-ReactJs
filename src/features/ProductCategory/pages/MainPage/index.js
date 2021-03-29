import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./main-page.scss";
import { useRouteMatch } from "react-router";
import { Col, Divider, Pagination, Row } from "antd";
import SearchCriteria from "features/ProductCategory/components/SearchCriteria";
import ProductList from "features/ProductCategory/components/ProductList";
import commonApi from "api/commonApi";
import productApi from "api/productApi";
import SortCriteria from "features/ProductCategory/components/SortCriteria";

MainPage.propTypes = {};

function MainPage(props) {
  const match = useRouteMatch();
  const { categoryCode } = match.params;

  const [filter, setFilter] = useState({
    page: 0,
    size: 12,
  });
  const [searchCriterias, setSearchCriterias] = useState([]);
  const [products, setProducts] = useState([]);
  const [productTotal, setProductTotal] = useState(0);
  const [filterBy, setFilterBy] = useState([]);

  // khi thay đổi điều kiện tìm kiếm
  const handleSearchCriteriaChange = (subCategory, value, checked) => {
    let temptFilter = { ...filter };
    let filterByTempt = [...filterBy];

    // nếu không có tiêu chí này thì tạo ra
    if (!temptFilter[subCategory]) {
      temptFilter[subCategory] = [];
    }

    // nếu nó được tích vào
    if (checked) {
      temptFilter = {
        ...temptFilter,
        [subCategory]: [...temptFilter[subCategory], value],
      };
      filterByTempt.push(value);

      // nếu bỏ tích
    } else {
      temptFilter = {
        ...temptFilter,
        [subCategory]: temptFilter[subCategory].filter((s) => s != value),
      };
      filterByTempt = filterByTempt.filter((s) => s != value);

      // nếu đã không còn tiêu chí thì xóa nó đi
      if (temptFilter[subCategory].length === 0) {
        delete temptFilter[subCategory];
      }
    }

    setFilter(temptFilter);
    setFilterBy(filterByTempt);
  };

  // Xử lí khi bấm nút thay đổi page
  const handlePageChange = (page, pageSize) => {
    const filterTempt = { ...filter, page: page - 1 };
    console.log("dieu kien khi thay doi page: ", filterTempt);

    setFilter(filterTempt);
  };

  // Sắp xếp
  const handleSortChange = (checkValue) => {
    const filterTempt = { ...filter, sortType: checkValue };
    setFilter(filterTempt);
  };

  // số sản phẩm mỗi page
  const handlePageSizeChange = (checkValue) => {
    const filterTempt = { ...filter, size: checkValue };
    setFilter(filterTempt);
  };

  // lấy tiêu chí tìm kiếm
  useEffect(() => {
    const fetchSearchCriterias = async (categoryCode) => {
      const data = await commonApi.fetchSearchCriteriasByCategoryCode(
        categoryCode
      );
      setSearchCriterias(data);
    };

    fetchSearchCriterias(categoryCode);
  }, []);

  // fetch product khi filter thay doi
  useEffect(() => {
    const fetchProducts = async (categoryCode, searchCriterias) => {
      const data = await productApi.fetchProducts(
        categoryCode,
        searchCriterias
      );
      console.log("MainpagE data lay ve: ", data);
      setProducts(data);
      setProductTotal(data.length);
    };

    fetchProducts(categoryCode, filter);
  }, [filter]);

  return (
    <div className="main-page-category">
      <Row gutter={6}>
        <Col span={4}>
          <SearchCriteria
            searchCriterias={searchCriterias}
            onChange={handleSearchCriteriaChange}
          />
        </Col>

        <Col span={20}>
          <SortCriteria
            onSortChange={handleSortChange}
            onPageSizeChange={handlePageSizeChange}
            filterBy={filterBy}
            productTotal={productTotal}
          />

          <ProductList items={products} />

          <div
            style={{
              background: "white",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <Pagination
              defaultCurrent={1}
              total={productTotal}
              onChange={handlePageChange}
              hideOnSinglePage
              pageSizeOptions={[]}
              defaultPageSize={16}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MainPage;
