import Projects from "@/components/projects";

export default function MyProjects() {
  return (
    <div className="flex flex-col content-center p-16 pt-24">
      <h1 className="flex text-3xl">Projects</h1>
      <div className="py-8">
        <Projects />
      </div>
    </div>
  );
}
