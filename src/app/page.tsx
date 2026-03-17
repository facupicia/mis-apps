import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { supabase } from "@/lib/supabase";
import { Project } from "@/types/project";

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data || [];
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <span className="text-sm font-medium tracking-tight text-neutral-900">
            Portfolio
          </span>
          <nav className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12">
          <h1 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            Selected Work
          </h1>
          <p className="mt-4 max-w-xl text-neutral-500">
            A collection of projects I've worked on. Each one represents a unique challenge and creative solution.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 py-24">
            <p className="text-neutral-500">No projects found</p>
            <p className="mt-2 text-sm text-neutral-400">
              Add projects to your Supabase database to see them here
            </p>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
