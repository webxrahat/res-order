import React from "react";

export default function NavBar() {
  return (
    <nav className="rounded-full mt-4 px-8 py-3 flex justify-between items-center bg-gray-300">
      <div className="flex items-center ">
        <div className="text-primary mr-2">
          <img src="./assets/logo.svg" />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-primary">Dine</span>Out
        </h1>
      </div>
      <div className="flex items-center">
        <button>Add Food Item</button>
      </div>
    </nav>
  );
}
