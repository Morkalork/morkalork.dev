import { useEffect } from "react";
import { useMediumStore } from "../../store/medium-store";

type Props = {
  handle: string;
};

export const useMediumHook = ({ handle }: Props) => {
  const {
    posts,
    isLoading,
    lastFetched,
    setPosts,
    setLoading,
    setLastFetched,
    isCacheValid,
  } = useMediumStore();

  useEffect(() => {
    const fetchPosts = async () => {
      // Check if we have valid cached data
      if (isCacheValid() && posts.length > 0) {
        return; // Use cached data
      }

      setLoading(true);
      try {
        const response = await fetch(`/api/medium?handle=${handle}`);
        const data = await response.json();
        setPosts(data.posts);
        setLastFetched(Date.now());
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [
    handle,
    posts.length,
    isLoading,
    lastFetched,
    setPosts,
    setLoading,
    setLastFetched,
    isCacheValid,
  ]);

  return { posts, isLoading };
};
