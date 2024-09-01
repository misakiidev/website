import React from "react";
import { experiences } from "@/data";
import Experience from "@/components/cards/Experience";

export default async function Experiences() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border bg-card px-5 py-5 drop-shadow-2xl">
      <div className="flex w-full flex-row items-center justify-between">
        <span className="text-muted">Experiences</span>
      </div>
      <div className="flex flex-col gap-3">
        {experiences.map((experience: any, index: number) => (
          <Experience experience={experience} key={index} />
        ))}
      </div>
    </div>
  );
}
