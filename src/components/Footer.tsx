import React from "react";

export default function Footer({ isFooter }: { isFooter?: boolean }) {
  if (isFooter) {
    return (
      <footer className="max-w-screen-lg mx-auto select-none border-t text-gray-950 border-gray-400 dark:border-gray-800 dark:text-white">
        <section className="hidden sm:flex justify-between items-center py-3 px-4">
          <p className="text-base">
            Built using{" "}
            <a
              className="links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.nextjs.org/"
            >
              Next JS
            </a>
          </p>
          <div className="space-x-10 text-base">
            Want to use this template?{" "}
            <a
              className="links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/radespratama/wordscube"
            >
              Github
            </a>
          </div>
        </section>
        <section className="max-w-2xl py-3 text-base text-center mx-auto border-t border-gray-400 dark:border-gray-800">
          © {new Date().getFullYear()} Wordscube | Rades Pratama.
        </section>
      </footer>
    );
  }

  return <></>;
}
