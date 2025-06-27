import Button from "@/components/Button";
import { GAMES } from "@/data/games";
import { PLAYERS } from "@/data/players";
import { PlayerName } from "@/types/players";
import { notFound } from "next/navigation";

export default async function PlayerBio({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const player = PLAYERS.find((p) => p.name === name);

  if (!player) {
    notFound();
  }

  const { wins, games } = getPlayerWinrate(player.name);

  return (
    <>
      <Button className="w-fit" to="/players">
        {"< Players"}
      </Button>
      <div className="flex flex-col m-auto max-w-sm w-full pt-6">
        {player.name}
        <div>
          Win rate: {games ? `${(100 * (wins / games)).toFixed(2)}%` : "--"}
        </div>
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
