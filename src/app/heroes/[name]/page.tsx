import Button from "@/components/Button";
import Complexity from "@/components/Complexity";
import { HEROES } from "@/data/heroes";
import { Role } from "@/types/hero";
import {
  Accessibility,
  Bandage,
  BicepsFlexed,
  BowArrow,
  Disc2,
  Glasses,
  HeartPlus,
  RectangleHorizontal,
  Rss,
  Star,
  Sword,
  Tractor,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

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

  const { name, complexity, stats, roles, link } = hero;

  const statBlock = "flex justify-between w-72 items-center";

  return (
    <>
      <Button to={`/heroes`}>{"< Back"}</Button>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-1 items-center">
          <div className="text-2xl font-bold">{name}</div>
          <Complexity complexity={complexity} />
        </div>
        <div className="flex-col flex items-center gap-3 text-emerald-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className={statBlock}>
              Attack:
              <StatRow
                base={stats.attack.base}
                potential={stats.attack.potential}
              />
            </div>
            <div className={statBlock}>
              Defense:
              <StatRow
                base={stats.defense.base}
                potential={stats.defense.potential}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className={statBlock}>
              Initiative:
              <StatRow
                base={stats.initiative.base}
                potential={stats.initiative.potential}
              />
            </div>
            <div className={statBlock}>
              Movement:
              <StatRow
                base={stats.movement.base}
                potential={stats.movement.potential}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {roles.map((r) => (
            <RoleIcon role={r} key={r} />
          ))}
        </div>
        <Link href={link}>Guide</Link>
      </div>
    </>
  );
}

function StatRow({ base, potential }: { base: number; potential: number }) {
  return (
    <div className="flex border-2 border-[#96ffa1] p-1 rounded-xl">
      {Array.from({ length: 8 }, (_, index) => (
        <RectangleHorizontal
          key={index}
          fill={
            index < base
              ? "#3aab47"
              : index < potential
              ? "#89f48d"
              : "transparent"
          }
          stroke="#076913"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function RoleIcon({ role }: { role: Role }) {
  const roleIconMap: Record<Role, ReactNode> = {
    [Role.DAMAGER]: <BicepsFlexed stroke="#ff480b" />,
    [Role.DISABLER]: <Accessibility stroke="#ffabe9" />,
    [Role.DURABLE]: <HeartPlus stroke="#ffabab" />,
    [Role.FARMING]: <Tractor stroke="#b8fd6f" />,
    [Role.HEALER]: <Bandage stroke="#fff783" />,
    [Role.MELEE]: <Sword stroke="#b3e4ff" />,
    [Role.PUSHER]: <Rss stroke="#ffe7b3" />,
    [Role.SNIPER]: <BowArrow stroke="#ddaf90" />,
    [Role.TACTICIAN]: <Glasses stroke="#e9fffd" />,
    [Role.TOKENS]: <Disc2 stroke="#a37bff" />,
  };

  return (
    <div className="flex border-2 border-[#96ffa1] p-2 rounded-xl gap-2">
      <div>{roleIconMap[role]}</div>
      <div className="uppercase font-bold">{role}</div>
    </div>
  );
}
