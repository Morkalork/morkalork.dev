import { Box, Typography } from "@mui/material";

export const WritingHeader = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Writing
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        My short stories and creative writing
      </Typography>
    </Box>
  );
};
