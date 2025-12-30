// import Hero from "@/components/Hero";
import Education from "@/components/Eduation";
import Skills from "@/components/Skills"; // Import the new section

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* <Hero /> */}
      <Skills /> 
      <Education />
    </main>
    
  );
}