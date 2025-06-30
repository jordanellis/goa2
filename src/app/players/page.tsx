import { PLAYERS } from "@/data/players";
import Link from "next/link";

export default function Players() {
  return (
    <>
      <div className="flex flex-col m-auto max-w-sm w-full pt-6">
        {PLAYERS.map(({ name }) => (
          <Link
            key={name}
            href={`/players/${name}`}
            className="border first:rounded-t last:rounded-b border-emerald-600 bg-neutral-900 flex w-40 mx-auto p-1 justify-around"
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}
