const baseUri = "https://basic-blog.teamrabbil.com/api";

export const getBlogs = async (limit) => {
  try {
    const res = await fetch(`${baseUri}/post-newest`);
    const data = await res.json();

    if (limit && data.length > limit) return data.slice(0, limit);

    return data;
  } catch (err) {
    return err;
  }
};
