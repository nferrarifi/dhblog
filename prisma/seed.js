import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Post de prueba DOS",
      content: "La prueba fue exitosa (post 2)",
    },
  });
}
main()
  .catch((e) => console.log(e))
  .finally(async () => await prisma.$disconnect);
