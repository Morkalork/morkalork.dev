import { Typography } from "@mui/material";

interface EmptyStateProps {
  message: string;
}

export const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <Typography variant="body1" color="text.secondary">
      {message}
    </Typography>
  );
};
