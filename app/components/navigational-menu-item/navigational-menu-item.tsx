import { Button, styled } from "@mui/material";
import Link from "next/link";

type Props = {
  url: string;
  label: string;
  onClick: () => void;
  isSelected?: boolean;
};

const StyledButton = styled(Button)`
  margin: 0 1rem;
  display: block;
`;

const StyledLink = styled(Link)<{ isSelected?: boolean }>`
  color: white;
  text-decoration: none;

  ${(props) => props.theme.breakpoints.down("md")} {
    color: black;
  }

  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
`;

export const NavigationalMenuItem = ({
  url,
  label,
  onClick,
  isSelected,
}: Props) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledLink href={url} isSelected={isSelected}>
        {label}
      </StyledLink>
    </StyledButton>
  );
};
