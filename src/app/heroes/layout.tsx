import Card from "@/components/Card";

export default function HeroesLanding({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Card>{children}</Card>;
}
