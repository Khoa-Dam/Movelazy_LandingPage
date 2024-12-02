"use client";

import { motion } from 'framer-motion';

const TutorialPage = () => {
  return (
    <main className="flex flex-col items-center p-6 bg-gray-900 min-h-screen">
      <motion.h1 
        className="text-5xl font-bold text-center text-white glow" // Thêm lớp glow
        whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
        transition={{ duration: 0.3 }}
      >
        Hướng dẫn sử dụng
      </motion.h1>
      <motion.p 
        className="text-lg text-gray-300 mb-8 text-center mt-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Chào mừng bạn đến với bộ công cụ phát triển Move. Dưới đây là một số hướng dẫn cơ bản để bắt đầu.
      </motion.p>

      <div className="mt-8 w-full max-w-2xl bg-gray-800 p-4 rounded-lg text-white">
        <h2 className="text-2xl font-bold">Bước 1: Cài đặt</h2>
        <p className="mt-2">Để bắt đầu, bạn cần cài đặt các gói cần thiết:</p>
        <pre className="bg-gray-700 p-2 rounded">
          <code>npm install move-sdk</code>
        </pre>

        <h2 className="text-2xl font-bold mt-4">Bước 2: Tạo dự án mới</h2>
        <p className="mt-2">Sử dụng lệnh sau để tạo một dự án mới:</p>
        <pre className="bg-gray-700 p-2 rounded">
          <code>npx create-move-app my-project</code>
        </pre>

        <h2 className="text-2xl font-bold mt-4">Bước 3: Bắt đầu phát triển</h2>
        <p className="mt-2">Chạy lệnh sau để khởi động máy chủ phát triển:</p>
        <pre className="bg-gray-700 p-2 rounded">
          <code>npm start</code>
        </pre>
      </div>
    </main>
  );
};

export default TutorialPage;
