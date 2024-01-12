import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-col lg:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 md:ml-0 ">
        <div className="flex">
          <img
            className="w-[200px] h-[120px] ml-[120px] md:ml-[40px] lg:ml-[20px]"
            src="https://i.ibb.co/JRDXMnz/Colorful-Abstract-B-Free-Logo-1-removebg-preview.png"
            alt=""
          />
        </div>
        {/* navbar link page route */}
        <div className="lg:w-1/3 lg:ml-[300px] ml-[70px]">
          <ul className="flex gap-5 font-bold  flex-row md:flex-row md:justify-center md:items-center text-[#263A29] text-lg ml-[15px] md:ml-[0px] lg:ml-[0px]">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#F11A7B] underline"
                    : ""
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addExpense"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#F11A7B] underline"
                    : ""
                }
              >
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#F11A7B] underline"
                    : ""
                }
              >
                ABOUT US
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
