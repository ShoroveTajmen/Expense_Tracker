const ReportByDate = ({ filterData, fromDate, toDate }) => {
  console.log(filterData, fromDate, toDate);

  // Calculate total expense for entire date range
  const totalExpense = filterData.reduce((total, entry) => {
    return total + parseFloat(entry.amount);
  }, 0);

  // Check if there is no data for the selected date range
  if (!filterData.length) {
    return <div>No data available for the selected date range.</div>;
  }

  // Organize data by date
  const dataByDate = filterData.reduce((acc, entry) => {
    const date = entry.anotherFormattedDate;

    if (!acc[date]) {
      acc[date] = {
        entries: [],
        totalAmount: 0,
      };
    }

    acc[date].entries.push(entry);
    acc[date].totalAmount += parseFloat(entry.amount);

    return acc;
  }, {});

  // Function to render a single accordion for each date
  const renderAccordions = () => {
    return Object.keys(dataByDate).map((date) => (
      <div key={date} className="mb-4 ">
        <div className="join join-vertical w-full border-2 border-blue-600 rounded-none">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name={`accordion-${date}`} />
            <div className="collapse-title text-lg font-medium bg-[#B6FFFA]">
              {/* {`Total Expense of ${date} -  ${dataByDate[date].totalAmount}TK`} */}
              <div className="flex justify-between">
                <h1>Total Expense of {date}</h1>
                <h1 className="font-bold text-blue-700">
                  {" "}
                  ${dataByDate[date].totalAmount}TK
                </h1>
              </div>
            </div>
            <div className="collapse-content">
              <h1 className="text-lg text-blue-700 text-center mt-[10px] mb-[10px]">
                Expense List
              </h1>
              <table className="table w-full">
                <thead>
                  <tr className="bg-green-100 text-[15px] font-bold">
                    <th>Category</th>
                    <th>Item Name</th>
                    <th>Cost</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {renderAccordionEntries(dataByDate[date].entries)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // Function to render entries within a table format
  const renderAccordionEntries = (entries) => {
    return entries.map((entry) => (
      <tr key={entry._id}>
        <td>{entry.category}</td>
        <td>{entry.productTitle}</td>
        <td>{entry.amount}</td>
        <td>
          <button onClick={() => handleEdit(entry)} className="mr-[4px]">
            Edit{" "}
          </button>
          <button onClick={() => handleUpdate(entry)}>| Update</button>
        </td>
      </tr>
    ));
  };

  // Placeholder functions for edit and update actions
  const handleEdit = (entry) => {
    console.log("Edit entry:", entry);
  };

  const handleUpdate = (entry) => {
    console.log("Update entry:", entry);
  };
  return (
    <div>
      {renderAccordions()}
      <div className="flex justify-between border-2 border-blue-600 p-4 bg-green-100">
        <h2 className="font-bold text-lg">Total Expense</h2>
        <h2 className="font-bold text-lg text-red-600">{totalExpense}TK</h2>
      </div>
    </div>
  );
};

export default ReportByDate;
