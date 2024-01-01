import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Chart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ allCrypto, page }) {
  console.log(allCrypto);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    if (allCrypto) {
      const newData = {
        labels: Object.keys(allCrypto).filter((cryptoKey) => {
          return allCrypto[cryptoKey][page] !== 0;
        }),
        datasets: [
          {
            label: "Total $",
            data: Object.keys(allCrypto)
              .filter((cryptoKey) => {
                return allCrypto[cryptoKey][page] !== 0;
              })
              .map((cryptoKey) => {
                return allCrypto[cryptoKey][page]?.toFixed(0);
              }),
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "#f0f0f0f0",
              "#00000000",
              "#a39073",
            ],
            hoverOffset: 60,
          },
        ],
      };
      setData(newData);
      setIsLoaded(true);
    }
  }, [allCrypto]);
  if (!isLoaded || !data) {
    return <div>loading...</div>;
  } else {
    return <Doughnut className="test" data={data} />;
  }
}
