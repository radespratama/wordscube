import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto select-none text-white border-t border-gray-800">
      <section className="hidden sm:flex justify-between items-center py-4 px-4">
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
      <section className="max-w-2xl py-3 text-center mx-auto border-t border-gray-800">
        © {new Date().getFullYear()} Wordscube | Rades Pratama.
      </section>
    </footer>
  );
}
