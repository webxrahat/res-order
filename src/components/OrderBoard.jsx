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
 const [orderReport, setOrderReport] = useState({});

 let initialBill = 0;
 const totalOrderBill = newOrder.totalOrder.reduce((acc, curt) => {
  return acc + parseInt(curt.taka);
 }, initialBill);

 const handleTakeOrder = () => {};

 const curentOrder = () => {};

 const handleCreateOrder = (order) => {
  console.log("order", orderReport);
 };

 const orderHandler = (item) => {
  if (newOrder.userName !== "") {
   const isExisting = newOrder.totalOrder.some(
    (menuItem) => menuItem.id === item.id
   );

   if (!isExisting) {
    return setNewOrder({
     ...newOrder,
     totalOrder: [...newOrder.totalOrder, item],
    });
   }

   return setNewOrder({
    ...newOrder,
    totalOrder: [
     ...newOrder.totalOrder.filter((dItem) => dItem.id !== item.id),
    ],
   });
  }
 };

 return (
  <div className="container mx-auto px-4 h-screen flex flex-col">
   <NavBar />

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
    <OrderCreate
     setNewOrder={setNewOrder}
     newOrder={newOrder}
     orderHandler={orderHandler}
     totalOrderBill={totalOrderBill}
     handleCreateOrder={handleCreateOrder}
    />

    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
     <OrderSummary />

     <OrderReportsList orderReport={orderReport} />
    </div>
   </div>
  </div>
 );
}
