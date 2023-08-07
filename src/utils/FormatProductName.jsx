function formatProductName(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function formatBack(name) {
  const words = name.split("-");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  return formattedWords.join(" ");
}

export { formatProductName, formatBack };
