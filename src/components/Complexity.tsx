import { Star } from "lucide-react";

export default function Complexity({ complexity }: { complexity: number }) {
  return (
    <div title="Complexity" className="flex flex-row gap-1">
      {Array.from({ length: complexity }, (_, index) => (
        <Star key={index} fill="#f3b817" stroke="#fed017" />
      ))}
    </div>
  );
}
