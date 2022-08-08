import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Post from "../components/Post";
import config from "../config";
/* import { getPost } from "../repo/post";
 */ import { useQuery } from "@tanstack/react-query";
const fetchPosts = async () =>
  fetch(`${config.baseURL}/api/posts`).then((data) => data.json());

export default function Home(/* { posts } */) {
  const { data, isError, isLoading, isSuccess } = useQuery(
    ["posts"],
    fetchPosts
  );
  console.log(data);
  return (
    <div>
      <Head>
        <title>Nahuel's Portfolio Board</title>
        <meta
          name="description"
          content="Created using nextjs, prisma, chakraUI and mongodb"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="#f5f5f5" w="100%" minH="100vh" p={4} color="black">
        <Flex
          as="main"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {isSuccess &&
            data.map((post) => (
              <Post key={post.id} title={post.title} postid={post.id} />
            ))}
        </Flex>
      </Box>
    </div>
  );
}

/* export async function getStaticProps(context) {
  const posts = await getPost();
  return {
    props: { posts }, // will be passed to the page component as props
  };
} */
