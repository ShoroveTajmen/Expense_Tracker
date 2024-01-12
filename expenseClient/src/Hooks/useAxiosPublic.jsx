import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://expense-server-three.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
