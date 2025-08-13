import { useEffect, useState } from "react";
import Parser from "rss-parser";

type Props = {
  handle: string;
};

export const useMediumHook = ({ handle }: Props) => {
  const [posts, setPosts] = useState<Record<string, string>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/medium?handle=${handle}`);
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingPosts();
  }, [handle]);

  return { posts, isLoading };
};
