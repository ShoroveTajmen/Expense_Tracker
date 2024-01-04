import moment from "moment";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddExpense = () => {
  const axiosPublic = useAxiosPublic();
  //for date picker
  const [selectedDate, setSelectedDate] = useState();
  const formattedDate = moment(selectedDate).format("lll");


  const handleAddExpense = (e) => {
    e.preventDefault();

    const form = e.target;

    const productTitle = form.productTitle.value;
    const amount = form.amount.value;
    const category = form.category.value;
    const notes = form.notes.value;

    const newExpense = {
      productTitle,
      amount,
      category,
      formattedDate,
      notes,
    };
    console.log(newExpense);

    axiosPublic.post("/expense", newExpense).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        form.reset();
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "New product added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

      }
    });
  };



  return (
    <div className="shadow-lg shadow-[#D0BFFF] p-24 lg:w-[1100px] mx-auto mt-12 mb-12 bg-white">
      <h2 className="text-4xl mb-8 lg:mb-0 font-bold uppercase text-[#756AB6]">
        Expense Record
      </h2>
      <form onSubmit={handleAddExpense}>
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
            name="category"
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
            type="text"
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
      </form>
      <button className="btn uppercase bg-gray-300 font-bold pl-[21px] pr-[21px] mt-[10px]">
        Cancel
      </button>
    </div>
  );
};

export default AddExpense;
