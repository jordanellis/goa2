import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-2xl bg-emerald-950 border border-emerald-800 p-6">
      {children}
    </div>
  );
}
