export const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

export const extractImageFromContent = (content: string): string | null => {
  if (!content) return null;
  
  // Extract the first image from the content:encoded field
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch && imgMatch[1]) {
    return imgMatch[1];
  }
  
  return null;
};
