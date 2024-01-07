import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import Swal from "sweetalert2";

const EditExpense = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { id } = useParams();
  const {_id, productTitle, amount, notes, category } = useLoaderData();
  console.log(_id, productTitle, amount, notes, category);
  console.log(id);

  //get current date
  const currentDate = new Date();
  const formattedDate = moment(currentDate).format("MMMM Do h:mm a");
  const anotherFormattedDate = moment(currentDate).format("L");

  //using tanstack query to get specific coupons details
  const {
    data: itemData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["itemValue"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/item/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) {
    return <p>Hello</p>;
  }
//   const { productTitle, amount, notes, category } = itemData;
  //   console.log(_id, productTitle, amount, notes, category);

  const handleUpdateExpense = async (e) => {
    e.preventDefault();

    const form = e.target;
    const productTitle = form.productTitle.value;
    const amount = form.amount.value;
    const category = form.category.value;
    const notes = form.notes.value;

    const updateExpense = {
      productTitle,
      amount,
      category,
      anotherFormattedDate,
      notes,
    };
    console.log(updateExpense);

    //send updateExpense data to the server
    const expenseEdit = await axiosPublic.patch(
      `/editExpense/${_id}`,
      updateExpense
    );
    console.log(expenseEdit.data);
    if (expenseEdit.data.modifiedCount > 0) {
      form.reset();
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Expense Update Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/expenseReport");
    }
  };

  return (
    <div className="shadow-lg shadow-[#D0BFFF] p-24 lg:w-[1100px] mx-auto mt-12 mb-12 bg-white">
      <h2 className="text-4xl mb-8 lg:mb-0 font-bold uppercase text-[#756AB6]">
        Update Expense Record
      </h2>
      <form onSubmit={handleUpdateExpense}>
        {/* product title*/}
        <div className="form-control mt-8">
          <input
            type="text"
            name="productTitle"
            placeholder="Title"
            defaultValue={productTitle}
            className="border-b-2 border-gray-500  w-full placeholder-black"
          />
        </div>
        <div className="form-control mt-6 ">
          <input
            type="text"
            name="amount"
            placeholder="Amount (TK.)"
            defaultValue={amount}
            className="border-b-2 border-gray-500  w-full placeholder-black"
          />
        </div>
        <div className="form-control mt-6">
          <select
            name="category"
            className=" border-b-2 border-gray-500  w-full"
          >
            <option disabled selected>
              {category}
            </option>
            <option>EatOuts</option>
            <option>Gardening</option>
            <option>HealthCare</option>
            <option>Groceries</option>
            <option>Utilities</option>
            <option>Commute</option>
          </select>
        </div>{" "}
        <div className="form-control mt-6 ">
          <label className="label">
            <span className="label-text text-sm">Incurred on</span>
          </label>
          <input
            type="text"
            name="date"
            defaultValue={formattedDate}
            className="border-b-2 border-gray-500 font-bold  w-full placeholder-black"
          />
        </div>
        <div className="form-control mt-6 ">
          <input
            type="text"
            name="notes"
            placeholder="Notes"
            defaultValue={notes}
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

export default EditExpense;
