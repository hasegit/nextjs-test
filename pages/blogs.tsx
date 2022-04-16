import Blog from "../components/blog"
import Layout from "../components/layout"
import { getAllPostIds } from "../libs/posts"

const Blogs = ({ posts }) => {
    return (
        <Layout title="Blog">
            <ul className="py-3 px-6">
                {posts && posts.map((post) => <Blog key={post.id} post={post} />)}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const posts = await getAllPostIds()
    return {
        props: { posts },
    }
}

export default Blogs
