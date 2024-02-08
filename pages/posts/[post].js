import SEO from "../../components/SEO";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Post = () => {
  const router = useRouter();
  const [postData, setData] = useState({});
  useEffect(() => {
    if (router.query?.post) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${router.query.post}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [router.query]);
  return (
    <div>
      <SEO
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
