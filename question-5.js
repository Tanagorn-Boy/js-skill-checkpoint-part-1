// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
const promotionCode20 = "SALE20";
const promotionCode100 = "SALE50";

// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;
  let averageprice = 0;

  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price * products[i].quantity;
  }

  if (promotionCode === "SALE20") {
    averageprice = totalPrice - (totalPrice * 20) / 100;
    return averageprice;
  } else if (promotionCode === "SALE50") {
    averageprice = (totalPrice * 50) / 100;
    return averageprice;
  } else {
    return totalPrice;
  }
}

console.log(calculateTotalPrice(products, promotionCode));
console.log(calculateTotalPrice(products, promotionCode20));
console.log(calculateTotalPrice(products, promotionCode100));
