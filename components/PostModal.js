import React, { useState, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const createPost = async (postData) => {
  return fetch(`http://localhost:3000/api/posts`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const PostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();
  const createPostMutation = useMutation(createPost, {
    onSuccess: () => {
      onClose();
      queryClient.invalidateQueries(["posts"]);
      toast({
        title: "Post creado con éxito",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "bottom-right",
      });
    },
  });
  const handlerCreatePost = () => {
    createPostMutation.mutate({ title, content });
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear un post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Titulo</FormLabel>
              <Input onBlur={(e) => setTitle(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contenido</FormLabel>
              <Textarea onBlur={(e) => setContent(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlerCreatePost}>
              Save
            </Button>
            {<Button onClick={onClose}>Cancel</Button>}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostModal;
