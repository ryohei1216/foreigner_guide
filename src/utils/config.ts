export const getDomain = () => {
  const hostname = document.location.hostname;
  if (hostname === "localhost") {
    return "localhost:8080";
  }
  return hostname;
};

export const getApiDomain = () => {
  const hostname = document.location.hostname;
  if (hostname === "localhost") {
    return "http://localhost:8080";
  } else {
    return "https://sheltered-plains-16427.herokuapp.com";
  }
};
