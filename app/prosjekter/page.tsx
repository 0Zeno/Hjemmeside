import Projects from "@/components/prosjekter";

export default function MyProjects() {
  return (
    <div className="flex flex-col content-center p-16 pt-24">
      <h1 className="flex text-3xl">Prosjekter</h1>
      <div className="py-8">
        <Projects />
      </div>
    </div>
  );
}
