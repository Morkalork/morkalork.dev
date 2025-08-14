"use client";

import {
  Box,
  Container,
} from "@mui/material";
import { useMediumHook } from "../components/hooks/use-medium-hook";
import { PortfolioCard } from "./portfolio-card";
import { getImageFromArticle } from "../utils/get-image-from-article";
const npmModules = [
  {
    title: "Transval",
    url: "https://www.npmjs.com/package/transval",
    description:
      "A tool to check translation usage in a project. Given a json file with keys you can use it to search a chunk of files for usage.",
  },
  {
    title: "Interactive tutorial",
    url: "https://www.npmjs.com/package/interactive-tutorial",
    description:
      "A tool to create an interactive tutorial that highlights sections of a web page.",
  },
];

export default function Portfolio() {
  const { posts: mediumPosts, isLoading } = useMediumHook({ handle: "@maffelu" });

  return (
    <Container maxWidth="md">
      <Box>
        <h1>Portfolio</h1>
        <p>
          This is some of the stuff I've been working on. It's not a lot, but it
          is honest work.
        </p>
      </Box>
      <Box>
        <h2>VS Code Extensions</h2>
        <h5>
          <a href="https://marketplace.visualstudio.com/items?itemName=Morkalork.add-js-test">
            Add JS Test
          </a>
        </h5>
        <p>
          An extension that allows for you to add a jest or vitest test file for
          a specific module with scaffolding included:
        </p>
        <img
          src="https://github.com/Morkalork/add-js-test/raw/HEAD/.public/add-js-test-demo.gif"
          alt="Add JS Test demo"
          width="100%"
          height="auto"
        />
      </Box>
      <Box>
        <h2>Node Modules</h2>
        <Box display={{ xs: "block", md: "flex" }}>
          {npmModules.map((module) => (
            <PortfolioCard
              key={module.title}
              title={module.title}
              description={module.description}
              url={module.url}
              linkLabel="View on npmjs.org"
            />
          ))}
        </Box>
        <Box>
          <h2>My most recent medium tech-posts:</h2>
          {isLoading ? (
            <p>Loading posts...</p>
          ) : (
            <Box 
              display={{ xs: "block", md: "flex" }}
              sx={{ 
                flexWrap: 'wrap',
                '& > *': { 
                  minWidth: '25rem',
                  flex: '1 1 auto'
                }
              }}
            >
              {mediumPosts
                .filter((post) => {
                  const categories = post.categories || [];
                  if (Array.isArray(categories)) {
                    return !categories.some((cat: string) => 
                      cat.toLowerCase().includes("short-story")
                    );
                  }
                  return true; // If categories is not an array, include the post
                })
                .map((post) => (
                  <PortfolioCard
                    key={post.title}
                    title={post.title}
                    description={(post["content:encodedSnippet"] || "").slice(
                      0,
                      100
                    )}
                    url={post.link}
                    imageUrl={getImageFromArticle(post["content:encoded"])}
                    linkLabel="Read article"
                  />
                ))}
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
