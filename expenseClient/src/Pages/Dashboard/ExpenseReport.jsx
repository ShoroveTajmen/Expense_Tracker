import { useState } from "react";
import useAllExpense from "../../Hooks/useAllExpense";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ExpenseReport = () => {
  const [expenses, refetch, isLoading] = useAllExpense();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  // console.log(expenses);

  //calculate total expense using reduce
  const totalExpense = expenses.reduce((acc, expense) => {
    return acc + parseFloat(expense.amount);
  }, 0);

  // using tanstack query to get all data
  const axiosPublic = useAxiosPublic();
  const {
    data: filterData = [],
  } = useQuery({
    queryKey: ["filtereData", fromDate, toDate],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/filterExpense?fromDate=${fromDate}&toDate=${toDate}`
      );
      //refetch();
      return res.data;
    },
  });
  console.log(filterData);





  const handleDateSearch = (e) => {
    e.preventDefault();

    const startDate = e.target.startDate.value;
    const endDate = e.target.endDate.value;
    setFromDate(startDate);
    setToDate(endDate);
  };
  // console.log(fromDate, toDate);

  return (
    <div>
      <h1 className="text-lg mb-8 lg:mb-0 font-bold uppercase text-pink-600">
        Total Expense : {totalExpense}
      </h1>
      <div className="flex">
        <h1 className="mt-[20px] text-[20px] font-bold text-[#756AB6]">
          Expenditure Report :
        </h1>
        <div className="ml-[30px]">
          <form onSubmit={handleDateSearch}>
            <div className="flex">
              <label className="label">
                <span className="label-text text-xl font-bold">From</span>
              </label>
              <input
                type="text"
                name="startDate"
                placeholder="Ex:mm/dd/yyyy"
                className="border-b-2 border-gray-500"
              />
              <label className="label">
                <span className="label-text text-xl font-bold">To</span>
              </label>
              <input
                type="text"
                name="endDate"
                placeholder="Ex:mm/dd/yyyy"
                className="border-b-2 border-gray-500"
              />
              <input
                type="submit"
                value="Go"
                className="btn ml-[20px] font-bold rounded-2xl bg-[#B6FFFA] shadow-gray-400 shadow-md"
              />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ExpenseReport;
