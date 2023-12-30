import { NavLink, Outlet } from "react-router-dom";
import {
  FaAddressBook,
  FaHome,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="w-[1600px] mx-auto border border-red-600">
      <div className="flex flex-col lg:flex-row md:flex-row">
        {/* dashboard side bar */}
        <div className="lg:w-64 md:w-64 w-full lg:min-h-screen md:min-h-screen lg:bg-[#756AB6] md:lg:bg-[#004e89]">
        <h1 className="flex uppercase font-bold text-[23px] p-2 mt-[10px] bg-[#FFCACC] text-[#0802A3] shadow-md shadow-black"><FaMoneyBillTrendUp className="mt-[5px]"></FaMoneyBillTrendUp>Expense Tracker</h1>
          <div className=" mt-[50px] mb-[80px]">
            <img
              className="w-[80px] h-[80px] rounded-full ml-[80px] border-4 border-blue-700"
              src="https://i.ibb.co/4SRhqR0/girl.jpg"
              alt=""
            />
            <h1 className="uppercase font-bold ml-[50px] text-[#FFCACC]">Shorove Tajmen</h1>
          </div>

          <div className="divider divider-warning w-[230px] mx-auto hidden lg:block bg-[#11009E] md:block h-[4px]"></div>

          <ul className="lg:menu md:menu p-4 flex flex-row md:flex-col lg:flex-col">
            <li className="font-bold  uppercase  text-white mr-6">
              <NavLink to="/dashboard/addExpense">
                <FaAddressBook className="text-[#FFCACC]"></FaAddressBook>
                Add Expense
              </NavLink>
            </li>
            <li className="font-bold  uppercase mt-2 text-white mr-6">
              <NavLink to="/dashboard/expenseReport">
                <FaShoppingBasket className="text-[#FFCACC]"></FaShoppingBasket>
                Expense Report
              </NavLink>
            </li>
            <li className="font-bold  uppercase mt-2 text-white">
              <NavLink to="/dashboard/statistics">
                <FaShoppingCart className="text-[#FFCACC]"></FaShoppingCart>
                Statistics Exhibit
              </NavLink>
            </li>

            {/* Shared NavLink */}
            <div className="divider divider-warning w-[230px] mx-auto hidden lg:block bg-[#11009E] md:block h-[4px]"></div>
            <li className="font-bold  uppercase mt-2 text-white">
              <NavLink to="/">
                <FaHome className="text-[#FFCACC]"></FaHome>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="lg:flex-1 lg:p-8 w-[400px] md:w-[500px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
