import axios from "axios";

// axios.get("http://localhost:8080/produtos").then((response) => {
//   console.log(response.data);
//   const productsData = response.data;
// });

// export { productsData };

export const fetchData = async () => {
  let response;
  const url = "http://localhost:8080/produtos";

  try {
    response = await axios.get(url);
    console.log(response.data);
  } catch (e) {
    // catch error
    throw new Error(e.message);
  }

  // if success return value
  return response?.data ? response?.data : null; // or set initial value
};

// const productsData = [
//   {
//     id: 1,
//     name: "Susan",
//     price: "1",
//     productStockAmount: "2",
//     image: "text",
//   },
//   {
//     id: 2,
//     name: "Adrienne",
//     price: "Doak",
//     productStockAmount: "adrienne@example.com",
//     image: "80000",
//   },
//   {
//     id: 3,
//     name: "Rolf",
//     price: "Hegdal",
//     productStockAmount: "rolf@example.com",
//     image: "79000",
//   },
//   {
//     id: 4,
//     name: "Kent",
//     price: "Rosner",
//     stockAmount: "kent@example.com",
//     image: "56000",
//   },
//   {
//     id: 5,
//     name: "Arsenio",
//     price: "Grant",
//     productStockAmount: "arsenio@example.com",
//     image: "65000",
//   },
//   {
//     id: 6,
//     name: "Laurena",
//     price: "Lurie",
//     productStockAmount: "laurena@example.com",
//     image: "120000",
//   },
//   {
//     id: 7,
//     name: "George",
//     price: "Tallman",
//     productStockAmount: "george@example.com",
//     image: "90000",
//   },
//   {
//     id: 8,
//     name: "Jesica",
//     price: "Watlington",
//     productStockAmount: "jesica@example.com",
//     image: "60000",
//   },
//   {
//     id: 9,
//     name: "Matthew",
//     price: "Warren",
//     productStockAmount: "matthew@example.com",
//     image: "71000",
//   },
//   {
//     id: 10,
//     name: "Lyndsey",
//     price: "Follette",
//     productStockAmount: "lyndsey@example.com",
//     image: "110000",
//   },
// ];

// export { productsData };
