import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ExpensePieChart from "./ExpensePieChart";

const ExpenseChart = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // using tanstack query to get all data by filtering date
  const axiosPublic = useAxiosPublic();
  const { data: filterData = [] } = useQuery({
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

  // Calculate category-wise data for the pie chart
  const categoryData = filterData.reduce((acc, entry) => {
    const category = entry.category;
    acc[category] = (acc[category] || 0) + parseFloat(entry.amount);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex mb-[100px]">
        <h1 className="mt-[20px] text-[20px] font-bold text-green-500">
          Expenditure Per Category :
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
                className="btn-sm pl-4 pr-4 shadow-sm shadow-gray-600 ml-[20px] font-bold bg-green-500 "
              />
            </div>
          </form>
        </div>
      </div>
      <ExpensePieChart categoryData={categoryData}></ExpensePieChart>
    </div>
  );
};

export default ExpenseChart;
