import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAvailableFund = () => {
  //using tanstack query to get data
  const axiosPublic = useAxiosPublic();
  const {data: fund = [], refetch, isLoading} = useQuery({
    queryKey: ['availableFuns'],
    queryFn: async () => {
        const res = await axiosPublic.get('/fund')
        return res.data;
    }
  })
  return [fund, refetch, isLoading];
};

export default useAvailableFund;
