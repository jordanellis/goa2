import { PropsWithChildren } from "react";

export default function Card({
  children,
  className,
}: { className?: string } & PropsWithChildren) {
  const classes = `${className} rounded-2xl bg-[#2d545e] border-[#09242b] border p-6`;

  return <div className={classes}>{children}</div>;
}
