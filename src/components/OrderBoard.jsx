import NavBar from "./NavBar";
import OrderCreate from "./OrderCreate";
import OrderSummary from "./OrderSummary";
import OrderReportsList from "./OrderReportsList";
import { useState } from "react";

const customerOrder = {
  userName: "",
  totalOrder: [],
};

export default function OrderBoard() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const [getOrders, setGetOrders] = useState(customerOrder);
  // const [addOrder, setAddOrder] = useState(true);

  console.log(getOrders);

  const curentOrder = (value) => {
    setGetOrders((prv) => ({
      ...prv,
      userName: value,
    }));
  };

  const orderItemCreate = (signOrder) => {
    setGetOrders((prv) => ({
      ...prv,
      totalOrder: [...prv.totalOrder, signOrder],
    }));
  };

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <NavBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <OrderCreate
          curentOrder={curentOrder}
          handleSubmitForm={handleSubmitForm}
          orderItemCreate={orderItemCreate}
        />

        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <OrderSummary />

          <OrderReportsList />
        </div>
      </div>
    </div>
  );
}
