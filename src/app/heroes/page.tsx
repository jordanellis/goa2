"use client";

import { Checkbox } from "@headlessui/react";
import Button from "@/components/Button";
import Complexity from "@/components/Complexity";
import { HEROES } from "@/data/heroes";
import { useState } from "react";
import { Role } from "@/types/hero";
import RoleIcon, { roleIconMap } from "@/components/RoleIcon";

export default function Heroes() {
  const [complexityFilter, setComplexityFilter] = useState<number[]>([]);
  const [roleFilter, setRoleFilter] = useState<Role[]>([]);

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

  return (
    <>
      <div className="flex flex-col gap-8 pt-6">
        <div className="w-fit mx-auto flex">
          {Array.from({ length: 4 }, (_, i) => (
            <Checkbox
              key={i}
              checked={complexityFilter.includes(i + 1)}
              onChange={(checked) => updateComplexityFilter(checked, i + 1)}
              className="bg-white/10 p-2 sm:p-4 focus:not-data-focus:outline-none data-checked:bg-emerald-700/80 first:rounded-l-full border border-emerald-600 last:rounded-r-full"
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
              onChange={(checked) => updateRoleFilter(checked, role as Role)}
              className="bg-white/10 p-2 sm:p-4 focus:not-data-focus:outline-none data-checked:bg-emerald-700/80 first:sm:rounded-l-full border border-emerald-600 last:sm:rounded-r-full"
            >
              <div className="justify-center flex">{Icon}</div>
              <div>{role}</div>
            </Checkbox>
          ))}
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          {HEROES.filter(({ complexity, roles }) => {
            if (complexityFilter.length === 0 && roleFilter.length === 0)
              return true;

            if (roleFilter.length === 0)
              return complexityFilter.includes(complexity);
            else if (complexityFilter.length === 0)
              return roleFilter.some((role) => roles.includes(role));

            return (
              complexityFilter.includes(complexity) &&
              roleFilter.some((role) => roles.includes(role))
            );
          }).map((hero, i) => (
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
