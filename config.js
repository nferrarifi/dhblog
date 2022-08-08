const config = {
  baseURL: process.env.NEXT_PUBLIC_VERCEL_URL
    ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000",
};
export default config;
