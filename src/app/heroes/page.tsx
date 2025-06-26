import Button from "@/components/Button";
import Complexity from "@/components/Complexity";
import { HEROES } from "@/data/heroes";

export default function Heroes() {
  return (
    <div className="flex flex-col gap-4">
      {HEROES.map((hero, i) => (
        <Button
          className="flex flex-col gap-1"
          key={i}
          to={`/heroes/${hero.name}`}
        >
          <div>{hero.name}</div>
          <Complexity complexity={hero.complexity} />
        </Button>
      ))}
    </div>
  );
}
