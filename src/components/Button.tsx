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
  const classes = `${className} py-2 px-3 border text-[#2d545e] border-[#c89666] bg-[#e1b382] rounded-2xl font-bold`;

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
