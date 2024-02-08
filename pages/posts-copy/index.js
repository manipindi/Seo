import Head from "next/head";
import SeoHead from "../../components/SeoHead";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { WithHeaderLayout } from "../../components/Layout";
import { usePhotos } from "../../domain/photos";

const Posts = () => {
  const { photos, isLoading, isError } = usePhotos();
  return (
    <WithHeaderLayout heading={"Posts Copy"} subtitle={"Discover More Photos"}>
      <SeoHead
        title={`Photos Copy`}
        description={"A perfect place to explore the posts copy place"}
        image={
          "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg"
        }
        name={"Posts Page"}
        type="posts"
      />
      {!!photos?.length &&
        photos.slice(0, 100).map((post, idx) => (
          <div key={idx}>
            <img src={post.thumbnailUrl} alt="" />
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
    </WithHeaderLayout>
  );
};

export default Posts;
