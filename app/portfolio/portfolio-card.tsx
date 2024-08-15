import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  styled,
} from "@mui/material";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  url: string;
  imageUrl?: string | null;
  linkLabel?: string;
};

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const StyledCardContent = styled(CardContent)`
  flex: 1 0 auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.main};
`

export const PortfolioCard = ({
  title,
  description,
  url,
  imageUrl,
  linkLabel,
}: Props) => {
  return (
    <StyledCard
      key={title}
      sx={{
        maxWidth: "300px",
        marginRight: "1rem",
        marginBottom: "1rem",
      }}
    >
      <StyledCardContent>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </StyledCardContent>
      {imageUrl && (
        <CardMedia component="img" height="140" image={imageUrl} alt={title} />
      )}
      {url && (
        <CardActions>
          <Button size="small">
            <StyledLink href={url}>{linkLabel || "more"}</StyledLink>
          </Button>
        </CardActions>
      )}
    </StyledCard>
  );
};
