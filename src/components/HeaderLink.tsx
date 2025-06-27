"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink({
  to,
  title,
}: {
  to: string;
  title: string;
}) {
  const pathname = usePathname();

  return (
    <Link href={to} className="font-bold text-xs uppercase">
      <div>{title}</div>
      <div
        className={`w-10 h-0.5 mx-auto mt-0.5 bg-linear-to-b from-slate-400 to-slate-100 ${
          pathname.includes(title) ? "" : "invisible"
        }`}
      />
    </Link>
  );
}
