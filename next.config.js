const { BLOG_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      // 添加blog
      {
        source: "/blog",
        destination: `https://blog-psi-pied-75.vercel.app/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `https://blog-psi-pied-75.vercel.app/blog/:path*`,
      },
      // 添加doc
      {
        source: "/doc",
        destination: `https://doc-ten-lilac.vercel.app`,
      },
      {
        source: "/doc/:path*",
        destination: `https://doc-ten-lilac.vercel.app/:path*`,
      },
      // 添加learn
      {
        source: "/learn",
        destination: `https://knowledge-ean7.vercel.app/learn`,
      },
      {
        source: "/learn/:path*",
        destination: `https://knowledge-ean7.vercel.app/learn/:path*`,
      },
      // 添加project
      {
        source: "/project",
        destination: `/project.html`,
      },
    ];
  },
};

module.exports = nextConfig;
