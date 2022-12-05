// import axios from "axios";

// axios.get("http://localhost:8080/produtos").then((response) => {
//   console.log(response.data);
//   const productsData = response.data;
// });

// export { productsData };

// export const fetchData = async () => {
//   let response;
//   const url = "http://localhost:8080/produtos";

//   try {
//     response = await axios.get(url);
//     console.log(response.data);
//   } catch (e) {
//     // catch error
//     throw new Error(e.message);
//   }

//   // if success return value
//   return response?.data ? response?.data : null; // or set initial value
// };

const productsData = [
  {
    id: 1,
    name: "Produto 1",
    price: 9.99,
    stock_amount: 5,
    image: "empty image",
  },
  {
    id: 2,
    name: "Produto 2",
    price: 10.99,
    stock_amount: 3,
    image: "empty image",
  },
  {
    id: 3,
    name: "Produto 3",
    price: 12.99,
    stock_amount: 10,
    image: "empty image",
  },
  {
    id: 4,
    name: "Produto 4",
    price: 15.99,
    stock_amount: 2,
    image: "empty image",
  },
  {
    id: 5,
    name: "Produto 5",
    price: 9.99,
    stock_amount: 7,
    image: "empty image",
  },
  {
    id: 6,
    name: "Produto 6",
    price: 9.99,
    stock_amount: 22,
    image: "empty image",
  },
];

export { productsData };
