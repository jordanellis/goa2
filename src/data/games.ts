import { Game, WinType } from "@/types/game";
import { HeroName } from "@/types/hero";
import { PlayerName } from "@/types/players";

export const GAMES = [
  {
    id: 1,
    date: "05/12/25",
    players: [
      {name: PlayerName.NICK, heroName: HeroName.XARGATHA, win: true},
      {name: PlayerName.JORDAN, heroName: HeroName.WASP, win: true},
      {name: PlayerName.DUSTIN, heroName: HeroName.BROGAN, win: false},
      {name: PlayerName.CHRIS, heroName: HeroName.ARIEN, win: false}
    ],
    winType: WinType.TIMER,
    waves: 3,
    type: "short"
  },
  {
    id: 2,
    date: "06/25/25",
    players: [
      {name: PlayerName.NICK, heroName: HeroName.SABINA, win: true},
      {name: PlayerName.JORDAN, heroName: HeroName.WASP, win: false},
      {name: PlayerName.DUSTIN, heroName: HeroName.TIGERCLAW, win: true},
      {name: PlayerName.CHRIS, heroName: HeroName.DODGER, win: false}
    ],
    winType: WinType.LIFE,
    waves: 2,
    type: "long"
  },
  {
    id: 3,
    date: "06/25/25",
    players: [
      {name: PlayerName.NICK, heroName: HeroName.BROGAN, win: false},
      {name: PlayerName.JORDAN, heroName: HeroName.WASP, win: true},
      {name: PlayerName.DUSTIN, heroName: HeroName.XARGATHA, win: false},
      {name: PlayerName.CHRIS, heroName: HeroName.ARIEN, win: true}
    ],
    winType: WinType.LIFE,
    waves: 1,
    type: "short"
  },
  {
    id: 4,
    date: "06/30/25",
    players: [
      {name: PlayerName.NICK, heroName: HeroName.XARGATHA, win: false},
      {name: PlayerName.JORDAN, heroName: HeroName.DODGER, win: true},
      {name: PlayerName.DUSTIN, heroName: HeroName.TIGERCLAW, win: true},
      {name: PlayerName.CHRIS, heroName: HeroName.ARIEN, win: false}
    ],
    winType: WinType.LIFE,
    waves: 4,
    type: "long"
  },
  {
    id: 5,
    date: "06/30/25",
    players: [
      {name: PlayerName.NICK, heroName: HeroName.ARIEN, win: true},
      {name: PlayerName.JORDAN, heroName: HeroName.BROGAN, win: false},
      {name: PlayerName.DUSTIN, heroName: HeroName.WASP, win: false},
      {name: PlayerName.CHRIS, heroName: HeroName.SABINA, win: true}
    ],
    winType: WinType.LIFE,
    waves: 1,
    type: "short"
  },
] as Game[]
