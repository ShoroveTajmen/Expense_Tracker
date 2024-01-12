import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import MainLayout from "../Layout/MainLayout";
import AddExpense from "../Pages/Dashboard/AddExpense";
import Dashboard from "../Pages/Dashboard/Dashboard";
import EditExpense from "../Pages/Dashboard/EditExpense";
import ExpenseChart from "../Pages/Dashboard/ExpenseChart";
import ExpensePrediction from "../Pages/Dashboard/ExpensePrediction";
import ExpenseReport from "../Pages/Dashboard/ExpenseReport";
import FundingAdd from "../Pages/Dashboard/FundingAdd";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home";

const myCreateRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  //Dashboard portion
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "addFund",
        element: <FundingAdd></FundingAdd>,
      },
      {
        path: "addExpense",
        element: <AddExpense></AddExpense>,
      },
      {
        path: "expenseReport",
        element: <ExpenseReport></ExpenseReport>,
      },
      {
        path: "statistics",
        element: <ExpenseChart></ExpenseChart>,
      },
      {
        path: "expenseReport/editExpense/:id",
        element: <EditExpense></EditExpense>,
        loader: ({ params }) =>
          fetch(`https://expense-server-three.vercel.app/item/${params.id}`),
      },
      {
        path: "prediction",
        element: <ExpensePrediction></ExpensePrediction>,
      },
    ],
  },
]);

export default myCreateRoutes;
