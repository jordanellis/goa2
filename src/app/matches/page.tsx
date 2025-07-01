import { GAMES } from "@/data/games";
import Link from "next/link";

export default function Matches() {
  return (
    <>
      <div className="flex flex-col m-auto max-w-sm w-full pt-6">
        {GAMES.sort((a, b) => b.id - a.id).map(
          ({ id, date, winType, players, waves }) => (
            <Link
              key={id}
              href={`/matches/${id}`}
              className="border first:rounded-t last:rounded-b border-emerald-600 bg-neutral-900 flex"
            >
              <div className="my-auto px-2">{date}</div>
              <div className="flex flex-col items-center w-full p-1 border-l border-l-emerald-900">
                <div className="flex justify-between w-full">
                  <div className="text-center w-25 bg-sky-700 rounded-2xl p-0.5">
                    {players
                      .filter((p) => p.win)
                      .map((p) => (
                        <div key={p.heroName}>{p.heroName}</div>
                      ))}
                  </div>
                  <div className="my-auto">vs</div>
                  <div className="text-center w-25 bg-rose-700 rounded-2xl p-0.5">
                    {players
                      .filter((p) => !p.win)
                      .map((p) => (
                        <div key={p.heroName}>{p.heroName}</div>
                      ))}
                  </div>
                </div>
                <div>
                  Won by <span className="lowercase">{winType}</span> after{" "}
                  {waves} waves
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
}
