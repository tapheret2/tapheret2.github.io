import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import { featuredProjects } from '@/data/projects';

export default function HomePage() {
  return (
    <main className="pb-20">
      <HeroSection />
      <AboutSection />

      <section id="projects" className="section-shell py-10 md:py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Featured Projects</p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Selected work aligned with Data Engineering roles
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
