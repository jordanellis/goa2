import { HeroName } from "./hero"

export enum WinType {
  TIMER = "timer",
  THRONE = "throne",
  LIFE = "life"
}

export type Game = {
  date: Date,
  winningTeam: HeroName[],
  losingTeam: HeroName[],
  winType: WinType
}