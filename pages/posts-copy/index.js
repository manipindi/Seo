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
        description={"A perfect place to explore the posts"}
        image={
          "https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
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
