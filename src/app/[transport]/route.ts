import { createMcpHandler } from "@vercel/mcp-adapter";
import z from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "rulesLookup",
      "Lookup a Guards of Atlantis 2 rules question",
      {
        question: z.string(),
      },
      () => ({
        content: [
          {
            type: "text",
            text: "This is my response lol",
          },
        ],
      })
    );
  },
  {
    capabilities: {
      tools: {
        rulesLookup: {
          description: "Lookup a Guards of Atlantis 2 rules question",
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
