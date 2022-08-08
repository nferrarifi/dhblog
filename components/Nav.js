import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";

import PostModal from "./PostModal";
const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box w="100%" borderBottom="1px">
        <Flex
          as="nav"
          align="center"
          justifyContent="space-between"
          maxW="900"
          m="auto"
          p={8}
        >
          <Link href="/">
            <Box
              as="button"
              bg="black"
              color="white"
              w="120px"
              borderRadius="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              h="50px"
              fontSize="2xl"
            >
              DH Blog
            </Box>
          </Link>
          <Box
            as="button"
            bg="white"
            color="teal.500"
            w="120px"
            border="1px solid"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="50px"
            fontSize="2xl"
            _hover={{
              color: "white",
              bg: "teal.500",
            }}
            transition="all 0.2s"
            onClick={onOpen}
          >
            Crear Post
          </Box>
        </Flex>
        <PostModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
};

export default Nav;
