import { PLAYERS } from "@/data/players";
import { getPlayerWinrate } from "@/util/match-parser";
import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";

const handler = createMcpHandler(
  (server) => {
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
    // server.tool(
    //   "rulesLookup",
    //   "Lookup a Guards of Atlantis 2 rules question",
    //   {
    //     question: z.string(),
    //   },
    //   () => ({
    //     content: [
    //       {
    //         type: "text",
    //         text: "This is my response lol",
    //       },
    //     ],
    //   })
    // );
  },
  {
    capabilities: {
      tools: {
        bestOverallPlayer: {
          description: "Find who the best overall player is in GoA2",
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
