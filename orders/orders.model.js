const orders = [
  {
    id: "order1",
    date: "2022-06-06",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old red shoe",
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

const getAllOrders = () => {
  return orders;
};

const getOrderById = (id) => {
  return orders.find((order) => {
    return order.id === id;
  });
};

module.exports = {
  getAllOrders,
  getOrderById,
};
