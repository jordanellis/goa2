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
    link: "https://boardgamegeek.com/thread/3487765/arien-hero-spotlight-2nd-printing",
    themeColor: "#0b90dd"
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
    link: "https://boardgamegeek.com/thread/3459245/xargatha-the-changed-hero-spotlight-2nd-printing",
    themeColor: "#0bdd39"
  },
  {
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
    link: "https://boardgamegeek.com/thread/3479796/brogan-hero-spotlight-2nd-printing",
    themeColor: "#dd3c0b"
  },
  {
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
    link: "https://boardgamegeek.com/thread/3466028/wasp-hero-spotlight-2nd-printing",
    themeColor: "#6cf5ff"
  },
  {
    name: HeroName.TIGERCLAW,
    complexity: 1,
    stats: {
      attack: {
        base: 4,
        potential: 8
      },
      initiative: {
        base: 8,
        potential: 8
      },
      defense: {
        base: 1,
        potential: 4
      },
      movement: {
        base: 7,
        potential: 8
      }
    },
    roles: [Role.MELEE, Role.DISABLER, Role.FARMING],
    link: "https://boardgamegeek.com/thread/3469903/tigerclaw-hero-spotlight-2nd-printing",
    themeColor: "#dd4e0b"
  },
  {
    name: HeroName.SABINA,
    complexity: 1,
    stats: {
      attack: {
        base: 1,
        potential: 8
      },
      initiative: {
        base: 5,
        potential: 5
      },
      defense: {
        base: 3,
        potential: 3
      },
      movement: {
        base: 5,
        potential: 6
      }
    },
    roles: [Role.TACTICIAN, Role.PUSHER],
    link: "https://boardgamegeek.com/thread/3461122/sabina-hero-spotlight-2nd-printing",
    themeColor: "#8d4922"
  },
  {
    name: HeroName.DODGER,
    complexity: 1,
    stats: {
      attack: {
        base: 3,
        potential: 3
      },
      initiative: {
        base: 7,
        potential: 7
      },
      defense: {
        base: 2,
        potential: 5
      },
      movement: {
        base: 5,
        potential: 5
      }
    },
    roles: [Role.DAMAGER, Role.SNIPER, Role.PUSHER, Role.FARMING, Role.DISABLER],
    link: "https://boardgamegeek.com/thread/3474317/dodger-hero-spotlight-2nd-printing",
    themeColor: "#9eb9bd"
  },
  {
    name: HeroName.ROWENNA,
    complexity: 2,
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
        base: 7,
        potential: 7
      },
      movement: {
        base: 3,
        potential: 5
      }
    },
    roles: [Role.MELEE, Role.DURABLE, Role.HEALER, Role.FARMING, Role.PUSHER, Role.TACTICIAN],
    link: "https://boardgamegeek.com/thread/3447239/rowenna-hero-spotlight-2nd-printing",
    themeColor: "#606a7a"
  },
  {
    name: HeroName.GARRUS,
    complexity: 2,
    stats: {
      attack: {
        base: 8,
        potential: 8
      },
      initiative: {
        base: 3,
        potential: 3
      },
      defense: {
        base: 7,
        potential: 7
      },
      movement: {
        base: 5,
        potential: 6
      }
    },
    roles: [Role.DISABLER, Role.DURABLE, Role.TACTICIAN],
    link: "https://boardgamegeek.com/thread/3526542/garrus-hero-spotlight-2nd-printing",
    themeColor: "#eb2626"
  },
  {
    name: HeroName.BAIN,
    complexity: 2,
    stats: {
      attack: {
        base: 5,
        potential: 5
      },
      initiative: {
        base: 4,
        potential: 4
      },
      defense: {
        base: 4,
        potential: 6
      },
      movement: {
        base: 5,
        potential: 6
      }
    },
    roles: [Role.TACTICIAN, Role.SNIPER, Role.HEALER, Role.FARMING, Role.DURABLE],
    link: "https://boardgamegeek.com/thread/3500265/bain-hero-spotlight-2nd-printing",
    themeColor: "#a1286b"
  },
  {
    name: HeroName.WHISPER,
    complexity: 2,
    stats: {
      attack: {
        base: 7,
        potential: 7
      },
      initiative: {
        base: 7,
        potential: 7
      },
      defense: {
        base: 4,
        potential: 4
      },
      movement: {
        base: 3,
        potential: 5
      }
    },
    roles: [Role.DAMAGER, Role.DURABLE, Role.TACTICIAN, Role.PUSHER],
    link: "https://boardgamegeek.com/thread/2888636/whisper-hero-spotlight",
    themeColor: "#5e5e5e"
  },
  {
    name: HeroName.MISA,
    complexity: 2,
    stats: {
      attack: {
        base: 6,
        potential: 6
      },
      initiative: {
        base: 7,
        potential: 7
      },
      defense: {
        base: 5,
        potential: 5
      },
      movement: {
        base: 1,
        potential: 8
      }
    },
    roles: [Role.TACTICIAN, Role.DURABLE, Role.DAMAGER],
    link: "https://boardgamegeek.com/thread/2890793/misa-hero-spotlight",
    themeColor: "#3c6ab4"
  },
  {
    name: HeroName.URSAFAR,
    complexity: 2,
    stats: {
      attack: {
        base: 6,
        potential: 6
      },
      initiative: {
        base: 5,
        potential: 5
      },
      defense: {
        base: 6,
        potential: 6
      },
      movement: {
        base: 1,
        potential: 5
      }
    },
    roles: [Role.DURABLE, Role.PUSHER, Role.FARMING, Role.MELEE],
    link: "https://boardgamegeek.com/thread/2896403/ursafar-hero-spotlight",
    themeColor: "#ad3d3d"
  },
  {
    name: HeroName.SILVERARROW,
    complexity: 2,
    stats: {
      attack: {
        base: 2,
        potential: 2
      },
      initiative: {
        base: 7,
        potential: 7
      },
      defense: {
        base: 1,
        potential: 1
      },
      movement: {
        base: 6,
        potential: 7
      }
    },
    roles: [Role.SNIPER, Role.DAMAGER, Role.DISABLER, Role.HEALER, Role.FARMING],
    link: "https://boardgamegeek.com/thread/2891788/silverarrow-hero-spotlight-first-printing",
    themeColor: "#288840"
  },
  {
    name: HeroName.MIN,
    complexity: 2,
    stats: {
      attack: {
        base: 4,
        potential: 8
      },
      initiative: {
        base: 8,
        potential: 8
      },
      defense: {
        base: 3,
        potential: 8
      },
      movement: {
        base: 6,
        potential: 6
      }
    },
    roles: [Role.TOKENS, Role.DISABLER, Role.DAMAGER, Role.MELEE],
    link: "https://boardgamegeek.com/thread/2886926/min-hero-spotlight-1st-printing-2022",
    themeColor: "#fd4007"
  },
  {
    name: HeroName.MRAK,
    complexity: 3,
    stats: {
      attack: {
        base: 8,
        potential: 8
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
    roles: [Role.MELEE, Role.TOKENS, Role.DURABLE, Role.DISABLER, Role.TACTICIAN],
    link: "https://boardgamegeek.com/thread/3449043/mrak-hero-spotlight-2nd-printing",
    themeColor: "#0fc23c"
  },
  {
    name: HeroName.CUTTER,
    complexity: 3,
    stats: {
      attack: {
        base: 4,
        potential: 8
      },
      initiative: {
        base: 6,
        potential: 6
      },
      defense: {
        base: 4,
        potential: 4
      },
      movement: {
        base: 4,
        potential: 8
      }
    },
    roles: [Role.TACTICIAN, Role.DISABLER, Role.FARMING],
    link: "https://boardgamegeek.com/thread/2893527/cutter-hero-spotlight",
    themeColor: "#8b3e6b"
  },
  {
    name: HeroName.TRINKETS,
    complexity: 3,
    stats: {
      attack: {
        base: 3,
        potential: 5
      },
      initiative: {
        base: 6,
        potential: 6
      },
      defense: {
        base: 2,
        potential: 4
      },
      movement: {
        base: 7,
        potential: 8
      }
    },
    roles: [Role.SNIPER, Role.DAMAGER, Role.PUSHER],
    link: "https://boardgamegeek.com/thread/2910990/trinkets-hero-spotlight",
    themeColor: "#21a5bd"
  },
  {
    name: HeroName.TALI,
    complexity: 3,
    stats: {
      attack: {
        base: 4,
        potential: 6
      },
      initiative: {
        base: 5,
        potential: 8
      },
      defense: {
        base: 4,
        potential: 4
      },
      movement: {
        base: 5,
        potential: 5
      }
    },
    roles: [Role.DAMAGER, Role.PUSHER, Role.HEALER, Role.DURABLE, Role.TOKENS],
    link: "https://boardgamegeek.com/thread/2893302/tali-hero-spotlight-1st-printing",
    themeColor: "#c933c1"
  },
  {
    name: HeroName.SWIFT,
    complexity: 3,
    stats: {
      attack: {
        base: 5,
        potential: 5
      },
      initiative: {
        base: 4,
        potential: 4
      },
      defense: {
        base: 2,
        potential: 2
      },
      movement: {
        base: 7,
        potential: 7
      }
    },
    roles: [Role.SNIPER, Role.FARMING, Role.TACTICIAN],
    link: "",
    themeColor: "#a7892a"
  },
  {
    name: HeroName.WUK,
    complexity: 3,
    stats: {
      attack: {
        base: 5,
        potential: 5
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
        base: 3,
        potential: 4
      }
    },
    roles: [Role.TOKENS, Role.PUSHER, Role.DURABLE, Role.SNIPER, Role.TACTICIAN, Role.HEALER],
    link: "",
    themeColor: "#ff5d5d"
  },
  {
    name: HeroName.HANU,
    complexity: 3,
    stats: {
      attack: {
        base: 4,
        potential: 4
      },
      initiative: {
        base: 8,
        potential: 8
      },
      defense: {
        base: 1,
        potential: 1
      },
      movement: {
        base: 7,
        potential: 8
      }
    },
    roles: [Role.TACTICIAN, Role.SNIPER, Role.PUSHER],
    link: "",
    themeColor: "#ff5555"
  },
  {
    name: HeroName.BRYNN,
    complexity: 3,
    stats: {
      attack: {
        base: 4,
        potential: 8
      },
      initiative: {
        base: 7,
        potential: 7
      },
      defense: {
        base: 4,
        potential: 4
      },
      movement: {
        base: 5,
        potential: 6
      }
    },
    roles: [Role.TACTICIAN, Role.DAMAGER, Role.DURABLE],
    link: "",
    themeColor: "#b17c4b"
  },
  {
    name: HeroName.MORTIMER,
    complexity: 3,
    stats: {
      attack: {
        base: 8,
        potential: 8
      },
      initiative: {
        base: 2,
        potential: 2
      },
      defense: {
        base: 7,
        potential: 7
      },
      movement: {
        base: 4,
        potential: 4
      }
    },
    roles: [Role.MELEE, Role.TOKENS, Role.FARMING, Role.DURABLE, Role.PUSHER],
    link: "",
    themeColor: "#51f05e"
  },
  {
    name: HeroName.WIDGET,
    complexity: 3,
    stats: {
      attack: {
        base: 5,
        potential: 5
      },
      initiative: {
        base: 4,
        potential: 4
      },
      defense: {
        base: 4,
        potential: 4
      },
      movement: {
        base: 5,
        potential: 6
      }
    },
    roles: [Role.TACTICIAN, Role.PUSHER, Role.DAMAGER],
    link: "",
    themeColor: "#0b9bdd"
  },
  {
    name: HeroName.SNORRI,
    complexity: 4,
    stats: {
      attack: {
        base: 5,
        potential: 6
      },
      initiative: {
        base: 2,
        potential: 2
      },
      defense: {
        base: 5,
        potential: 6
      },
      movement: {
        base: 4,
        potential: 5
      }
    },
    roles: [Role.SNIPER, Role.FARMING, Role.DURABLE, Role.DAMAGER, Role.PUSHER, Role.HEALER],
    link: "",
    themeColor: "#2a8b0d"
  },
  {
    name: HeroName.RAZZLE,
    complexity: 4,
    stats: {
      attack: {
        base: 3,
        potential: 3
      },
      initiative: {
        base: 8,
        potential: 8
      },
      defense: {
        base: 1,
        potential: 4
      },
      movement: {
        base: 5,
        potential: 6
      }
    },
    roles: [Role.TACTICIAN, Role.MELEE],
    link: "",
    themeColor: "#79a0e0"
  },
  {
    name: HeroName.GYDION,
    complexity: 4,
    stats: {
      attack: {
        base: 5,
        potential: 6
      },
      initiative: {
        base: 3,
        potential: 3
      },
      defense: {
        base: 3,
        potential: 5
      },
      movement: {
        base: 1,
        potential: 4
      }
    },
    roles: [Role.SNIPER, Role.TACTICIAN, Role.FARMING, Role.DAMAGER, Role.PUSHER, Role.TOKENS],
    link: "",
    themeColor: "#aca9a9"
  },
  {
    name: HeroName.NEBKHER,
    complexity: 4,
    stats: {
      attack: {
        base: 2,
        potential: 3
      },
      initiative: {
        base: 1,
        potential: 1
      },
      defense: {
        base: 5,
        potential: 6
      },
      movement: {
        base: 2,
        potential: 5
      }
    },
    roles: [Role.DISABLER, Role.TOKENS, Role.SNIPER],
    link: "",
    themeColor: "#ddd127"
  },
  {
    name: HeroName.IGNATIA,
    complexity: 4,
    stats: {
      attack: {
        base: 5,
        potential: 5
      },
      initiative: {
        base: 2,
        potential: 2
      },
      defense: {
        base: 6,
        potential: 6
      },
      movement: {
        base: 4,
        potential: 5
      }
    },
    roles: [Role.SNIPER, Role.DAMAGER, Role.TOKENS, Role.TACTICIAN, Role.PUSHER],
    link: "",
    themeColor: "#dd0b0b"
  },
  {
    name: HeroName.TAKAHIDE,
    complexity: 4,
    stats: {
      attack: {
        base: 5,
        potential: 7
      },
      initiative: {
        base: 3,
        potential: 5
      },
      defense: {
        base: 4,
        potential: 7
      },
      movement: {
        base: 1,
        potential: 4
      }
    },
    roles: [Role.DURABLE, Role.SNIPER, Role.TACTICIAN, Role.DAMAGER, Role.FARMING],
    link: "",
    themeColor: "#b1320c"
  },
  {
    name: HeroName.EMMITT,
    complexity: 4,
    stats: {
      attack: {
        base: 5,
        potential: 8
      },
      initiative: {
        base: 1,
        potential: 1
      },
      defense: {
        base: 6,
        potential: 6
      },
      movement: {
        base: 2,
        potential: 4
      }
    },
    roles: [Role.MELEE, Role.TACTICIAN, Role.DURABLE, Role.DISABLER, Role.TOKENS],
    link: "",
    themeColor: "#855234"
  }
] as Hero[]
