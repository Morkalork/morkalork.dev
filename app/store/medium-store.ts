import { create } from 'zustand';

interface MediumPost {
  title: string;
  link: string;
  pubDate?: string;
  categories?: string[];
  contentSnippet?: string;
  "content:encoded"?: string;
  "content:encodedSnippet"?: string;
}

interface MediumStore {
  posts: MediumPost[];
  isLoading: boolean;
  lastFetched: number | null;
  setPosts: (posts: MediumPost[]) => void;
  setLoading: (loading: boolean) => void;
  setLastFetched: (timestamp: number) => void;
  clearCache: () => void;
  isCacheValid: () => boolean;
}

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export const useMediumStore = create<MediumStore>((set, get) => ({
  posts: [],
  isLoading: false,
  lastFetched: null,
  
  setPosts: (posts) => {
    set({ posts });
  },
  setLoading: (loading) => {
    set({ isLoading: loading });
  },
  setLastFetched: (timestamp) => {
    set({ lastFetched: timestamp });
  },
  
  clearCache: () => set({ posts: [], lastFetched: null }),
  
  // Helper method to check if cache is still valid
  isCacheValid: () => {
    const { lastFetched } = get();
    if (!lastFetched) return false;
    const isValid = Date.now() - lastFetched < CACHE_DURATION;
    return isValid;
  }
}));

// Initialize store from localStorage if available
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('medium-store');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      useMediumStore.setState(parsed);
    } catch (error) {
      console.warn('Failed to restore medium store from localStorage:', error);
    }
  }
  
  // Save to localStorage whenever store changes
  useMediumStore.subscribe((state) => {
    localStorage.setItem('medium-store', JSON.stringify({
      posts: state.posts,
      lastFetched: state.lastFetched
    }));
  });
}
