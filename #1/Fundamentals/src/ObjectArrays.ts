type newUser = {
  username: string;
  password: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
};

const products: Product[] = [
  {
    id: 101,
    title: "Samsung Phone",
    price: 15000,
    inStock: true,
  },
  {
    id: 126,
    title: "Samsung Odyssey Monitor",
    price: 45000,
    inStock: true,
  },
];
