export const searchStore = [
  "Nature",
  "Sexy Girls",
  "Cars",
  "Bikes",
  "Birds",
  "Animals with Nature",
];

export const randomSearch = () => {
  const randomSearch =
    searchStore[Math.floor(Math.random() * searchStore.length)];
  return randomSearch;
};
