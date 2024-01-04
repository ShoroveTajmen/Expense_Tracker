import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddExpense from "../Pages/Dashboard/AddExpense";
import ExpenseReport from "../Pages/Dashboard/ExpenseReport";
import ExpenseChart from "../Pages/Dashboard/ExpenseChart";
import FundingAdd from "../Pages/Dashboard/FundingAdd";

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
    ],
  },
]);

export default myCreateRoutes;
