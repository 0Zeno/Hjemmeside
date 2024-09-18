import PersonalProjects from "./personlige-prosjekter";
import SchoolProjects from "./skoleprosjekter";
import StudentClubProjects from "./verv";


export default function Projects() {
  return (
    <div className="sm:flex flex-row sm:space-y-0 space-y-8 sm:justify-evenly">
        <StudentClubProjects/>
        <PersonalProjects/>
        <SchoolProjects/>
      </div>
  );
}
