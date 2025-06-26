import { Hero, HeroName, Role } from "@/types/hero";

export const HEROES = [
  {
    name: HeroName.ARIEN,
    complexity: 1,
    stats: {
      attack: {
        base: 5,
        potential: 6
      },
      initiative: {
        base: 4,
        potential: 4
      },
      defense: {
        base: 7,
        potential: 8
      },
      movement: {
        base: 2,
        potential: 6
      }
    },
    roles: [Role.DAMAGER, Role.MELEE, Role.PUSHER, Role.FARMING, Role.TACTICIAN],
    link: ""
  },
  {
    name: HeroName.XARGATHA,
    complexity: 2,
    stats: {
      attack: {
        base: 5,
        potential: 6
      },
      initiative: {
        base: 4,
        potential: 4
      },
      defense: {
        base: 7,
        potential: 8
      },
      movement: {
        base: 2,
        potential: 6
      }
    },
    roles: [Role.TACTICIAN, Role.HEALER, Role.MELEE, Role.PUSHER],
    link: ""
  },{
    name: HeroName.BROGAN,
    complexity: 3,
    stats: {
      attack: {
        base: 5,
        potential: 6
      },
      initiative: {
        base: 4,
        potential: 4
      },
      defense: {
        base: 7,
        potential: 8
      },
      movement: {
        base: 2,
        potential: 6
      }
    },
    roles: [Role.DISABLER, Role.TOKENS, Role.DAMAGER, Role.SNIPER],
    link: ""
  },{
    name: HeroName.WASP,
    complexity: 4,
    stats: {
      attack: {
        base: 5,
        potential: 6
      },
      initiative: {
        base: 4,
        potential: 4
      },
      defense: {
        base: 7,
        potential: 8
      },
      movement: {
        base: 2,
        potential: 6
      }
    },
    roles: [Role.FARMING],
    link: ""
  },
] as Hero[]
