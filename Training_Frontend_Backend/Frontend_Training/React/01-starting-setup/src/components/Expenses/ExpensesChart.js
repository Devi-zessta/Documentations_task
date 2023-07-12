import Chart from "../charts/Chart";
function ExpenseChart(props) {
  const chartDataPoints = [
    { label: "jan", value: 0, id: 0 },
    { label: "feb", value: 0, id: 1 },
    { label: "mar", value: 0, id: 3 },
    { label: "apr", value: 0, id: 4 },
    { label: "may", value: 0, id: 5 },
    { label: "jun", value: 0, id: 6 },
    { label: "jul", value: 0, id: 7 },
    { label: "aug", value: 0, id: 8 },
    { label: "sep", value: 0, id: 9 },
    { label: "oct", value: 0, id: 10 },
    { label: "nov", value: 0, id: 11 },
    { label: "dec", value: 0, id: 12 },
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart datapoints={chartDataPoints}></Chart>;
}

export default ExpenseChart;
