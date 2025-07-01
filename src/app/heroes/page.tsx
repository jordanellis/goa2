"use client";

import {
  Checkbox,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Button from "@/components/Button";
import Complexity from "@/components/Complexity";
import { HEROES } from "@/data/heroes";
import { useState } from "react";
import { Hero, Role } from "@/types/hero";
import { roleIconMap } from "@/components/RoleIcon";
import { ChevronDown } from "lucide-react";
import { Range, Root, Thumb, Track } from "@radix-ui/react-slider";

export default function Heroes() {
  const [complexityFilter, setComplexityFilter] = useState<number[]>([]);
  const [roleFilter, setRoleFilter] = useState<Role[]>([]);
  const [attackFilter, setAttackFilter] = useState<number[]>([0, 8]);
  const [defenseFilter, setDefenseFilter] = useState<number[]>([0, 8]);
  const [initiativeFilter, setInitiativeFilter] = useState<number[]>([0, 8]);
  const [movementFilter, setMovementFilter] = useState<number[]>([0, 8]);

  function updateComplexityFilter(checked: boolean, value: number) {
    setComplexityFilter((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  }

  function updateRoleFilter(checked: boolean, value: Role) {
    setRoleFilter((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  }

  function filterBetweenStats({
    attack,
    defense,
    initiative,
    movement,
  }: Hero["stats"]) {
    const highestAttack = Math.max(attack.base, attack.potential);
    const highestDefense = Math.max(defense.base, defense.potential);
    const highestInitiative = Math.max(initiative.base, initiative.potential);
    const highestMovement = Math.max(movement.base, attack.potential);

    return (
      attackFilter[0] <= highestAttack &&
      highestAttack <= attackFilter[1] &&
      defenseFilter[0] <= highestDefense &&
      highestDefense <= defenseFilter[1] &&
      initiativeFilter[0] <= highestInitiative &&
      highestInitiative <= initiativeFilter[1] &&
      movementFilter[0] <= highestMovement &&
      highestMovement <= movementFilter[1]
    );
  }

  function filterHeroes(hero: Hero) {
    const { complexity, roles, stats } = hero;

    if (complexityFilter.length === 0 && roleFilter.length === 0)
      return filterBetweenStats(stats);

    if (roleFilter.length === 0)
      return complexityFilter.includes(complexity) && filterBetweenStats(stats);
    else if (complexityFilter.length === 0)
      return (
        roleFilter.some((role) => roles.includes(role)) &&
        filterBetweenStats(stats)
      );

    return (
      complexityFilter.includes(complexity) &&
      roleFilter.some((role) => roles.includes(role)) &&
      filterBetweenStats(stats)
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <Disclosure
          as="div"
          className="bg-emerald-900 rounded-2xl w-fit text-rose-50 mx-auto border border-emerald-800"
          defaultOpen={false}
        >
          <DisclosureButton className="group flex w-full items-center gap-2 p-2 cursor-pointer">
            <div className="text-sm/6 font-medium text-white group-data-hover:text-white/80">
              Filters
            </div>
            <ChevronDown className="size-5 group-data-open:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="text-sm/5 pt-3 px-2 py-1.5">
            <div className="flex flex-col gap-2">
              <div className="w-fit mx-auto flex">
                {Array.from({ length: 4 }, (_, i) => (
                  <Checkbox
                    key={i}
                    checked={complexityFilter.includes(i + 1)}
                    onChange={(checked) =>
                      updateComplexityFilter(checked, i + 1)
                    }
                    className="bg-white/10 p-2 sm:p-4 focus:not-data-focus:outline-none data-checked:bg-emerald-700/80 first:rounded-l-full border border-emerald-600 last:rounded-r-full cursor-pointer"
                  >
                    <Complexity className="hidden sm:flex" complexity={i + 1} />
                    <Complexity
                      className="flex sm:hidden"
                      complexity={i + 1}
                      condensed
                    />
                  </Checkbox>
                ))}
              </div>
              <div className="w-fit mx-auto flex flex-wrap justify-center">
                {Object.entries(roleIconMap).map(([role, Icon]) => (
                  <Checkbox
                    key={role}
                    checked={roleFilter.includes(role as Role)}
                    onChange={(checked) =>
                      updateRoleFilter(checked, role as Role)
                    }
                    className="bg-white/10 p-2 sm:p-4 focus:not-data-focus:outline-none data-checked:bg-emerald-700/80 first:sm:rounded-l-full border border-emerald-600 last:sm:rounded-r-full cursor-pointer"
                  >
                    <div className="justify-center flex">{Icon}</div>
                    <div>{role}</div>
                  </Checkbox>
                ))}
              </div>
              <div className="flex gap-2 w-full flex-col sm:items-center">
                <div className="sm:flex-row flex-col gap-2 flex">
                  <StatSlider
                    label="Attack"
                    value={attackFilter}
                    onValueChange={setAttackFilter}
                  />
                  <StatSlider
                    label="Defense"
                    value={defenseFilter}
                    onValueChange={setDefenseFilter}
                  />
                </div>
                <div className="sm:flex-row flex-col gap-2 flex">
                  <StatSlider
                    label="Initiative"
                    value={initiativeFilter}
                    onValueChange={setInitiativeFilter}
                  />
                  <StatSlider
                    label="Movement"
                    value={movementFilter}
                    onValueChange={setMovementFilter}
                  />
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
        <div className="flex gap-4 flex-wrap justify-center">
          {HEROES.filter(filterHeroes).map((hero, i) => (
            <Button
              className="flex flex-col gap-1 items-center w-32"
              key={i}
              to={`/heroes/${hero.name}`}
            >
              <div>{hero.name}</div>
              <Complexity complexity={hero.complexity} />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

function StatSlider({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: number[];
  onValueChange: (value: number[]) => void;
}) {
  return (
    <div className="flex gap-2 text-rose-50 max-w-200 items-center justify-between">
      <label>{label}:</label>
      <Root
        className="relative flex h-5 w-45 touch-none select-none items-center"
        value={value}
        onValueChange={(val) => {
          onValueChange(val);
        }}
        max={8}
        step={1}
      >
        <Track className="relative h-[5px] grow rounded-full bg-black">
          <Range className="absolute h-full rounded-full bg-emerald-300" />
        </Track>
        <Thumb className="block size-5 rounded-[10px] bg-rose-100 shadow-[0_2px_10px] shadow-black hover:bg-rose-300 focus:shadow-[0_0_0_2px] focus:shadow-white focus:outline-none text-emerald-700 font-extrabold text-center">
          {value[0]}
        </Thumb>
        <Thumb className="block size-5 rounded-[10px] bg-rose-100 shadow-[0_2px_10px] shadow-black hover:bg-rose-300 focus:shadow-[0_0_0_2px] focus:shadow-white focus:outline-none text-emerald-700 font-extrabold text-center">
          {value[1]}
        </Thumb>
      </Root>
    </div>
  );
}
