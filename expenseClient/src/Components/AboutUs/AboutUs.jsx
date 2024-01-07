const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center text-[40px] font-bold text-[#FF4C29] mb-[40px]">
        About Expense Tracker Website
      </h1>
      <div className="lg:w-[1300px] lg:h-[600px] h-[1000px]  mx-auto shadow-lg shadow-[#413F42] rounded-[30px] mb-[50px] flex lg:flex-row md:flex-col flex-col justify-center items-center gap-3">
        <div className="w-[400px]">
          {" "}
          <p className="font-bold">
            Welcome to our ExpenseTracker website – your go-to solution for
            effortless financial control. Simplify your life by tracking and
            managing expenses seamlessly. With an intuitive interface, easily
            categorize and analyze spending, set personalized budgets, and
            receive timely notifications. Gain valuable insights through
            visualizations and reports, making informed decisions about your
            financial health. Our platform prioritizes customization, ensuring
            it adapts to your unique spending patterns. Bank-level security
            safeguards your data, providing a secure environment for financial
            tracking. Whether you're an individual or a business, ExpenseTracker
            offers a smart, user-friendly approach to financial management. Take
            control, plan for the future, and achieve financial success with
            ExpenseTracker – because your money matters.
          </p>
        </div>
        <div>
          <img
            className=""
            src="https://i.ibb.co/sQBfxXb/2222-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
