"use client";

import { motion } from 'framer-motion';

const BlogPage = () => {
  const posts = [
    {
      title: "Bài viết 1",
      description: "Mô tả ngắn gọn về bài viết 1.",
      date: "01/01/2024",
    },
    {
      title: "Bài viết 2",
      description: "Mô tả ngắn gọn về bài viết 2.",
      date: "02/01/2024",
    },
    {
      title: "Bài viết 3",
      description: "Mô tả ngắn gọn về bài viết 3.",
      date: "03/01/2024",
    },
  ];

  return (
    <main className="flex flex-col items-center p-6 bg-gray-900 min-h-screen">
      <motion.h1 
        className="text-5xl font-bold text-center text-white glow" // Thêm lớp glow
        whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
        transition={{ duration: 0.3 }}
      >
        Blog
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-300 mb-8 text-center mt-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Chào mừng bạn đến với blog của chúng tôi. Dưới đây là những bài viết mới nhất.
      </motion.p>

      <div className="mt-8 w-full max-w-2xl bg-gray-800 p-4 rounded-lg text-white">
        {posts.map((post, index) => (
          <div key={index} className="mb-4 p-4 border-b border-gray-700">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-400">{post.date}</p>
            <p className="mt-2">{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogPage; 