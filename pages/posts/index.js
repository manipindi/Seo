import Head from "next/head";
import SEO from "../../components/SEO";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { WithHeaderLayout } from "../../components/Layout";
import { usePhotos } from "../../domain/photos";
import SeoHead from "../../components/SeoHead";
import { useRouter } from "next/router";

const Posts = () => {
  const { photos, isLoading, isError } = usePhotos();
  const router = useRouter();

  return (
    <WithHeaderLayout heading={"Posts"} subtitle={"Discover More Photos"}>
      <SeoHead
        title={`Photos: ${photos?.length}`}
        description={"A perfect place to explore the posts"}
        image={
          "https://mms.businesswire.com/media/20190731005310/en/735774/4/Post-it-Brand_Logo_CMYK_webready.jpg"
        }
        name={"Posts Page"}
        type="posts"
      />
      {!!photos?.length &&
        photos.slice(0, 100).map((post, idx) => (
          <div key={idx}>
            <img src={post.thumbnailUrl} alt="" />
            <p
              onClick={() => {
                router.push(`posts/${post.id}`);
              }}
            >
              {post.title}
            </p>
          </div>
        ))}
    </WithHeaderLayout>
  );
};

export default Posts;
