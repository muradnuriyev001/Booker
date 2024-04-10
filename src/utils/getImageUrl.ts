export const getImageURL = (name: string) => {
  return new URL(`../assets/Blog/${name}`, import.meta.url).href;
};

export const getBooksImageURL = (name: string) => {
  return new URL(`../assets/Shop/Books/${name}`, import.meta.url).href;
};
