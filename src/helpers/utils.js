export const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

export const sortPerKey = (items, perKey = "id", orderBy = "asc") => {
  return items
    .filter((item) => item[perKey] !== null)
    .sort((a, b) => a[perKey].localeCompare(b[perKey]))
    .sort((a, b) => {
      if (orderBy === "asc") {
        return a[perKey].localeCompare(b[perKey]);
      }
      if (orderBy === "desc") {
        return b[perKey].localeCompare(a[perKey]);
      }
    });
};
