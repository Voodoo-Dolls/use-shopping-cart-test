import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";


const TEST_PRODUCTS = [
  {
    id: 1,
    name: "Snickers",
    brand: "Mars",
    type: "Chocolate",
    price: 1.50,
    weight: "1.86 oz",
    description: "A chocolate bar with nougat, caramel, and peanuts.",
    available: true
  },
  {
    id: 2,
    name: "M&M's",
    brand: "Mars",
    type: "Chocolate",
    price: 1.00,
    weight: "1.69 oz",
    description: "Colorful, button-shaped chocolates with the letter 'M' on them.",
    available: true
  },
  {
    id: 3,
    name: "Gummy Bears",
    brand: "Haribo",
    type: "Gummy",
    price: 2.00,
    weight: "5 oz",
    description: "Assorted fruit-flavored gummy bears.",
    available: false
  },
  {
    id: 4,
    name: "KitKat",
    brand: "Nestlé",
    type: "Chocolate",
    price: 1.25,
    weight: "1.5 oz",
    description: "Chocolate-covered wafer bar.",
    available: true
  },
  {
    id: 5,
    name: "Skittles",
    brand: "Wrigley",
    type: "Candy",
    price: 1.25,
    weight: "2.17 oz",
    description: "Fruit-flavored candy in colorful, bite-sized pieces.",
    available: true
  },
  {
    id: 6,
    name: "Reese's Peanut Butter Cups",
    brand: "Hershey's",
    type: "Chocolate",
    price: 1.75,
    weight: "1.5 oz",
    description: "Chocolate cups filled with peanut butter.",
    available: true
  },
  {
    id: 7,
    name: "Twix",
    brand: "Mars",
    type: "Chocolate",
    price: 1.50,
    weight: "1.79 oz",
    description: "Caramel and shortbread coated in milk chocolate.",
    available: false
  },
  {
    id: 8,
    name: "Sour Patch Kids",
    brand: "Mondelez",
    type: "Candy",
    price: 2.50,
    weight: "3.5 oz",
    description: "Sour and sweet gummy candies shaped like little people.",
    available: true
  },
  {
    id: 9,
    name: "Almond Joy",
    brand: "Hershey's",
    type: "Chocolate",
    price: 1.60,
    weight: "1.61 oz",
    description: "Milk chocolate with almonds and coconut.",
    available: true
  },
  {
    id: 10,
    name: "Lollipops",
    brand: "Dum Dums",
    type: "Candy",
    price: 0.25,
    weight: "0.5 oz",
    description: "Assorted flavors of classic lollipops.",
    available: true
  }
];



export default function Home() {
  return (
    <div className="container">
      <Navbar />

      {/* test */}
      {/* <ProductCard product={{name:"foo", price:1.00} } /> */}


      <div className="grid is-col-min-12 p-4">
        {
          TEST_PRODUCTS.map((product) => {
            return <ProductCard key={product.id} product={{ name: product.name, price: product.price }} />
          })
        }
      </div>
    </div>
  );
}


