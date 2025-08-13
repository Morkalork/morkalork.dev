"use client";

import { Container } from "@mui/material";
import { useMediumHook } from "../components/hooks/use-medium-hook";
import { useStoryFilter } from "../components/hooks/use-story-filter";
import { WritingHeader } from "../components/writing-header/writing-header";
import { LoadingState } from "../components/loading-state/loading-state";
import { EmptyState } from "../components/empty-state/empty-state";
import { StoriesGrid } from "../components/stories-grid/stories-grid";
import { formatDate, extractImageFromContent } from "../utils/story-utils";

export default function Writing() {
  const { posts, isLoading } = useMediumHook({ handle: "maffelu" });
  const shortStories = useStoryFilter({ posts });

  if (isLoading) {
    return (
      <Container>
        <WritingHeader />
        <LoadingState />
      </Container>
    );
  }

  if (posts.length === 0) {
    return (
      <Container>
        <WritingHeader />
        <EmptyState message="No posts found or there was an error fetching from Medium." />
      </Container>
    );
  }

  if (shortStories.length === 0) {
    return (
      <Container>
        <WritingHeader />
        <EmptyState message="No short stories found. Check back soon for new content!" />
      </Container>
    );
  }

  return (
    <Container>
      <WritingHeader />
      <StoriesGrid
        shortStories={shortStories}
        extractImageFromContent={extractImageFromContent}
        formatDate={formatDate}
      />
    </Container>
  );
}