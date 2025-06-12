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
  const [getOrders, setGetOrders] = useState(customerOrder);

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const curentOrder = (value) => {
    setGetOrders((prv) => ({
      ...prv,
      userName: value,
    }));
  };

  const orderItemCreate = (singleOrder) => {
    if (getOrders.userName !== "") {
      setGetOrders((prev) => {
        const alreadyExists = prev.totalOrder.some(
          (order) => order.id === singleOrder.id
        );

        if (alreadyExists) {
          return {
            ...prev,
            totalOrder: prev.totalOrder.filter(
              (order) => order.id !== singleOrder.id
            ),
          };
        }

        return {
          ...prev,
          totalOrder: [...prev.totalOrder, singleOrder],
        };
      });
    }
  };

  const totalItem = getOrders.totalOrder.map((order) => order.taka);
  const currentTotal = totalItem.reduce((acc, cur) => acc + parseInt(cur), 0);
  console.log(currentTotal);

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <NavBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <OrderCreate
          curentOrder={curentOrder}
          handleSubmitForm={handleSubmitForm}
          orderItemCreate={orderItemCreate}
          totalOrder={getOrders.totalOrder}
          currentTotal={currentTotal}
        />

        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <OrderSummary />

          <OrderReportsList />
        </div>
      </div>
    </div>
  );
}
