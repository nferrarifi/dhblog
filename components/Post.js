import React from "react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";
import Link from "next/link";
const Post = ({ title, postid }) => {
  return (
    <>
      <Flex alignItems="center">
        <Box
          w="300px"
          borderWidth="1px"
          borderRadius="0.375rem"
          overflow="hidden"
          marginTop="25px"
          p="20px"
          borderColor="teal.500"
          bg="#efefef"
        >
          <Box>
            <Center>
              <Text fontWeight="bold">{title}</Text>
            </Center>
          </Box>
          <Flex
            w="80%"
            justifyContent="flex-end"
            margin="auto"
            marginTop="10px"
          >
            <Link href={`/post/${postid}`}>
              <Box
                as="button"
                bg="white"
                color="teal"
                w="100%"
                border="1px solid"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="auto"
                fontSize="md"
                _hover={{
                  color: "white",
                  bg: "teal",
                }}
                transition="all 0.3s"
              >
                Link al post
              </Box>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Post;
