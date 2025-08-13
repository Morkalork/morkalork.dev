import { useState, useEffect } from "react";

interface UseStoryFilterProps {
  posts: any[];
}

export const useStoryFilter = ({ posts }: UseStoryFilterProps) => {
  const [shortStories, setShortStories] = useState<any[]>([]);

  useEffect(() => {
    const filtered = posts.filter((post: any) => {
      const categories = post.categories || [];
      const shortStoryCategory = "short-story";
      return categories.some((cat: string) => 
        cat.toLowerCase().includes(shortStoryCategory)
      );
    });
    
    setShortStories(filtered);
  }, [posts]);

  return shortStories;
};
