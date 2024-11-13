import PersonalProjects from "./personlige-prosjekter";
import SchoolProjects from "./school-projects";
import StudentClubProjects from "./student-club-projects";


export default function Projects() {
  return (
    <div className="space-y-8 flex flex-col justify-center items-center sm:mx-64">
        <StudentClubProjects/>
        <PersonalProjects/>
        <SchoolProjects/>
      </div>
  );
}
