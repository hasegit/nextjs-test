import Link from "next/link";

const Blog = ({ post }) => {
  return (
    <li className="p-1">
      <Link href={`/posts/${post.id}`}>
        <span className="p-1 hover:bg-blue-200 rounded cursor-pointer">
          {post.name}
        </span>
      </Link>
    </li>
  );
};

export default Blog;
