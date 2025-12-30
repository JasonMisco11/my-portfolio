import React from "react";
import { skillsSection } from "./ui/portfolio";
import SoftwareSkills from "./SoftwareSkills";

export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto" id="skills">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            {skillsSection.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 italic">
            {skillsSection.subTitle}
          </p>
          <ul className="space-y-4">
            {skillsSection.skills.map((sentence, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <span className="text-blue-500 mt-1">🔥</span>
                {sentence}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <SoftwareSkills />
        </div>
      </div>
    </section>
  );
}