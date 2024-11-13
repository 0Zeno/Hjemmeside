"use client";

import { useState } from "react";
import PersonalProjects from "./personal-projects";
import SchoolProjects from "./school-projects";
import StudentClubProjects from "./student-club-projects";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, changeFilter] = useState("verv");

  return (
    <div className="space-y-8 flex flex-col justify-center items-center sm:mx-64">
      <div className="flex flex-col sm:flex-row sm:justify-between w-full border-b-2">
        <Button
          className={cn("", { "text-shadow": filter === "verv" })}
          variant={"backgroudblurproject"}
          onClick={() => changeFilter("verv")}
        >
          Verv
        </Button>
        <Button
          className={cn("", { "text-shadow": filter === "sideprosjekter" })}
          variant={"backgroudblurproject"}
          onClick={() => changeFilter("sideprosjekter")}
        >
          Sideprosjekter
        </Button>
        <Button
          className={cn("", { "text-shadow": filter === "skole" })}
          variant={"backgroudblurproject"}
          onClick={() => changeFilter("skole")}
        >
          Skole
        </Button>
      </div>
      {filter === "verv" && (
        <div>
          <StudentClubProjects />
        </div>
      )}
      {filter === "skole" && (
        <div>
          <SchoolProjects />
        </div>
      )}
      {filter === "sideprosjekter" && (
        <div>
          <PersonalProjects />
        </div>
      )}
    </div>
  );
}
