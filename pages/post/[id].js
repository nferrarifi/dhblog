import React from "react";
import { getAllPosts, getSpecificPost } from "../../repo/post";
import PostDetail from "../../components/PostDetail";

const id = ({ post }) => {
  return (
    <>
      <PostDetail key={post.id} title={post.title} content={post.content} />
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  console.log(posts);
  return {
    paths: posts.map((post) => {
      return { params: { id: post.id } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getSpecificPost(context.params.id);
  return {
    props: { post }, // will be passed to the page component as props
  };
}

export default id;
