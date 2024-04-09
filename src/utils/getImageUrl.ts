export const getImageURL = (name: string) => {
  return new URL(`../assets/Blog/${name}`, import.meta.url).href;
};
