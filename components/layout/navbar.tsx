"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SearchDialog } from "@/components/layout/search-dialog";
import { Post } from "@/lib/types/post";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

interface NavbarProps {
  posts: Post[];
}

export function Navbar({ posts }: NavbarProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-center">
          <div className="w-full max-w-2xl px-4 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Owen</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-foreground/80 ${
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="mr-2"
                onClick={() => setOpen(true)}
                aria-label="검색"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">검색</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="다크모드 토글"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <SearchDialog posts={posts} open={open} onOpenChange={setOpen} />
    </>
  );
}
