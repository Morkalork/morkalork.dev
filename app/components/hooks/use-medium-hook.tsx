import { useEffect, useState } from "react";
import Parser from "rss-parser";

type Props = {
  handle: string;
};

export const useMediumHook = ({ handle }: Props) => {
  const [posts, setPosts] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    const fetchingPosts = async () => {
      const response = await fetch(`/api/medium?handle=${handle}`);
      const data = await response.json();
      setPosts(data.posts);
    };

    fetchingPosts();
  }, []);

  return posts;
};
