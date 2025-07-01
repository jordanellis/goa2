"use client";

import { GAMES } from "@/data/games";
import { HeroName } from "@/types/hero";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { useRouter } from "next/navigation";

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
      </div>
      <footer className="absolute bottom-1 left-0 right-0 w-fit m-auto">
        Made with Next.js by jellis
      </footer>
    </>
  );
}

function buildHeroGridData() {
  const record: Record<HeroName, { wins: number; gamesPlayed: number }> = {
    [HeroName.ARIEN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.XARGATHA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.BROGAN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.WASP]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.SABINA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.TIGERCLAW]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.DODGER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.WHISPER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.MISA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.URSAFAR]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.SILVERARROW]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.TALI]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.GARRUS]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.BAIN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.CUTTER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.TRINKETS]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.NEBKHER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.BRYNN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.MORTIMER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.WIDGET]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.TAKAHIDE]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.EMMITT]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.MIN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.SWIFT]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.WUK]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.HANU]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.IGNATIA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.ROWENNA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.MRAK]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.SNORRI]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.RAZZLE]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.GYDION]: {
      wins: 0,
      gamesPlayed: 0,
    },
  };

  GAMES.forEach((game) => {
    game.players.forEach((p) => {
      record[p.heroName].gamesPlayed++;
      p.win && record[p.heroName].wins++;
    });
  });

  return Object.entries(record).map(([name, data]) => ({
    hero: name,
    wins: data.wins,
    games: data.gamesPlayed,
  }));
}
