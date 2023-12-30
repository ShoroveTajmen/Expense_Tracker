import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
        <nav className="flex flex-col md:flex-col lg:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 md:ml-0 bg-[#FFF4F4]">
          <div className="flex">
            {/* <h1 className="btn btn-ghost text-[40px] text-[#E86A33] ml-[70px] md:ml-[0px] lg:ml-[0px] font-bold mb-[10px] md:mb-[0px] lg:mb-[0px]">
              OrganizePilot
            </h1> */}
            <img
            className="w-[100px] h-[100px]"
             src="https://i.ibb.co/T2b4xv2/alvioni-fashion-brand-art-design-logo-removebg-preview.png" alt="" />
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
                      ? "text-[#17594A] underline"
                      : ""
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#17594A] underline"
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
                      ? "text-[#17594A] underline"
                      : ""
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
            </ul>
          </div>
  
          {/* register and login */}
          <div className="flex  lg:w-[700px] font-bold text-lg flex-col md:flex-row md:justify-end  md:items-center ">
            {/* Register */}
  
            <div className="mb-3 md:mb-0 ml-[180px] md:ml-0 mr-[5px]">
              <Link to="/register">
                <button className=" btn-sm bg-[#41644A] text-white uppercase font-bold mt-[10px] md:mt-[10px] lg:mt-[0px]">
                  Register
                </button>
              </Link>
            </div>
  
            {/* profile pic, username, log out button  */}
            {/* <div className="">
              {user?.email ? (
                <div className="flex gap-4 justify-center items-center w-[300px] ml-[80px] md:ml-0">
                  <div className=" rounded-full border-2 border-[#E86A33]">
                    <img
                      className="rounded-full w-[90px] h-[50px]"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 w-[400px] z-[1] p-2 shadow bg-base-100 rounded-box "
                  >
                    <li>
                      <button className="btn btn-sm  btn-ghost">
                        {user.displayName}
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-sm bg-[#41644A] text-white font-bold"
                        onClick={logOut}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login">
                  <button className=" btn-sm bg-[#41644A] text-white uppercase font-bold lg:ml-[5px] md:ml-0 ml-[190px] mt-[10px] md:mt-[10px] lg:mt-[0px]">
                    Login
                  </button>
                </Link>
              )}
            </div> */}
          </div>
        </nav>
      </div>
    );
};

export default Navbar;