import Link from "next/link";
import { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  to?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  to,
  className,
  onClick,
}: ButtonProps) {
  const classes = `${className} py-2 px-3 border border-emerald-500 rounded-2xl bg-black`;

  return to ? (
    <Link className={classes} href={to}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
