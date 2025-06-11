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
 const [inputText, setInputText] = useState("");
 const [isAdd, setIsAdd] = useState(true);

 const [userOrder, setUserOrder] = useState(customerOrder);

 const [totalAmount, setTotalAmount] = useState(0);

 //  console.log(typeof totalAmount);
 console.log(userOrder);
 //  console.log(orderAmounts);

 const handleInputChange = (e) => {
  const { name, value } = e.target;

  setInputText(value);
  setUserOrder((pre) => ({
   ...pre,
   [name]: value,
  }));
  // console.log(value);
 };

 const handleFoodMenu = (foodItem) => {
  const taka = foodItem.taka;
  setUserOrder((prev) => ({
   ...prev,
   totalOrder: [...prev.totalOrder, taka],
  }));

  const newAmount = [...userOrder.totalOrder, taka];
  const newTotal = newAmount.reduce((prev, curr) => prev + parseInt(curr), 0);
  //  console.log(newTotal);
  setTotalAmount(newTotal);
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
     userOrder={userOrder}
     handleInputChange={handleInputChange}
     handleFoodMenu={handleFoodMenu}
     handleSubmitForm={handleSubmitForm}
     totalAmount={totalAmount}
     isAdd={isAdd}
    />

    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
     <OrderSummary />

     <OrderReportsList />
    </div>
   </div>
  </div>
 );
}
