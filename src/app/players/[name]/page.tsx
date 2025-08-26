"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import { GAMES } from "@/data/games";
import { PLAYERS } from "@/data/players";
import { PlayerName } from "@/types/players";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { notFound, useParams } from "next/navigation";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function PlayerBio() {
  const { name } = useParams();
  const player = PLAYERS.find((p) => p.name === name);

  if (!player) {
    notFound();
  }

  const { wins, games } = getPlayerWinrate(player.name);

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
      <Button className="w-fit" to="/players">
        {"< Players"}
      </Button>
      <div className="flex flex-col m-auto max-w-md w-full pt-6">
        <Card className="bg-transparent !p-0">
          <div className="p-4">
            <div className="flex justify-between pb-4 sm:flex-row flex-col gap-2">
              <div className="text-xl mx-auto">{player.name}</div>
              <div className="text-xl mx-auto">
                Birthplace: {player.birthplace}
              </div>
            </div>
            <div className="pb-8 text-neutral-300">{player.tidbit}</div>
            <div className="text-center">
              Current win rate:{" "}
              {games ? `${(100 * (wins / games)).toFixed(2)}%` : "--"}
            </div>
          </div>

          <AgGridReact
            theme={theme}
            gridOptions={{
              onGridReady: (params) => {
                params.api.sizeColumnsToFit();
              },
              domLayout: "autoHeight",
            }}
            rowData={buildPlayerHeroGridData(player.name)}
            columnDefs={[
              {
                field: "hero",
                resizable: false,
                minWidth: 130,
              },
              {
                field: "games",
                resizable: false,
                sort: "desc",
                sortingOrder: ["desc", "asc", null],
              },
              {
                field: "winPercentage",
                headerName: "Win %",
                resizable: false,
                valueFormatter: (params) => {
                  if (typeof params.value === "number") {
                    return (params.value * 100).toFixed(2) + "%";
                  }
                  return params.value;
                },
                sortingOrder: ["desc", "asc", null],
              },
            ]}
            autoSizeStrategy={{
              type: "fitGridWidth",
            }}
          />
        </Card>
      </div>
    </>
  );
}

function getPlayerWinrate(playerName: PlayerName) {
  let wins = 0;
  let games = 0;

  for (let i = 0; i < GAMES.length; i++) {
    const player = GAMES[i].players.find(({ name }) => playerName === name);

    if (!player) continue;

    games++;

    if (player.win) wins++;
  }

  return { wins, games };
}

function buildPlayerHeroGridData(player: PlayerName) {
  const record: Record<string, { games: number; wins: number }> = {};

  GAMES.forEach((g) => {
    const gamePlayer = g.players.find((p) => p.name === player);

    if (!gamePlayer) {
      return;
    }

    if (Object.keys(record).includes(gamePlayer.heroName)) {
      record[gamePlayer.heroName].games++;
      if (gamePlayer.win) {
        record[gamePlayer.heroName].wins++;
      }
    } else {
      record[gamePlayer.heroName] = { games: 1, wins: gamePlayer.win ? 1 : 0 };
    }
  });

  const gridData: { hero: string; games: number; winPercentage: number }[] = [];
  Object.entries(record).forEach((entry) =>
    gridData.push({
      hero: entry[0],
      games: entry[1].games,
      winPercentage: entry[1].wins / entry[1].games,
    })
  );
  return gridData;
}
