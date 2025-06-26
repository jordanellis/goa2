import { Hero, HeroName, Role } from "@/types/hero";

export const HEROES = [
  {
    name: HeroName.ARIEN,
    complexity: 1,
    stats: {
      attack: {
        base: 8,
        potential: 8
      },
      initiative: {
        base: 4,
        potential: 4
      },
      defense: {
        base: 5,
        potential: 6
      },
      movement: {
        base: 5,
        potential: 6
      }
    },
    roles: [Role.TACTICIAN, Role.DISABLER, Role.DURABLE, Role.PUSHER],
    link: "https://boardgamegeek.com/thread/3487765/arien-hero-spotlight-2nd-printing"
  },
  {
    name: HeroName.XARGATHA,
    complexity: 1,
    stats: {
      attack: {
        base: 5,
        potential: 8
      },
      initiative: {
        base: 3,
        potential: 3
      },
      defense: {
        base: 6,
        potential: 6
      },
      movement: {
        base: 6,
        potential: 6
      }
    },
    roles: [Role.TACTICIAN, Role.PUSHER, Role.DISABLER, Role.DURABLE, Role.SNIPER],
    link: "https://boardgamegeek.com/thread/3459245/xargatha-the-changed-hero-spotlight-2nd-printing"
  },{
    name: HeroName.BROGAN,
    complexity: 1,
    stats: {
      attack: {
        base: 7,
        potential: 7
      },
      initiative: {
        base: 1,
        potential: 1
      },
      defense: {
        base: 8,
        potential: 8
      },
      movement: {
        base: 2,
        potential: 4
      }
    },
    roles: [Role.DURABLE, Role.DISABLER, Role.PUSHER, Role.FARMING],
    link: "https://boardgamegeek.com/thread/3479796/brogan-hero-spotlight-2nd-printing"
  },{
    name: HeroName.WASP,
    complexity: 1,
    stats: {
      attack: {
        base: 5,
        potential: 5
      },
      initiative: {
        base: 6,
        potential: 6
      },
      defense: {
        base: 4,
        potential: 5
      },
      movement: {
        base: 5,
        potential: 5
      }
    },
    roles: [Role.DISABLER, Role.TACTICIAN, Role.SNIPER],
    link: "https://boardgamegeek.com/thread/3466028/wasp-hero-spotlight-2nd-printing"
  },
] as Hero[]
