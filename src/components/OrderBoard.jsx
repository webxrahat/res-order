import NavBar from "./NavBar";
import OrderCreate from "./OrderCreate";
import OrderSummary from "./OrderSummary";
import OrderReportsList from "./OrderReportsList";
import { useState } from "react";

const initialOrder = {
 userName: "",
 totalOrder: [],
};

export default function OrderBoard() {
 const [newOrder, setNewOrder] = useState(initialOrder);

 console.log("newOrder", newOrder);

 const handleTakeOrder = () => {};

 const curentOrder = () => {};

 const orderItemCreate = () => {};

 // console.log(currentTotal);

 const orderHandler = (item) => {
  const isExisting = newOrder.totalOrder.some(
   (menuItem) => menuItem.id === item.id
  );

  if (!isExisting) {
   setNewOrder({ ...newOrder, totalOrder: [...newOrder.totalOrder, item] });
  }

  console.log(isExisting);
 };

 return (
  <div className="container mx-auto px-4 h-screen flex flex-col">
   <NavBar />

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
    <OrderCreate
     setNewOrder={setNewOrder}
     newOrder={newOrder}
     orderHandler={orderHandler}
    />

    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
     <OrderSummary />

     <OrderReportsList />
    </div>
   </div>
  </div>
 );
}
