import Head from "next/head";
import SEO from "../../components/SEO";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { WithHeaderLayout } from "../../components/Layout";
import SeoHead from "../../components/SeoHead";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setPosts(json.slice(0, 100)));
  }, []);

  return (
    <WithHeaderLayout heading={"Posts"} subtitle={"Discover More Photos"}>
      {/* <SeoHead
        title={`Posts Place`}
        description={"A perfect place to explore the posts"}
        image={
          "https://mms.businesswire.com/media/20190731005310/en/735774/4/Post-it-Brand_Logo_CMYK_webready.jpg"
        }
        name={"Posts Page"}
        type="posts"
      /> */}
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
