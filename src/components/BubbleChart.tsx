"use client";

import { getGameDataByHero } from "@/util/match-parser";
import { HEROES } from "@/data/heroes";
import { Chart } from "chart.js/auto";
import { useEffect } from "react";

export default function BubbleChart() {
  const bubbleData = {
    datasets: getBubbleData(),
  };

  useEffect(() => {
    const myChart = new Chart("bubbleChart", {
      type: "bubble",
      data: bubbleData,
      options: {
        responsive: true,
        color: "#ffeace",
        backgroundColor: "#00000000",
        scales: {
          x: {
            ticks: {
              callback: function (_value, index, _ticks) {
                return HEROES.sort((a, b) => {
                  if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
                }).map(({ name }) => name)[index];
              },
              minRotation: 80,
              stepSize: 1,
            },
            grid: {
              color: "#428f9e55",
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas id="bubbleChart" />;
}

function getBubbleData() {
  const record = getGameDataByHero();

  const maxGamesPlayed = Object.values(record).sort((a, b) => {
    return b.gamesPlayed - a.gamesPlayed;
  })[0].gamesPlayed;

  return Object.entries(record)
    .sort(([a], [b]) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
    .map(([heroName, games], i) => ({
      label: heroName,
      data: [
        {
          x: i,
          y: (games.wins / games.gamesPlayed) * 100,
          r: (games.gamesPlayed / maxGamesPlayed) * 20,
        },
      ],
      borderColor:
        HEROES.find(({ name }) => name === heroName)?.themeColor || "#000000",
      backgroundColor:
        HEROES.find(({ name }) => name === heroName)?.themeColor + "88" ||
        "#000000",
    }));
}
