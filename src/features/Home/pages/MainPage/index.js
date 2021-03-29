import { Col, Row, Typography } from "antd";
import commonApi from "api/commonApi";
import productApi from "api/productApi";
import ProductItem from "components/ProductItem";
import BestSalesProduct from "features/Home/components/BestSalesProduct";
import CategoryMenu from "features/Home/components/CategoryMenu";
import Slider from "features/Home/components/Slider";
import React, { useEffect, useState } from "react";
import "./main-page.scss";

const { Text } = Typography;

MainPage.propTypes = {};

function MainPage(props) {
  const [categories, setCategories] = useState([]);
  const [bestSalesSmartPhones, setBestSalesSmartPhones] = useState([]);
  const [subCategoriesOfSmartPhone, setSubCategoriesOfSmartPhone] = useState(
    []
  );
  const [bestSalesLaptop, setBestSalesLaptop] = useState([]);
  const [subCategoriesOfLaptop, setSubCategoriesOfLaptop] = useState([]);
  const [sliders, setSliders] = useState([]);

  // lấy category, điện thoại bán chạy, laptop bán chạy
  useEffect(() => {
    const getCategories = async () => {
      const data = await commonApi.getCategories();

      setCategories(data);
    };

    const getBestSalesSmartPhone = async (limit) => {
      const data = await productApi.getBestSalesProducts("Điện thoại", limit);

      setBestSalesSmartPhones(data);
    };

    const getSubCategoriesOfSmartPhone = async () => {
      const data = await commonApi.getSubCategoriesByCategoryCode("dien-thoai");
      setSubCategoriesOfSmartPhone(data);
    };

    const getBestSalesLaptop = async (limit) => {
      const data = await productApi.getBestSalesProducts("Laptop", limit);
      setBestSalesLaptop(data);
    };

    const getSubCategoriesOfLaptop = async () => {
      const data = await commonApi.getSubCategoriesByCategoryCode("laptop");
      setSubCategoriesOfLaptop(data);
    };

    const fetchSliders = async () => {
      const data = await commonApi.fetchSliders();
      setSliders(data);
    };

    getCategories();
    getBestSalesSmartPhone(8);
    getSubCategoriesOfSmartPhone();

    getBestSalesLaptop(8);
    getSubCategoriesOfLaptop();
    fetchSliders();
  }, []);

  return (
    <div className="home">
      <div className="introduce">
        <Row gutter={8}>
          <Col span={5}>
            <CategoryMenu categories={categories} />
          </Col>

          <Col span={14}>
            <Slider sliders={sliders} />
          </Col>

          <Col span={5}>
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/640x278_Right_banner-sss.png"
              alt=""
              style={{ width: "100%", height: "100px" }}
            />
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/640x278_Right_banner-sss.png"
              alt=""
              style={{ width: "100%", height: "100px", margin: "3px 0px" }}
            />
            <img
              src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/640x278_Right_banner-sss.png"
              alt=""
              style={{ width: "100%", height: "100px" }}
            />
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
      <BestSalesProduct
        products={bestSalesSmartPhones}
        subCategories={subCategoriesOfSmartPhone}
      />

      {/* laptop noi bat */}
      <BestSalesProduct
        products={bestSalesLaptop}
        subCategories={subCategoriesOfLaptop}
        productTypeName="LAPTOP"
        productTypeSlug="laptop"
      />
    </div>
  );
}

export default MainPage;
