import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

const Post = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={post.name}>
      <p className="m-4 text-center">
        {"Name : "}
        {post.name}
      </p>
      <div className="h-52 relative pb-10 object-left">
        <Image
          layout="fill"
          objectFit="contain"
          className="rounded-full"
          src={`https://cdn2.thecatapi.com/images/${post.reference_image_id}.jpg`}
        />
      </div>
      <div className="text-center m-2">
        <Link href="/blogs">
          <a>Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Post;

export async function getPostData(id) {
  const res = await fetch(
    new URL(`https://api.thecatapi.com/v1/breeds/${id}/`)
  );
  const post = await res.json();

  return {
    post,
  };
}

export async function getAllPostIds() {
  const res = await fetch("https://api.thecatapi.com/v1/breeds");
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
