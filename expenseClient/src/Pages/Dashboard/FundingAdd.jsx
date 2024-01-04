import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const FundingAdd = () => {
const axiosPublic = useAxiosPublic();

  const handleAddFund = (e) => {
    e.preventDefault();

    const form = e.target;

    const availableFund = form.availableFund.value;

    const newFund = {
        availableFund
    };
    console.log(newFund);

    axiosPublic.post("/fund", newFund).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        form.reset();
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Fund added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="shadow-lg shadow-[#D0BFFF] p-24 lg:w-[1100px] mx-auto mt-12 mb-12 bg-white">
      <h2 className="text-4xl mb-8 lg:mb-0 font-bold uppercase text-[#756AB6]">
        Add FOUND
      </h2>
      <form onSubmit={handleAddFund}>
        {/* funding add*/}
        <div className="form-control mt-8">
          <input
            type="number"
            name="availableFund"
            placeholder="Enter Your Available Found"
            className="border-b-2 border-gray-500  w-full placeholder-black"
          />
        </div>
        <input
          type="submit"
          value="ADD FOUND"
          className=" btn  bg-[#1a3d74] font-bold text-white uppercase lg:w-[200px] mt-[50px]"
        />
      </form>
      <Link to={"/dashboard/addExpense"}>
        {" "}
        <button className="btn mt-4 bg-[#FFCACC] text-[#11009E] font-bold">
          Click Here To Add Your Daily Expense
        </button>
      </Link>
    </div>
  );
};

export default FundingAdd;
