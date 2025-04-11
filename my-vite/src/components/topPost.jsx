import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";

const topPost = ({ type }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(type).then(data => setPosts(data));
  }, [type]);

  return (
    <div>
      <h2>{type === "popular" ? "Popular Posts" : "Latest Posts"}</h2>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>{post.title} - {post.commentCount} comments</li>
        ))}
      </ul>
    </div>
  );
};

export default TopPosts;
