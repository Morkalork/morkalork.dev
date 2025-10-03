export const formatDate = (dateString: string): string => {
  if (!dateString) {
    return "";
  }
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

export const extractImageFromContent = (content: string): string | null => {
  if (!content) {
    return null;
  }

  // Extract the first image from the content:encoded field
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }

  return null;
};

export const extractTeaserFromContent = (content?: string): string => {
  if (!content) {
    return "";
  }

  // Remove HTML tags and get clean text
  const cleanText = content
    .replace(/^(\s*<h4[^>]*>.*?<\/h4>\s*)(?=<h4[^>]*>)/i, "")
    .replace(/<[^>]*>/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();

  // Split by sentence endings and get first two sentences
  const sentences = cleanText
    .split(/[.!?]+/)
    .filter((s) => s.trim().length > 0);

  if (sentences.length >= 2) {
    return sentences[0].trim() + ". " + sentences[1].trim() + ".";
  } else if (sentences.length === 1) {
    return sentences[0].trim() + ".";
  }

  return cleanText;
};
