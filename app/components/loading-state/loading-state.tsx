import { Box, Typography } from "@mui/material";
import { LoadingSpinner } from "../loading-spinner/loading-spinner";

export const LoadingState = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
      <Typography variant="body1" color="text.secondary">
        Loading stories from Medium...
      </Typography>
      <LoadingSpinner size={20} />
    </Box>
  );
};
