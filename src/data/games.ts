import { Game, WinType } from "@/types/game";
import { HeroName } from "@/types/hero";

export const GAMES = [
  {
    date: new Date("2025-05-12"),
    winningTeam: [HeroName.XARGATHA, HeroName.WASP],
    losingTeam: [HeroName.BROGAN, HeroName.ARIEN],
    winType: WinType.TIMER
  }
] as Game[]
