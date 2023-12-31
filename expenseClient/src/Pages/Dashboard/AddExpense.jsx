const AddExpense = () => {
  return (
    <div className="shadow-lg shadow-[#D0BFFF] p-24 lg:w-[1100px] mx-auto mt-12 mb-12 bg-white">
      <h2 className="text-4xl mb-8 lg:mb-0 font-bold uppercase text-[#756AB6]">
        Expense Record
      </h2>
      <form>
        {/* product name and product img */}
        <div className="form-control mt-8">
          <input
            type="text"
            name="productTitle"
            placeholder="Title"
            className="border-b-2 border-gray-500  w-full placeholder-black"
          />
        </div>
        <div className="form-control mt-6 ">
          <input
            type="text"
            name="amount"
            placeholder="Amount (TK.)"
            className="border-b-2 border-gray-500  w-full placeholder-black"
          />
        </div>
        <div className="form-control mt-6">
          <select
            name="countryCode"
            className=" border-b-2 border-gray-500  w-full"
          >
            <option disabled selected>
            Category
            </option>
            <option>Eat Outs</option>
            <option>Gardening</option>
            <option>Health Care</option>
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Commute</option>
          </select>
        </div>{" "}
        <div className="form-control mt-6 ">
          <input
            type="date"
            name="date"
            placeholder="Incurred on"
            className="border-b-2 border-gray-500  w-full placeholder-black"
          />
        </div>
        <div className="form-control mt-6 ">
          <input
            type="text"
            name="notes"
            placeholder="Notes"
            className="border-b-2 border-gray-500  w-full placeholder-black"
          />
        </div>
        <input
          type="submit"
          value="SUBMIT"
          className=" btn  bg-[#1a3d74] font-bold text-white uppercase lg:w-[100px] mt-[50px]"
        />
        <button className="btn uppercase bg-gray-300 font-bold ml-[700px]">Cancel</button>
      </form>
    </div>
  );
};

export default AddExpense;
