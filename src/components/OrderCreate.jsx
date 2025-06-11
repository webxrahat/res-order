export default function OrderCreate({
 handleSubmitForm,
 handleInputChange,
 handleFoodMenu,
 orders,
 userOrder,
 totalAmount,
 isAdd,
}) {
 return (
  <div className="bg-gray-300 rounded-lg p-6 h-[calc(100vh_-_130px)]">
   <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
   <p className="text-gray-800 text-sm mb-4">
    Accurately fulfill customer orders based on a precise understanding of their
    requirements.
   </p>

   <form onSubmit={handleSubmitForm}>
    <div className="mb-4">
     <label className="block text-sm font-medium mb-2">Customer Name</label>
     <input
      name="userName"
      onChange={handleInputChange}
      type="text"
      className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-white"
     />
    </div>

    <div className="mb-4">
     <label className="block text-sm font-medium mb-2">Choose Items</label>
     <div className="items-container">
      {orders?.orderItems?.map((signOrder) => {
       return (
        <div
         key={signOrder.id}
         className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
        >
         <div className="flex items-center">
          <div className="w-12 h-12   flex items-center justify-center mr-3">
           <img
            src={signOrder.src}
            alt={signOrder.name}
            className="w-10 h-10"
           />
          </div>
          <div>
           <h3 className="font-medium text-gray-100">{signOrder.name}</h3>
           <p className="text-xs text-gray-300">BDT {signOrder.taka}</p>
          </div>
         </div>
         <button
          onClick={() => handleFoodMenu(signOrder)}
          className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
         >
          <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5 text-green-500 cursor-pointer"
           viewBox="0 0 20 20"
           fill="currentColor"
          >
           <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
           />
          </svg>

          {/* <svg
           xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5 text-red-500 cursor-pointer"
           viewBox="0 0 20 20"
           fill="currentColor"
          >
           <path
            fillRule="evenodd"
            d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
           />
          </svg> */}
         </button>
        </div>
       );
      })}
     </div>
    </div>

    <button
     type="submit"
     className="w-full cursor-pointer bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
    >
     Place Order (BDT {`${totalAmount ? totalAmount : "000"}`})
    </button>
   </form>
  </div>
 );
}
