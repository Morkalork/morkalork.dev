export const getImageFromArticle = (articleDescription: string) => {
  if (!articleDescription || !articleDescription.includes("<img")) {
    return null;
  }

  const findings = articleDescription.match(/<img[^>]+src=["']([^">]+)["']/);
  if (!findings || !findings[1]) {
    return null;
  }

  return findings[1] || null;
};
