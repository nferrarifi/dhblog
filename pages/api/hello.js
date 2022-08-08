// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const movies = await (await fetch("http://localhost:3001/api/movies")).json();
  console.log(movies);
  res.status(200).json(movies);
}
