"use client";

import { Box, Container } from "@mui/material";
import { useMediumHook } from "../components/hooks/use-medium-hook";
import { PortfolioCard } from "./portfolio-card";
import { getImageFromArticle } from "../utils/get-image-from-article";
import { LoadingState } from "../components/loading-state/loading-state";
const npmModules = [
  {
    title: "babel-plugin-react-component-auto-labeler",
    url: "https://www.npmjs.com/package/babel-plugin-react-component-auto-labeler",
    description:
      "A babel plugin that automatically labels react components with their name.",
  },
  {
    title: "vite-plugin-use-hook-mock",
    url: "https://www.npmjs.com/package/vite-plugin-use-hook-mock",
    description:
      "Vite plugin to auto-swap use- hook imports with .mock siblings when they exist.",
  },
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
  const { posts: mediumPosts, isLoading } = useMediumHook({
    handle: "maffelu", // Remove @ symbol to match Writing page
  });

  // Debug logging
  console.log("Portfolio - Medium posts:", mediumPosts);
  console.log("Portfolio - Loading state:", isLoading);

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
          src="/images/add-js-test-demo.gif"
          alt="Add JS Test demo"
          width="100%"
          height="auto"
        />
      </Box>
      <Box>
        <h2>Webstorm (JetBrains) plugins:</h2>
        <h5>
          <a href="https://plugins.jetbrains.com/plugin/27327-ts-test-toolbox">
            TS Test Toolbox
          </a>
        </h5>
        <p>
          A plugin that allows for you to add tests and storybook stories for a
          react component.
        </p>
        <img
          src="/images/ts-test-toolbox.gif"
          alt="ts-test-toolbox demo"
          width="100%"
          height="auto"
        />
      </Box>
      <Box>
        <h2>Node Modules</h2>
        <Box 
          display={{ xs: "block", md: "flex" }}
          sx={{ 
            flexWrap: "wrap",
            "& > *": {
              minWidth: "25rem",
              flex: "1 1 auto"
            }
          }}
        >
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
            <LoadingState />
          ) : (
            <Box
              display={{ xs: "block", md: "flex" }}
              sx={{
                flexWrap: "wrap",
                "& > *": {
                  minWidth: "25rem",
                  flex: "1 1 auto",
                },
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
                    imageUrl={getImageFromArticle(
                      post["content:encoded"] || ""
                    )}
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
