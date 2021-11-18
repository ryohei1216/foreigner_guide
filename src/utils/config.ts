export const getDomain = () => {
  const hostname = document.location.hostname;
  if (hostname === "localhost") {
    return "localhost:8080";
  }
  return hostname;
};
