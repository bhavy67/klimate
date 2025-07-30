import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { cn } from "@/lib/utils" // adjust import path if needed


export function Layout({ children }: PropsWithChildren) {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p
            className={cn(
              "mt-12 text-center text-sm font-medium transition-colors", // core styling
              "text-zinc-700 dark:text-zinc-300"  // text adapts to theme
            )}
          >
            <span role="img" aria-label="spark">✨</span>
            {" "}
            Crafted with
            <span className="mx-1 animate-pulse text-red-500 dark:text-red-400">❤️</span>
            by{" "}
            <a
              href="https://github.com/bhavy67"
              className={cn(
                "underline-offset-4 decoration-wavy decoration-primary underline font-bold transition-colors",
                "text-primary hover:text-primary/80 dark:text-primary-light dark:hover:text-primary"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bhavy Ladani
            </a>
            {" "}
            <span role="img" aria-label="rocket">🚀</span>
          </p>


        </div>
      </footer>
    </div>
  );
}
