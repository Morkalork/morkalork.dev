"use client";

import { Suspense, lazy, ComponentType } from "react";
import { Box, CircularProgress } from "@mui/material";

interface LazyWrapperProps {
  component: ComponentType<any>;
  fallback?: React.ReactNode;
  props?: any;
}

export const LazyWrapper = ({ 
  component: Component, 
  fallback, 
  props = {} 
}: LazyWrapperProps) => {
  const defaultFallback = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}
    >
      <CircularProgress size={30} />
    </Box>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <Component {...props} />
    </Suspense>
  );
};

// Pre-defined lazy components for common use cases
export const LazyStoriesGrid = lazy(() => 
  import('../stories-grid/stories-grid').then(module => ({ 
    default: module.StoriesGrid 
  }))
);

export const LazyStoryCard = lazy(() => 
  import('../story-card/story-card').then(module => ({ 
    default: module.StoryCard 
  }))
);

