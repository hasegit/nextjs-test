export async function getAllPostIds() {
  const res = await fetch("https://api.thecatapi.com/v1/breeds");
  const posts = await res.json();
  const maps = posts.map((post) => {
    return {
      id: String(post.id),
      name: String(post.name),
    };
  });
  return maps;
}
