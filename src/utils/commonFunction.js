const commonFunction = {
  formatMoney: (money) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(money);
  },
};

export default commonFunction;
