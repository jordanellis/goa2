import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import HeaderLink from "@/components/HeaderLink";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoA2",
  description: "GoA2 Your Happy Place",
};

// darker-blu [#12343b]
// blu [#2d545e]
// sand [#e1b382]
// darker-sand [#c89666]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="antialiased h-full">
        <header className="w-full bg-linear-to-t from-[#86582e] to-[#e1b382] p-2 text-center absolute top-0 text-[#12343b] flex flex-col gap-2">
          <Link href="/" className="font-bold text-2xl">
            GoA2 Your Happy Place
          </Link>
          <div className="flex justify-around pt-3 max-w-xl mx-auto w-full">
            <HeaderLink to={"/heroes"} title="heroes" />
            <HeaderLink to={"/matches"} title="matches" />
            <HeaderLink to={"/players"} title="players" />
          </div>
        </header>
        <main className="sm:p-8 min-h-screen flex flex-col justify-center sm:pt-28 p-4 pt-24 bg-linear-to-t to-[#081b1f] from-[#12343b]">
          {children}
        </main>
      </body>
    </html>
  );
}
