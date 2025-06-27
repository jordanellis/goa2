import Button from "@/components/Button";
import { PLAYERS } from "@/data/players";

export default async function PlayerBio({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const player = PLAYERS.find((p) => p.name === name);

  return (
    <>
      <Button className="w-fit" to="/players">
        {"< Players"}
      </Button>
      <div className="flex flex-col m-auto max-w-sm w-full pt-6">
        {player?.name}
      </div>
    </>
  );
}
