import { getImageFromArticle } from "./get-image-from-article";
import { describe, expect, it } from "vitest";

type EachProps = {
  articleDescription: string;
  expectedFind: string;
};

describe("getImageFromArticle", () => {
  it.each`
    articleDescription | expectedFind
    ${"<img src='image.png' />"} | ${"image.png"}
    ${"test <img src='image.png' />"} | ${"image.png"}
    ${"<img src='image.png' /> test"} | ${"image.png"}
    ${"test <img src='image.png /> test"} | ${null}
  `(
    "should return an image from an article",
    ({articleDescription, expectedFind}) => {
      expect(getImageFromArticle(articleDescription)).toBe(expectedFind);
    }
  );
});
