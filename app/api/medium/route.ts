import { NextRequest, NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

type Feed = {
  [key: string]: any;
} & Parser.Output<{
  [key: string]: any;
}>;

let feed: Feed = { items: [] };
let lastCheck = 0;

export async function GET(request: NextRequest) {
  const now = Date.now();
  if (now - lastCheck < 1000 * 60 * 1) {
    return NextResponse.json({ posts: feed.items.slice(0, 5) });
  }

  lastCheck = now;
  const handle = request.nextUrl.searchParams.get("handle");
  feed = await parser.parseURL(`https://medium.com/feed/${handle}`);
  const lastFivePosts = feed.items.slice(0, 5);
  return NextResponse.json({ posts: lastFivePosts });
}
