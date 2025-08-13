import { Box, Card, CardContent, CardActions, Button, Typography, Chip } from "@mui/material";

interface StoryCardProps {
  post: {
    title: string;
    link: string;
    pubDate?: string;
    categories?: string[];
    contentSnippet?: string;
    "content:encoded"?: string;
  };
  extractImageFromContent: (content: string) => string | null;
  formatDate: (dateString: string) => string;
}

export const StoryCard = ({ post, extractImageFromContent, formatDate }: StoryCardProps) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {post["content:encoded"] && extractImageFromContent(post["content:encoded"]) && (
        <Box sx={{ 
          width: '100%', 
          aspectRatio: '1.5 / 1',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <img
            src={extractImageFromContent(post["content:encoded"]) || ""}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {post.title}
        </Typography>
        {post.pubDate && (
          <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
            Published: {formatDate(post.pubDate)}
          </Typography>
        )}
        {post.categories && post.categories.length > 0 && (
          <Box sx={{ mb: 2 }}>
            {post.categories.map((category: string, catIndex: number) => (
              <Chip 
                key={catIndex} 
                label={category} 
                size="small" 
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        )}
        {post.contentSnippet && (
          <Typography variant="body2" color="text.secondary">
            {post.contentSnippet.substring(0, 150)}...
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          href={post.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Read on Medium
        </Button>
      </CardActions>
    </Card>
  );
};
