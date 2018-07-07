const resizeImage = async imageUrl => {
  try {
    const { url, height, width } = await probe(imageUrl);
    const image = { url, height, width };
    return props => <Image {...props} {...image} />;
  } catch (error) {
    throw error;
  }
};

export default resizeImage;
