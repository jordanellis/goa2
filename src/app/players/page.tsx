import Button from "@/components/Button";
import { GAMES } from "@/data/games";
import { PLAYERS } from "@/data/players";
import { GamePlayer } from "@/types/game";
import Link from "next/link";

export default function Players() {
  return (
    <>
      <Button className="w-fit" to="/">
        {"< Home"}
      </Button>
      <div className="flex flex-col m-auto max-w-sm w-full pt-6">
        {PLAYERS.map(({ name }) => (
          <Link
            key={name}
            href={`/players/${name}`}
            className="border first:rounded-t last:rounded-b border-emerald-600 bg-neutral-900 flex"
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}
