import { UserInputInterface } from "../App";
import { calculateInvestmentResults, formatter } from "../util/calculator.ts";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";

interface ResultsPropsInterface {
  data: UserInputInterface;
}

export const Results: React.FC<ResultsPropsInterface> = (props) => {
  const resultsData = calculateInvestmentResults(props.data);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].monthlyInvestment;

  const years = resultsData.map((yearData) => yearData.year);

  const totalInterests = resultsData.map(
    (yearData) =>
      yearData.valueEndOfYear -
      yearData.monthlyInvestment * yearData.year -
      initialInvestment
  );

  const totalValues = resultsData.map((yearData) => yearData.valueEndOfYear);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Total Interest",
        data: totalInterests,
        borderColor: "#83e6c0",
        backgroundColor: "rgba(131, 230, 192, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "#83e6c0",
        pointBorderColor: "#83e6c0",
      },
      {
        label: "Total Value",
        data: totalValues,
        borderColor: "#c2e9e0",
        backgroundColor: "rgba(194, 233, 224, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "#c2e9e0",
        pointBorderColor: "#c2e9e0",
      },
    ],
  };

  const [showChart, setShowChart] = useState(false);
  const [showTable, setShowTable] = useState(true);

  return (
    <>
      <div className="button-align">
        <button
          id="toggleButton"
          onClick={() => {
            setShowChart(false);
            setShowTable(true);
          }}
        >
          Table
        </button>
        <button
          id="toggleButton"
          onClick={() => {
            setShowChart(true);
            setShowTable(false);
          }}
        >
          Graph
        </button>
      </div>

      {showChart && (
        <div id="chart">
          <Line data={chartData} />
        </div>
      )}

      {showTable && (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Interest</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {resultsData.map((yearData) => {
              const totalInterest =
                yearData.valueEndOfYear -
                yearData.monthlyInvestment * yearData.year -
                initialInvestment;

              const totalAmountInvested =
                yearData.valueEndOfYear - totalInterest;

              return (
                <tr key={yearData.year}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
