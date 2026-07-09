
import { TavilySearch } from "@langchain/tavily";

const tool = new TavilySearch({
  maxResults: 2,
  topic: "general",
  // includeAnswer: false,
  // includeRawContent: false,
  // includeImages: false,
  // includeImageDescriptions: false,
  // searchDepth: "basic",
  // timeRange: "day",
  // includeDomains: [],
  // excludeDomains: [],
});

export default tool;