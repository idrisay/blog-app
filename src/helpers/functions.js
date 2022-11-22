export const checkBlogContent = (data) => {
  if (
    data.author_lastname &&
    data.author_name &&
    data.content &&
    data.title &&
    data.image_url
  ) {
    return true;
  } else {
    return false;
  }
};
