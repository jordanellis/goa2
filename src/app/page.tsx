"use client";

import { getGameDataByHero } from "@/data/games";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { useRouter } from "next/navigation";
import BubbleChart from "@/components/BubbleChart";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Home() {
  const router = useRouter();

  const theme = themeQuartz.withParams({
    backgroundColor: "rgb(20, 77, 54)",
    foregroundColor: "rgb(255, 241, 242)",
    headerTextColor: "rgb(255, 241, 242)",
    headerBackgroundColor: "rgb(20, 97, 64)",
    oddRowBackgroundColor: "rgb(0, 0, 0, 0.1)",
    headerColumnResizeHandleColor: "rgb(0, 0, 0)",
  });

  return (
    <>
      <div className="h-150 w-full">
        <AgGridReact
          theme={theme}
          gridOptions={{
            onGridReady: (params) => {
              params.api.sizeColumnsToFit();
            },
          }}
          rowData={buildHeroGridData()}
          columnDefs={[
            {
              field: "hero",
              resizable: false,
              onCellClicked: (cell) =>
                router.push(`/heroes/${cell.data?.hero}`),
              minWidth: 180,
            },
            {
              field: "wins",
              resizable: false,
              sortingOrder: ["desc", "asc", null],
            },
            {
              field: "games",
              resizable: false,
              sortingOrder: ["desc", "asc", null],
            },
          ]}
          autoSizeStrategy={{
            type: "fitGridWidth",
          }}
        />
        <div className="w-full m-auto">
          <BubbleChart />
        </div>
        <div className="h-20" />
      </div>
    </>
  );
}

function buildHeroGridData() {
  const record = getGameDataByHero();

  return Object.entries(record).map(([name, data]) => ({
    hero: name,
    wins: data.wins,
    games: data.gamesPlayed,
  }));
}
