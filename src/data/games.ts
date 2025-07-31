import { Game, WinType } from "@/types/game";
import { HeroName } from "@/types/hero";
import { PlayerName } from "@/types/players";

export function getGameDataByHero() {
  const record: Record<HeroName, { wins: number; gamesPlayed: number }> = {
    [HeroName.ARIEN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.XARGATHA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.BROGAN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.WASP]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.SABINA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.TIGERCLAW]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.DODGER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.WHISPER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.MISA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.URSAFAR]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.SILVERARROW]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.TALI]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.GARRUS]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.BAIN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.CUTTER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.TRINKETS]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.NEBKHER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.BRYNN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.MORTIMER]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.WIDGET]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.TAKAHIDE]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.EMMITT]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.MIN]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.SWIFT]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.WUK]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.HANU]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.IGNATIA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.ROWENNA]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.MRAK]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.SNORRI]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.RAZZLE]: {
      wins: 0,
      gamesPlayed: 0,
    },
    [HeroName.GYDION]: {
      wins: 0,
      gamesPlayed: 0,
    },
  };

  GAMES.forEach((game) => {
    game.players.forEach((p) => {
      record[p.heroName].gamesPlayed++;
      p.win && record[p.heroName].wins++;
    });
  });

	return record;
}

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
  {
    id: 6,
    date: "07/30/25",
    players: [
      {name: PlayerName.NICK, heroName: HeroName.BROGAN, win: true},
      {name: PlayerName.JORDAN, heroName: HeroName.XARGATHA, win: true},
      {name: PlayerName.DUSTIN, heroName: HeroName.ARIEN, win: false},
      {name: PlayerName.CHRIS, heroName: HeroName.TIGERCLAW, win: false}
    ],
    winType: WinType.LIFE,
    waves: 3,
    type: "long"
  },
] as Game[]
