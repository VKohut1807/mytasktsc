export const setItem = (key, data) => {
  try {
    return localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error in getting data from localStorage", error);
    return null;
  }
};

export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error("Error in getting data from localStorage", error);
    return null;
  }
};
