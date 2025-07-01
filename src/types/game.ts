import { HeroName } from "./hero"
import { PlayerName } from "./players";

export enum WinType {
  TIMER = "Last Push",
  THRONE = "Claiming Throne",
  LIFE = "Heroes Eliminated"
}

export type GamePlayer = {
  name: PlayerName;
  heroName: HeroName;
  win: boolean;
}

export type Game = {
  id: number
  date: string,
  players: GamePlayer[],
  winType: WinType,
  waves: number,
  type: "short" | "long"
}