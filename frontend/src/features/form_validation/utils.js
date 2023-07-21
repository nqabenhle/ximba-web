export const hasLowerCase = (str) => {
  return str.toUpperCase() !== str;
};

export const hasNumber = (str) => {
  const regex = /\d/g;
  return regex.test(str);
};

export const hasSymbol = (str) => {
  return str.match(/[|\\/~^:,;?!&%$#@*+]/) !== null;
};

export const hasUpperCase = (str) => {
  return str.toLowerCase() !== str;
};