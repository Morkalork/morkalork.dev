import { Box, keyframes } from "@mui/material";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

export const LoadingSpinner = ({ size = 24, color = "#1976d2" }: LoadingSpinnerProps) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        border: `2px solid ${color}20`,
        borderTop: `2px solid ${color}`,
        borderRadius: '50%',
        animation: `${spin} 1s linear infinite`,
        display: 'inline-block',
        marginLeft: 1
      }}
    />
  );
};
