import { GAMES } from "@/data/games";
import Link from "next/link";

export default function Matches() {
  return (
    <>
      <div className="flex flex-col w-full pt-2">
        {GAMES.sort((a, b) => b.id - a.id).map(
          ({ id, date, winType, players, waves }) => (
            <Link
              key={id}
              href={`/matches/${id}`}
              className="flex [&:not(:last-child)]:border-b border-emerald-700 pt-0.5"
            >
              <div className="hidden sm:block my-auto">{date}</div>
              <div className="sm:hidden block my-auto">
                {date.substring(0, 5)}
              </div>
              <div className="flex flex-col items-center w-full p-1">
                <div className="flex justify-between sm:justify-evenly w-full gap-2">
                  <div className="text-center w-30 bg-sky-700 rounded-2xl p-0.5">
                    {players
                      .filter((p) => p.win)
                      .map((p) => (
                        <div key={p.heroName}>{p.heroName}</div>
                      ))}
                  </div>
                  <div className="my-auto">vs</div>
                  <div className="text-center w-30 bg-rose-700 rounded-2xl p-0.5">
                    {players
                      .filter((p) => !p.win)
                      .map((p) => (
                        <div key={p.heroName}>{p.heroName}</div>
                      ))}
                  </div>
                </div>
                <div className="text-center">
                  Won by <span className="lowercase">{winType}</span> after{" "}
                  {waves} {waves === 1 ? "wave" : "waves"}
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </>
  );
}
