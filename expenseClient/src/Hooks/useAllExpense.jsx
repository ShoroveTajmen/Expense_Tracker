import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllExpense = () => {
  //using tanstack query to get data
  const axiosPublic = useAxiosPublic();
  const {
    data: expenses = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allExpense"],
    queryFn: async () => {
      const res = await axiosPublic.get("/expenseReport");
      return res.data;
    },
  });
  return [expenses, refetch, isLoading];
};

export default useAllExpense;
