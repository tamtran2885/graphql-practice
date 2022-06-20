const ordersModel = require("./orders.model");

module.exports = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    },
    order: (_, args) => {
      return ordersModel.getOrderById(args.id);
    },
  },
};
