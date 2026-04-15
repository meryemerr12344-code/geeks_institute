import posts from "../data/posts.json";
function PostList() {

    return (
        <div className="post-list text-center">
            <h1>Hi this is a title</h1>
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>

                </div>
            ))}
        </div>
    );
}
export default PostList