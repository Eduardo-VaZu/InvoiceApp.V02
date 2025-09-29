const invoice = {
  id: 10,
  name: "componentes de computadora",
  date: "2023-10-10",
  payment: {
    transactionDate: "2023-10-15",
    status: "Paid",
  },
  client: {
    id: 1,
    name: "Pedro",
    lastName: "Suarez",
    address: {
      country: "Colombia",
      city: "Bogota",
      street: "Av. Siempre Viva",
      number: 742,
    },
  },
  company: {
    name: "Tech Solutions",
    fiscalNumber: 123456789,
    address: {
      country: "Colombia",
      city: "Bogota",
      street: "Av. Siempre Entrable",
      number: 69,
    },
  },
  items: [
    {
      id: 1,
      product: "Monitor",
      price: 499.99,
      quantity: 1,
    },
    {
      id: 2,
      product: "Teclado",
      price: 149.99,
      quantity: 3,
    },
    {
      id: 3,
      product: "Mouse",
      price: 49.99,
      quantity: 4,
    },
  ],
};

export default invoice;
