import { Grid } from "@mui/material";
import { StoryCard } from "../story-card/story-card";

interface StoriesGridProps {
  shortStories: any[];
  extractImageFromContent: (content: string) => string | null;
  formatDate: (dateString: string) => string;
}

export const StoriesGrid = ({ shortStories, extractImageFromContent, formatDate }: StoriesGridProps) => {
  return (
    <Grid container spacing={3}>
      {shortStories.map((post, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <StoryCard
            post={post}
            extractImageFromContent={extractImageFromContent}
            formatDate={formatDate}
          />
        </Grid>
      ))}
    </Grid>
  );
};
