import { Player, PlayerName } from "@/types/players";

export const PLAYERS = [
  {
    name: PlayerName.CHRIS,
    birthplace: "TBD",
    tidbit:
      "Chris is the keeper of the zoo with 3 kids, 4 dogs, 1 cat, and about as many fish as Dustin has takebacks. His mullet is so majestic that it gets its own seat at the table. When you sit down to learn a game from him, you know the first three rounds are basically the tutorial.",
  },
  {
    name: PlayerName.DUSTIN,
    birthplace: "TBD",
    tidbit:
      "Dustin has never met a rule he couldn't misinterpret. When it finally comes time to move on to the next player's turn, you can guarantee he'll use the move he injects into every board game - undo. In between turns, he loves explaining ChatGPT to people who didn't ask.",
  },
  {
    name: PlayerName.JORDAN,
    birthplace: "Parkersburg, WV",
    tidbit:
      "Jordan is the de facto \"Rules Educationist\". You can expect him to cleave right through a rulebook and explain it to the finest detail. When he isn't reading rules or trading away games, he loves to touch wood. Makes no difference if he's sanding wood, staining wood, or just rubbing wood. It all makes him happy.",
  },
  {
    name: PlayerName.NICK,
    birthplace: "TBD",
    tidbit:
      'Nick loves the idea of game night. As the mythical "fifth player" of game night, when graced with his presence, it\'s like the true return of the king. We also hear legend of his kickstarter pledge. Rumor has it that every time Dustin redoes a turn, the delivery date gets pushed back - we may never get to play it.',
  },
] as Player[];
