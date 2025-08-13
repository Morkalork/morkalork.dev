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
  if (now - lastCheck < 1000 * 60 * 5) { // Cache for 5 minutes instead of 1
    return NextResponse.json({ posts: feed.items });
  }

  lastCheck = now;
  const handle = request.nextUrl.searchParams.get("handle");
  try {
    // Try different Medium RSS feed formats
    const feedUrls = [
      `https://medium.com/feed/${handle}`,
      `https://medium.com/@${handle}/feed`,
      `https://medium.com/@${handle}/latest`
    ];
    
    let success = false;
    for (const url of feedUrls) {
      try {
        console.log(`Trying Medium feed URL: ${url}`);
        feed = await parser.parseURL(url);
        success = true;
        console.log(`Successfully fetched feed from: ${url}`);
        break;
      } catch (urlError) {
        console.log(`Failed to fetch from ${url}:`, urlError);
        continue;
      }
    }
    
    if (!success) {
      throw new Error('All Medium feed URLs failed');
    }
    
    return NextResponse.json({ posts: feed.items });
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
