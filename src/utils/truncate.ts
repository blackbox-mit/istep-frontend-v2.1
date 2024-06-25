export const truncate = (teaser: string, maxLength: number): string => {
  if (teaser.length <= maxLength) {
    return teaser;
  }
  const truncated = teaser.substring(0, maxLength);
  return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
};
