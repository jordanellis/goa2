"use client";

import { Role } from "@/types/hero";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import {
  BicepsFlexed,
  Accessibility,
  HeartPlus,
  Tractor,
  Bandage,
  Sword,
  Rss,
  BowArrow,
  Glasses,
  Disc2,
  X,
} from "lucide-react";
import { ReactNode, useState } from "react";
import Button from "./Button";

export default function RoleIcon({ role }: { role: Role }) {
  const [isOpen, setIsOpen] = useState(false);

  const roleIconMap: Record<Role, ReactNode> = {
    [Role.DAMAGER]: <BicepsFlexed stroke="#ff480b" />,
    [Role.DISABLER]: <Accessibility stroke="#ffabe9" />,
    [Role.DURABLE]: <HeartPlus stroke="#ffabab" />,
    [Role.FARMING]: <Tractor stroke="#b8fd6f" />,
    [Role.HEALER]: <Bandage stroke="#fff783" />,
    [Role.MELEE]: <Sword stroke="#b3e4ff" />,
    [Role.PUSHER]: <Rss stroke="#ffe7b3" />,
    [Role.SNIPER]: <BowArrow stroke="#ddaf90" />,
    [Role.TACTICIAN]: <Glasses stroke="#e9fffd" />,
    [Role.TOKENS]: <Disc2 stroke="#a37bff" />,
  };

  const RoleLookup: Record<Role, string> = {
    [Role.DAMAGER]:
      "Damagers are heroes adept at forcing their opponents to discard cards. This weakens enemy heroes, making it easier for your allies to take them down.",
    [Role.DISABLER]:
      "Disablers possess the power to weaken enemy heroes by preventing or limiting their ability to perform certain actions.",
    [Role.DURABLE]:
      "Durable heroes are best equipped to withstand the heat of battle and survive, usually achieving this through a combination of a high defense stat and self-healing abilities.",
    [Role.FARMING]:
      "Heroes with farming abilities can generate extra coins for themselves or their allies, enabling faster leveling and setting up stronger late game.",
    [Role.HEALER]:
      "Healers help their allies by letting them retrieve discarded cards, greatly increasing their chances of surviving the fight.",
    [Role.MELEE]:
      "These heroes are focused on attacking in close quarters. A team composed entirely of melee fighters is formidable in a brawl, but may struggle against fast ranged heroes and heroes capable of placing tokens.",
    [Role.PUSHER]:
      "These heroes are able to deal with more than two enemy minions each round, or protect and respawn their own minions, giving them an edge at pushing the lane.",
    [Role.SNIPER]:
      "Most heroes have access to some form of ranged attacks, while Snipers are capable of attacking enemy heroes and minions at a much longer range.",
    [Role.TACTICIAN]:
      "Tacticians specialize in controlling the battlefield by moving, pushing, or repositioning units. Their versatile abilities allow them to support allies and hinder enemies.",
    [Role.TOKENS]:
      "These heroes are capable of placing tokens — temporary obstacles with special qualities. Each such hero uses their own type of tokens and the icon will correspond to the ones used by this particular hero.",
  };

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex border-2 border-[#96ffa1] p-2 rounded-xl gap-2"
      >
        <div>{roleIconMap[role]}</div>
        <div className="uppercase font-bold">{role}</div>
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-emerald-300/20 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <Button
                className="absolute right-2 top-2 items-center rounded-full !p-2 bg-emerald-950-700 px-3 py-1.5 text-rose-50 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                onClick={close}
              >
                <X />
              </Button>
              <DialogTitle className="text-base font-bold text-white pb-2 capitalize">
                {role}
              </DialogTitle>
              <p>{RoleLookup[role]}</p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
