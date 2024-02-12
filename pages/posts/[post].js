import Head from "next/head";
import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import React from "react";
import SeoHead from "../../components/SeoHead";

const Post = ({ postData }) => {
console.log(postData, "postData");
  return (
    <div>
      <SeoHead
        title={`Post: ${postData?.title}`}
        description={"A perfect place to explore the posts"}
        image={postData?.thumbnailUrl}
        name={postData?.title}
        type="post"
      />
      {!!Object.keys(postData)?.length && (
        <div>
          <img src={postData.thumbnailUrl} alt="" />
          <p>{postData.title}</p>
        </div>
      )}
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = params?.post;
  console.log(post, "post");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${post}`
  );
  const postResponseData = await response.json();

  return {
    props: {
      postData: postResponseData,
    },
  };
};
