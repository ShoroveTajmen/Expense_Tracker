import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpensePieChart = ({ categoryData }) => {
  console.log(categoryData);
  const Commute = categoryData.Commute;
  const Groceries = categoryData.Groceries;
  const EatOuts = categoryData.EatOuts;
  const Gardening = categoryData.Gardening;
  const HealthCare = categoryData.HealthCare;
  const Utilities = categoryData.Utilities;
  console.log(Commute, Groceries, EatOuts, Gardening, HealthCare, Utilities);

  const pieData = [
    { name: "Commute", value: parseInt(Commute) },
    { name: "Groceries", value: parseInt(Groceries) },
    { name: "EatOuts", value: parseInt(EatOuts) },
    { name: "Gardening", value: parseInt(Gardening) },
    { name: "HealthCare", value: parseInt(HealthCare) },
    { name: "Utilities", value: parseInt(Utilities) },
  ];

  //custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="flex justify-center">
      <div>
        <PieChart width={300} height={500} className="w-[400px] h-[400px]">
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Tooltip formatter={(value) => `${value}%`} /> */}
          <Legend></Legend>
        </PieChart>
      </div>
    </div>
  );
};

export default ExpensePieChart;
