import React from "react";
import { projects } from "@/data";
import Project from "@/components/cards/Project";

export default async function PersonalProjects() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border bg-card px-5 py-5 drop-shadow-2xl">
      <div className="flex w-full flex-row items-center justify-between">
        <span className="text-muted">Personal Projects</span>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project: any, index: number) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
