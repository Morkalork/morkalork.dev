import { useEffect } from "react";
import { useMediumStore } from "../../store/medium-store";

type Props = {
  handle: string;
};

export const useMediumHook = ({ handle }: Props) => {
  const { posts, isLoading, lastFetched, setPosts, setLoading, setLastFetched, isCacheValid } = useMediumStore();

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("useMediumHook - Starting fetch for handle:", handle);
      console.log("useMediumHook - Current posts count:", posts.length);
      console.log("useMediumHook - Cache valid:", isCacheValid());
      
      // Check if we have valid cached data
      if (isCacheValid() && posts.length > 0) {
        console.log("useMediumHook - Using cached data");
        return; // Use cached data
      }

      console.log("useMediumHook - Fetching new data");
      setLoading(true);
      try {
        const response = await fetch(`/api/medium?handle=${handle}`);
        const data = await response.json();
        console.log("useMediumHook - Fetched data:", data.posts?.length || 0, "posts");
        setPosts(data.posts);
        setLastFetched(Date.now());
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [handle, posts.length, isLoading, lastFetched, setPosts, setLoading, setLastFetched, isCacheValid]);

  return { posts, isLoading };
};
