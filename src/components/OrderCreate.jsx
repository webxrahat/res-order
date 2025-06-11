import MenuList from "./MenuList";

export default function OrderCreate({
  handleSubmitForm,
  curentOrder,
  orderItemCreate,
}) {
  return (
    <div className="bg-gray-300 rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-800 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <form onSubmit={handleSubmitForm}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Customer Name
          </label>
          <input
            name="userName"
            onChange={(e) => curentOrder(e.target.value)}
            type="text"
            className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choose Items</label>
          <MenuList orderItemCreate={orderItemCreate} />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          Place Order (BDT 000)
        </button>
      </form>
    </div>
  );
}
