"use client";

import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { useRouter } from "next/navigation";
import BubbleChart from "@/components/BubbleChart";
import { getGameDataByHero } from "@/util/match-parser";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function Home() {
  const router = useRouter();

  const theme = themeQuartz.withParams({
    backgroundColor: "rgb(18, 52, 59)",
    foregroundColor: "#ffeace",
    headerTextColor: "#ffeace",
    headerBackgroundColor: "rgb(18, 60, 70)",
    oddRowBackgroundColor: "rgb(0, 0, 0, 0.1)",
    headerColumnResizeHandleColor: "rgb(0, 0, 0)",
  });

  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-6">
      <div className="h-150 w-full">
        <AgGridReact
          theme={theme}
          gridOptions={{
            onGridReady: (params) => {
              params.api.sizeColumnsToFit();
            },
            autoSizeStrategy: {
              type: "fitGridWidth",
              defaultMinWidth: 80,
            },
          }}
          rowData={buildHeroGridData()}
          columnDefs={[
            {
              field: "hero",
              resizable: false,
              onCellClicked: (cell) =>
                router.push(`/heroes/${cell.data?.hero}`),
              minWidth: 125,
              suppressMovable: true,
            },
            {
              field: "wins",
              resizable: false,
              sortingOrder: ["desc", "asc", null],
              suppressMovable: true,
            },
            {
              field: "games",
              resizable: false,
              sortingOrder: ["desc", "asc", null],
              suppressMovable: true,
            },
          ]}
          autoSizeStrategy={{
            type: "fitGridWidth",
          }}
        />
      </div>
      <div className="w-full m-auto sm:flex hidden pt-4 border border-[#FFF1F226] rounded-lg bg-[#12343b]">
        <BubbleChart />
      </div>
    </div>
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
