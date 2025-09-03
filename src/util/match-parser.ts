import { GAMES } from "@/data/games";
import { HeroName } from "@/types/hero";
import { PlayerName } from "@/types/players";

export function getPlayerWinrate(playerName: PlayerName) {
  let wins = 0;
  let games = 0;

  for (let i = 0; i < GAMES.length; i++) {
    const player = GAMES[i].players.find(({ name }) => playerName === name);

    if (!player) continue;

    games++;

    if (player.win) wins++;
  }

  return { wins, games };
}

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
