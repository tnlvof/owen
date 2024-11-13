"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "@/public/owen.jpg";

export default function AboutPage() {
  return (
    <div className="flex flex-col dark:bg-gray-900 p-4 min-h-[calc(100vh-3.5rem)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl space-y-6"
      >
        <article className="bg-card rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-md w-full">
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
                  Owen
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
            <h2 className="text-lg font-semibold text-card-foreground">
              Skill
            </h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-card-foreground">
              <li>프론트엔드: React, Next.js, TailwindCSS</li>
              <li>백엔드: Node.js, Express</li>
              <li>데이터베이스: MongoDB, PostgreSQL</li>
              <li>기타: Git, Docker, AWS</li>
            </ul>
          </div>
        </article>

        <article className="bg-card rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-md w-full">
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-card-foreground">
              Contact
            </h2>
            <p className="text-sm text-card-foreground">
              문의사항이나 협업 제안은 언제든 환영합니다. 아래 이메일로 연락
              주세요.
            </p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              tnlvof@kakao.com
            </p>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
