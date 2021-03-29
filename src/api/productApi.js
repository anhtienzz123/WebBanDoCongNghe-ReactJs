import axiosClient from "./axiosClient";

import queryString from "query-string";

const API_URL = "/products";

const productApi = {
  getBestSalesProducts: (categoryName, limit) => {
    let url = `${API_URL}/best-sale-product`;
    return axiosClient.get(url, {
      params: {
        categoryName,
        limit,
      },
    });
  },

  fetchProducts: (categoryCode, searchCriterias) => {
    const url = `${API_URL}/${categoryCode}`;

    console.log(`url: ${url}?${queryString.stringify(searchCriterias)}`);
    return axiosClient.get(url, {
      params: {
        ...searchCriterias,
      },
    });
  },
};

export default productApi;
