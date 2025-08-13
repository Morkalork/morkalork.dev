"use client";

import { Box, Container, styled } from "@mui/material";
import Image from "next/image";

const FlexWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > div {
    flex: 1;
  }
`;

const SecondBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RelativeSizeImage = styled(Image)`
  width: 30vw;
  height: auto;
`;

export default function Home() {
  return (
    <Container>
      <FlexWrapper display={{ xs: "block", md: "flex" }}>
        <Box>
          <h1>Greetings!</h1>
          <p>
            I am Magnus, writer of code and stories. This page will be updated
            as often as I have time, but if nothing has happened in a while,
            don't worry, I'm still alive.
          </p>
          <p>
            If you, for some reason, want to get in contact with me, please do
            so on either <a href="https://github.com/Morkalork">GitHub</a>,{" "}
            <a href="https://www.linkedin.com/in/magnusferm/">LinkedIn</a>,{" "}
            <a href="https://bsky.app/profile/morkalork.bsky.social">BlueSky</a>{" "}
            or <a href="https://x.com/Maffelu">Twitter</a>. I'm not very active
            on any of them, but I do check them (this last line was proposed by
            GitHub CoPilot, but it felt as though it fitted).
          </p>
          <p>
            If, for whatever reason, it is urgent, you'll find me at Section 8,
            row 7 of Malmö Stadion at any given Malmö FF home game. Feel free to
            contact me there, but be aware that I might be a bit preoccupied
            with chanting.
          </p>
        </Box>
        <SecondBox>
          <RelativeSizeImage
            src="/logo-dark.png"
            alt="logo"
            width={824}
            height={824}
          />
        </SecondBox>
      </FlexWrapper>
    </Container>
  );
}
