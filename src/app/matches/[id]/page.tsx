import Button from "@/components/Button";
import { GAMES } from "@/data/games";
import Link from "next/link";

export default async function MatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = GAMES.find((g) => g.id.toString() === id);

  return (
    <>
      <Button className="w-fit" to="/matches">
        {"< Matches"}
      </Button>
      <div className="flex flex-col gap-4 m-auto pt-6 text-neutral-100 text-center">
        <div className="">{match?.date}</div>
        <div className="flex flex-col gap-4">
          <div className="text-blue-300 font-bold">
            {match?.players
              .filter((p) => p.win)
              .map((p) => (
                <div key={p.heroName}>
                  <Link href={`/heroes/${p.heroName}`}>{p.heroName}</Link> (
                  {p.name})
                </div>
              ))}
          </div>
          <div>Defeated</div>
          <div className="text-rose-300 font-bold">
            {match?.players
              .filter((p) => !p.win)
              .map((p) => (
                <div key={p.heroName}>
                  <Link href={`/heroes/${p.heroName}`}>{p.heroName}</Link> (
                  <Link href={`/players/${p.name}`}>{p.name}</Link>)
                </div>
              ))}
          </div>
        </div>
        <div className="italic">
          Won by <span className="lowercase">{match?.winType}</span> after{" "}
          {match?.waves} {match?.waves === 1 ? "wave" : "waves"}
        </div>
      </div>
    </>
  );
}
