import NavBar from "./NavBar";
import OrderCreate from "./OrderCreate";
import OrderSummary from "./OrderSummary";
import OrderReportsList from "./OrderReportsList";
import { useState } from "react";

const orderTables = {
  orderItems: [
    {
      id: crypto.randomUUID(),
      name: "Hamburger",
      src: "./assets/hamburger.svg",
      taka: "250",
    },
    {
      id: crypto.randomUUID(),
      name: "Chicken Nuggets",
      src: "./assets/chicken.svg",
      taka: "450",
    },
    {
      id: crypto.randomUUID(),
      name: "Submarine Sandwich",
      src: "./assets/submarine.svg",
      taka: "400",
    },
    {
      id: crypto.randomUUID(),
      name: "Pizza slices",
      src: "./assets/pizza.svg",
      taka: "150",
    },
  ],
};

const customerOrder = {
  userName: "",
  totalOrder: [],
};

export default function OrderBoard() {
  const [orders, setOrders] = useState(orderTables);
  const [orderAmounts, setOrderAmounts] = useState("");
  const [inputText, setInputText] = useState("");

  const [userOrder, setUserOrder] = useState(customerOrder);

  // console.log(orders);
  console.log(orderAmounts);
  console.log(inputText);

  const handleInputChange = (e) => {
    const name = e.target.value;
    setUserOrder(name);
    // setInputText(e.target.value);
    // console.log(value);
  };

  const handleFoodMenu = (foodItem) => {
    // console.log(foodItem);
    setOrderAmounts(foodItem.taka);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <NavBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <OrderCreate
          orders={orders}
          handleInputChange={handleInputChange}
          handleFoodMenu={handleFoodMenu}
          handleSubmitForm={handleSubmitForm}
        />

        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <OrderSummary />

          <OrderReportsList />
        </div>
      </div>
    </div>
  );
}
