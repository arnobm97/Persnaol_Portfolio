"use client";

import { useState, useEffect } from "react";

const frontendSkills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3/SASS", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
];

const backendSkills = [
  { name: "Node.js", level: 85 },
  { name: "Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "GraphQL", level: 65 },
  { name: "REST API", level: 85 },
];

const otherSkills = [
  { name: "Git/GitHub", level: 85 },
  { name: "Docker", level: 70 },
  { name: "CI/CD", level: 75 },
  { name: "AWS", level: 65 },
  { name: "Vercel", level: 80 },
  { name: "Figma", level: 60 },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
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

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getActiveSkills = () => {
    switch (activeTab) {
      case "frontend":
        return frontendSkills;
      case "backend":
        return backendSkills;
      case "other":
        return otherSkills;
      default:
        return frontendSkills;
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className={`grid w-full grid-cols-3 bg-gray-100 dark:bg-gray-800 rounded-md p-1 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={() => setActiveTab("frontend")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
                activeTab === "frontend"
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
                activeTab === "backend"
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("other")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${
                activeTab === "other"
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Other
            </button>
          </div>

          <div className="mt-8">
            <div className="grid gap-4">
              {getActiveSkills().map((skill, index) => (
                <div
                  key={skill.name}
                  className={`border rounded-lg p-4 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-sm transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
