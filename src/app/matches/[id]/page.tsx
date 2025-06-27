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
        {"< Back"}
      </Button>
      <div className="flex flex-col gap-4 m-auto pt-6">
        <div>{match?.date}</div>
        <div>
          {match?.players.map((p) => (
            <div key={p.heroName}>
              {p.heroName} ({p.name}) {p.win ? "✅" : "🔻"}
            </div>
          ))}
        </div>
        <div>{match?.winType}</div>
      </div>
    </>
  );
}
