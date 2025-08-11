import Button from "@/components/Button";
import Complexity from "@/components/Complexity";
import RoleIcon from "@/components/RoleIcon";
import { GAMES } from "@/data/games";
import { HEROES } from "@/data/heroes";
import { HeroName } from "@/types/hero";
import { getHeroImage } from "@/util/getHeroImage";
import { pSBC } from "@/util/pSBC";
import { RectangleHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function HeroPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name: slugName } = await params;
  const hero = HEROES.find((h) => h.name === slugName);

  if (!hero) {
    notFound();
  }

  const { name, complexity, stats, roles, link, themeColor } = hero;

  const statBlock = "flex justify-between w-72 items-center";

  const { wins, games } = getHeroWinrate(name);

  return (
    <>
      <Button to={`/heroes`}>{"< Heroes"}</Button>
      <div className="flex flex-col gap-8 items-center pt-6">
        <div className="flex flex-col gap-1 items-center">
          <Image
            className="rounded-full border-2"
            src={getHeroImage(name)}
            style={{ borderColor: themeColor }}
            alt=""
            height={105}
            width={105}
          />
          <div className="text-2xl font-bold">{name}</div>
          <Complexity complexity={complexity} />
        </div>
        <div
          className={`flex-col flex items-center gap-3 text-[${themeColor}]`}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className={statBlock}>
              Attack:
              <StatRow
                base={stats.attack.base}
                potential={stats.attack.potential}
                heroColor={themeColor}
              />
            </div>
            <div className={statBlock}>
              Initiative:
              <StatRow
                base={stats.initiative.base}
                potential={stats.initiative.potential}
                heroColor={themeColor}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className={statBlock}>
              Defense:
              <StatRow
                base={stats.defense.base}
                potential={stats.defense.potential}
                heroColor={themeColor}
              />
            </div>
            <div className={statBlock}>
              Movement:
              <StatRow
                base={stats.movement.base}
                potential={stats.movement.potential}
                heroColor={themeColor}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {roles.map((r) => (
            <RoleIcon role={r} key={r} />
          ))}
        </div>
        <div>
          Win rate: {games ? `${(100 * (wins / games)).toFixed(2)}%` : "--"}
        </div>
        <Link
          className="underline text-emerald-400 hover:text-emerald-500"
          href={link}
        >
          Guide
        </Link>
      </div>
    </>
  );
}

function StatRow({
  base,
  potential,
  heroColor,
}: {
  base: number;
  potential: number;
  heroColor: string;
}) {
  const borderColor = pSBC(0.15, heroColor);

  return (
    <div className={`flex border-2 border-[${heroColor}] p-1 rounded-xl`}>
      {Array.from({ length: 8 }, (_, index) => (
        <RectangleHorizontal
          key={index}
          fill={
            index < base
              ? pSBC(-0.35, heroColor) || "#3aab47"
              : index < potential
              ? pSBC(0.25, heroColor) || "#a9f49d"
              : "transparent"
          }
          stroke={pSBC(-0.5, heroColor) || "#076913"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function getHeroWinrate(name: HeroName) {
  let wins = 0;
  let games = 0;

  for (let i = 0; i < GAMES.length; i++) {
    const player = GAMES[i].players.find(({ heroName }) => name === heroName);

    if (!player) continue;

    games++;

    if (player.win) wins++;
  }

  return { wins, games };
}
