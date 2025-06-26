import Link from "next/link";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  to?: string;
  className?: string;
}

export default function Button({ children, to, className }: ButtonProps) {
  const classes = `${className} py-2 px-3 border border-emerald-500 rounded-2xl bg-black`;

  return to ? (
    <Link className={classes} href={to}>
      {children}
    </Link>
  ) : (
    <button className={classes}>{children}</button>
  );
}
