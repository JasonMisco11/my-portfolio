import Image from "next/image";
import { educationBackground } from "./ui/portfolio";
import BulletList from "./BulletList";

export default function Education() {
  if (!educationBackground.display) return null;

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="education">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="space-y-12">
        {educationBackground.schools.map((school, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            {/* School Logo */}
            <div className="relative w-16 h-16 shrink-0">
               <img 
                src={school.logo} 
                alt={school.schoolName}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {school.schoolName}
                </h3>
                <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full w-fit">
                  {school.duration}
                </span>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                {school.subHeader}
              </p>
              <p className="mt-4 text-slate-700 dark:text-slate-300">
                {school.desc}
              </p>
              <BulletList points={school.descBullets} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}