"use client";

import { Container } from "@mui/material";
import { useMediumHook } from "../components/hooks/use-medium-hook";
import { useStoryFilter } from "../components/hooks/use-story-filter";
import { WritingHeader } from "../components/writing-header/writing-header";
import { LoadingState } from "../components/loading-state/loading-state";
import { EmptyState } from "../components/empty-state/empty-state";
import { LazyStoriesGrid } from "../components/lazy-wrapper/lazy-wrapper";
import { formatDate, extractImageFromContent } from "../utils/story-utils";

export default function Writing() {
  const { posts, isLoading } = useMediumHook({ handle: "maffelu" });
  const shortStories = useStoryFilter({ posts });

  const renderContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }

    if (posts.length === 0) {
      return (
        <EmptyState message="No posts found or there was an error fetching from Medium." />
      );
    }

    if (shortStories.length === 0) {
      return (
        <EmptyState message="No short stories found. Check back soon for new content!" />
      );
    }

    return (
      <LazyStoriesGrid
        shortStories={shortStories}
        extractImageFromContent={extractImageFromContent}
        formatDate={formatDate}
      />
    );
  };

  return (
    <Container>
      <WritingHeader />
      {renderContent()}
    </Container>
  );
}
