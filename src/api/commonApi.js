import axiosClient from "./axiosClient";

const commonApi = {
  getCategories: () => {
    const url = "/category";
    return axiosClient.get(url);
  },

  getSubCategoriesByCategoryCode: (categoryCode) => {
    const url = "/sub-categories";

    return axiosClient.get(url, {
      params: {
        categoryCode,
      },
    });
  },

  fetchSliders: () => {
    const url = "/slider";
    return axiosClient.get(url);
  },
  fetchSearchCriteriasByCategoryCode: (categoryCode) => {
    const url = "/search-criterias";
    return axiosClient.get(url, {
      params: {
        categoryCode,
      },
    });
  },
};

export default commonApi;
