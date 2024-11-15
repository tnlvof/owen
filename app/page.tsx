"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "@/public/owen.jpg";

export default function AboutPage() {
  return (
    <div className="flex flex-col dark:bg-gray-900 p-4 min-h-[calc(100vh-3.5rem)] min-w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl space-y-6"
      >
        <article className="bg-card rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-md ">
          <div className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
                <AvatarImage
                  src={profile.src}
                  alt="Owen Blog의 프로필 사진"
                  className="object-cover"
                />
                <AvatarFallback>OB</AvatarFallback>
              </Avatar>
              <div className="space-y-3 text-center sm:text-left">
                <h1 className="text-lg font-semibold text-card-foreground">
                  이종수
                </h1>
                <p className="text-sm text-card-foreground">
                  소통을 중요하게 생각하는 소프트웨어 엔지니어입니다.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="bg-card rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-md w-full">
          <div className="p-6 space-y-4">
            <ul className="list-disc list-inside space-y-1 text-sm text-card-foreground">
              <li>인생책은 김주환 교수님의 &apos;내면소통&apos;입니다.</li>
              <li>성공한 삶은 자신이 원하는 삶을 사는 것이라고 생각합니다.</li>
              <li>
                정말 사랑스러운 두 아이의 아빠입니다. 좋은 아빠가 되기 위한
                고민과 노력을 하고 있습니다.
              </li>
            </ul>
          </div>
        </article>

        <article className="bg-card rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-md w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-card-foreground">
              Contact
            </h2>
            <div className="space-y-2">
              <a
                href="mailto:tnlvof@kakao.com"
                className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>tnlvof@kakao.com</span>
              </a>

              <a
                href="https://github.com/tnlvof"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/devjslee/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
