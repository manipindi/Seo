import Head from "next/head";
import SeoHead from "../../components/SeoHead";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { WithHeaderLayout } from "../../components/Layout";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPosts(json.slice(0, 100)));
  }, []);

  return (
    <WithHeaderLayout heading={"Posts Copy"} subtitle={"Discover More Photos"}>
      <SeoHead
        title={`Posts Copy`}
        description={"A perfect place to explore the posts copy place"}
        image={
          "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg"
        }
        name={"Posts Page"}
        type="posts"
      />
      {!!posts.length &&
        posts.map((post, idx) => (
          <div key={idx}>
            <img src={post.thumbnailUrl} alt="" />
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
    </WithHeaderLayout>
  );
};

export default Posts;
