import { useEffect, useState } from "react";

const ExpensePrediction = () => {
  const [dummyData, setDummyData] = useState();
  useEffect(() => {
    fetch("/dummy.json")
      .then((res) => res.json())
      .then((data) => setDummyData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
console.log(dummyData);

// Function to calculate the predicted expense for each of the next 7 days
const predictExpense = () => {
    const currentDate = new Date();
    
    const next7Days = new Array(7).fill(0).map((_, index) => {
      const date = new Date();
      date.setDate(currentDate.getDate() + index + 1);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  
      console.log("Current Date:", date);
      console.log("Formatted Date:", formattedDate);
  
      // Check dummyData for the correct date format
      const expenseEntry = dummyData?.find((data) => data.date === formattedDate);
  
      console.log("Expense Entry:", expenseEntry);
  
      return {
        date: formattedDate,
        dayName,
        expense: expenseEntry ? expenseEntry.expense : 0
      };
    });
  
    console.log("Next 7 Days:", next7Days);
  
    return next7Days;
  };

  const predictedExpenses = predictExpense();

  return (
    <div>
      <h2>Predicted Expenses for the Next 7 Days:</h2>
      <ul>
        {predictedExpenses.map((prediction) => (
          <li key={prediction.date}>
            <strong>{prediction.dayName}:</strong> {prediction.date}, <strong>Expense:</strong> {prediction.expense} tk
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensePrediction;
