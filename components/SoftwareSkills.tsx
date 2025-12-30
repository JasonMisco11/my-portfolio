"use client"; 
import { Icon } from "@iconify/react";
import { skillsSection } from "./ui/portfolio";

export default function SoftwareSkills() {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center gap-8">
        {skillsSection.softwareSkills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center group transition-transform hover:-translate-y-2"
          >
            <div className="text-5xl md:text-6xl text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
              <Icon icon={skill.icon} />
            </div>
            <p className="mt-2 text-sm font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.skillName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}