/* import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); */

import { prisma } from "../prisma/client";

export async function getAllPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export async function createPost(postData) {
  const post = await prisma.post.create({
    data: {
      ...postData,
    },
  });
  return post;
}

export async function getSpecificPost(id) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return post;
}
