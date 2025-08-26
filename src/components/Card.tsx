import { PropsWithChildren } from "react";

export default function Card({
  children,
  className,
}: { className?: string } & PropsWithChildren) {
  const classes = `${className} rounded-2xl bg-emerald-950 border border-emerald-800 p-6`;

  return <div className={classes}>{children}</div>;
}
