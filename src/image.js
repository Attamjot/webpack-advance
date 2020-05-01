const makeImage = (url, width = "100", height = "100") => {
  const image = document.createElement("img");
  image.height = height;
  image.width = width;
  image.src = url;
  return image;
};

export default makeImage;
