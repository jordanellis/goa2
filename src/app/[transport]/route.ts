import { GAMES } from "@/data/games";
import { PLAYERS } from "@/data/players";
import { HeroName } from "@/types/hero";
import { getPlayerWinrate, getTopPlayerForHero } from "@/util/match-parser";
import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "getAllGameData",
      "Get the raw json game data for all matches. This could be used to figure out various different stats.",
      {},
      () => {
        return {
          content: [{ type: "text", text: JSON.stringify(GAMES) }],
        };
      }
    );
    server.tool(
      "bestOverallPlayer",
      "Find who the best overall player is in GoA2",
      {},
      () => {
        let topRate = -1;
        let topPlayers: string[] = [];
        PLAYERS.forEach((p) => {
          const { wins, games } = getPlayerWinrate(p.name);
          const rate = wins / games;

          if (rate === topRate) topPlayers.push(p.name);
          if (rate > topRate) {
            topPlayers = [p.name];
            topRate = rate;
          }
        });

        return {
          content: [
            {
              type: "text",
              text: `With a winrate of ${(topRate * 100).toFixed(
                2
              )}%, ${topPlayers.join(" and ")} ${
                topPlayers.length > 1 ? "are" : "is"
              } currently the top player${
                topPlayers.length > 1 && "s"
              } in GoA2`,
            },
          ],
        };
      }
    );
    server.tool(
      "topPlayerAtAHero",
      "Find who the best player is with a specific hero in GoA2",
      {
        heroName: z
          .enum(Object.values(HeroName))
          .describe(
            "This is the name of the hero. Hero names include: " +
              Object.values(HeroName).join(", ")
          ),
      },
      ({ heroName }) => {
        const { topPlayers, topRate } = getTopPlayerForHero(heroName);

        if (topPlayers.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: `No games found for hero ${heroName}.`,
              },
            ],
          };
        }
        return {
          content: [
            {
              type: "text",
              text: `With a winrate of ${(topRate * 100).toFixed(
                2
              )}%, ${topPlayers.join(" and ")} ${
                topPlayers.length > 1 ? "are" : "is"
              } currently the top player${
                topPlayers.length > 1 ? "s" : ""
              } with ${heroName}`,
            },
          ],
        };
      }
    );
  },
  {
    capabilities: {
      tools: {
        bestOverallPlayer: {
          description: "Find who the best overall player is in GoA2",
        },
        topPlayerAtAHero: {
          description: "Find who the best player is with a specific hero",
        },
        getAllGameData: {
          description:
            "Get the raw game data for all matches. This could be used to figure out various different stats.",
        },
      },
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    sseEndpoint: "/sse",
    streamableHttpEndpoint: "/mcp",
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST, handler as DELETE };
