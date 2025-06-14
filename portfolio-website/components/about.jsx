"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm a passionate Full Stack Developer with expertise in building
            modern web applications. With over X years of experience in the
            industry, I've worked on a variety of projects ranging from small
            business websites to complex enterprise applications.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            My approach to development focuses on creating clean, efficient, and
            maintainable code. I'm constantly learning and exploring new
            technologies to stay at the forefront of web development.
          </p>

          <div className="grid grid-cols-2 max-w-md mx-auto gap-4 mb-8">
            <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
              <h4 className="font-bold">X+</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Years of Experience
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
              <h4 className="font-bold">Y+</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Projects Completed
              </p>
            </div>
          </div>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
