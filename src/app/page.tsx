"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // On mount, check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-50 text-gray-900 dark:text-gray-200 flex items-center justify-center p-6">
      <div className="relative max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Theme toggle switch */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
          className={`absolute top-4 right-4 w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              theme === "dark" ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>

        {/* Header background */}
        <div className="relative h-40 bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-200 dark:from-gray-300 dark:via-gray-700 dark:to-gray-900">
          <Image
            src="/background.jpeg" // You need to add a suitable header image in public folder or replace this path
            alt="Header background"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Profile picture */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden bg-gray-300 dark:bg-gray-700">
            <Image
              src="/DSC_2362.jpg" // Replace with actual profile picture path in public folder
              alt="Profile picture"
              width={112}
              height={112}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 pb-8 px-8 text-center">
          <h1 className="text-2xl font-bold">Egi Chandra Pratama</h1>
          <p className="text-gray-50 dark:text-gray-50 mt-1">
            Jakarta, Indonesia &nbsp;·&nbsp; he/him
          </p>

          {/* Social icons */}
          <div className="flex justify-center gap-4 mt-6">
            {[
              { href: "https://github.com/egichandrap", src: "/github.png", alt: "GitHub" },
              { href: "https://www.linkedin.com/in/egichandrapratama/", src: "/linkedin.png", alt: "LinkedIn" },
              { href: "https://www.instagram.com/masegiiiiiii/", src: "/instagram.png", alt: "Instagram" },
              { href: "#", src: "/x.png", alt: "X" },
              { href: "#", src: "/rss.png", alt: "RSS" },
            ].map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
              >
                <Image src={src} alt={alt} width={20} height={20} />
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="mt-8 space-y-4 text-left">
            {[
              {
                href: "#",
                icon: (
                  <svg
                    className="w-5 h-5 mr-3 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ),
                text: "Personal Website & Portfolio",
                borderColor: "border-green-600",
              },
              {
                href: "/pdf/CV.Egi-Chandra-Pratama.pdf",
                icon: (
                  <svg
                    className="w-5 h-5 mr-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-3-3v6m-6 3h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    ></path>
                  </svg>
                ),
                text: "Resume & Curriculum Vitae",
                borderColor: "border-blue-600",
              },
              {
                href: "#",
                icon: (
                  <svg
                    className="w-5 h-5 mr-3 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7v6a4 4 0 008 0V7"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v4"
                    ></path>
                  </svg>
                ),
                text: "1 on 1 Session",
                borderColor: "border-pink-600",
              },
              {
                href: "/buy-coffee",
                icon: (
                  <svg
                    className="w-5 h-5 mr-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M3 14h18M3 18h18"
                    ></path>
                  </svg>
                ),
                text: "Buy me a Cup of Coffee",
                borderColor: "border-gray-400",
              },
              ].map(({ href, icon, text, borderColor }) => {
                const hoverBgClass = {
                  "border-green-600": "hover:bg-green-100 dark:hover:bg-green-700",
                  "border-blue-600": "hover:bg-blue-100 dark:hover:bg-blue-700",
                  "border-pink-600": "hover:bg-pink-100 dark:hover:bg-pink-700",
                  "border-gray-400": "hover:bg-gray-200 dark:hover:bg-gray-700",
                }[borderColor] || "hover:bg-gray-200 dark:hover:bg-gray-700";

                const arrowColorClass = {
                  "border-green-600": "text-green-400",
                  "border-blue-600": "text-blue-400",
                  "border-pink-600": "text-pink-400",
                  "border-gray-400": "text-gray-400",
                }[borderColor] || "text-gray-400";

                return (
                  <a
                    key={text}
                    href={href}
                    className={`flex items-center border ${borderColor} rounded-lg px-4 py-3 ${hoverBgClass} transition-colors shadow-md`}
                    target={href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                  >
                    {icon}
                    <span className="font-semibold">{text}</span>
                    <svg
                      className={`ml-auto w-5 h-5 ${arrowColorClass}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                );
              })}
          </div>

          {/* Get in touch */}
          <div className="mt-8 p-6 rounded-lg bg-green-200 bg-opacity-50 dark:bg-green-700 dark:bg-opacity-30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-600 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <h2 className="font-bold text-lg">Drop me an Email</h2>
            </div>
            <p className="font-semibold">egichandrapratama@gmail.com</p>
            <p className="mt-1 text-gray-700 dark:text-gray-300 text-sm">
              Drop me a line – I’m always quick to respond and excited to help out!
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 dark:text-gray-400 text-sm py-4 border-t border-gray-300 dark:border-gray-700">
          © 2025 by Egichandrap
        </footer>
      </div>
    </div>
  );
}
