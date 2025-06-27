import { Star } from "lucide-react";

export default function Complexity({
  className,
  complexity,
  condensed,
}: {
  className?: string;
  complexity: number;
  condensed?: boolean;
}) {
  return (
    <div title="Complexity" className={`flex flex-row gap-1 ${className}`}>
      {Array.from({ length: complexity }, (_, index) => (
        <Star
          key={index}
          fill="#f3c837"
          stroke="#fef047"
          strokeWidth={1.5}
          size={condensed ? 16 : 24}
        />
      ))}
    </div>
  );
}
