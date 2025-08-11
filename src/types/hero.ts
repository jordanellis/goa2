import type { ObjectId } from "mongodb";

export enum Role {
  DAMAGER = "damager",
  DISABLER = "disabler",
  DURABLE = "durable",
  FARMING = "farming",
  HEALER = "healer",
  MELEE = "melee",
  PUSHER = "pusher",
  SNIPER = "sniper",
  TACTICIAN = "tactician",
  TOKENS = "tokens"
}


export enum HeroName {
  ARIEN = "ARIEN",
  XARGATHA = "XARGATHA",
  BROGAN = "BROGAN",
  WASP = "WASP",
  SABINA = "SABINA",
  TIGERCLAW = "TIGERCLAW",
  DODGER = "DODGER",
  WHISPER = "WHISPER",
  MISA = "MISA",
  URSAFAR = "URSAFAR",
  SILVERARROW = "SILVERARROW",
  TALI = "TALI",
  GARRUS = "GARRUS",
  BAIN = "BAIN",
  CUTTER = "CUTTER",
  TRINKETS = "TRINKETS",
  NEBKHER = "NEBKHER",
  BRYNN = "BRYNN",
  MORTIMER = "MORTIMER",
  WIDGET = "WIDGET",
  TAKAHIDE = "TAKAHIDE",
  EMMITT = "EMMITT",
  MIN = "MIN",
  SWIFT = "SWIFT",
  WUK = "WUK",
  HANU = "HANU",
  IGNATIA = "IGNATIA",
  ROWENNA = "ROWENNA",
  MRAK = "MRAK",
  SNORRI = "SNORRI",
  RAZZLE = "RAZZLE",
  GYDION = "GYDION"
}

export type Hero = {
  name: HeroName,
  complexity: number
  stats: {
    attack: {
      base: number,
      potential: number
    },
    initiative: {
      base: number,
      potential: number
    },
    defense: {
      base: number,
      potential: number
    },
    movement: {
      base: number,
      potential: number
    }
  },
  roles: Role[],
  link: string,
  themeColor: string,
}

export type MongoHero = { 
  _id?: ObjectId
} & Hero
