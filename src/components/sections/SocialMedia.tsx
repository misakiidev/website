import React from "react";
import Social from "@/components/cards/Social";
import { socials } from "@/data";

export default async function SocialMedia() {
  return (
    <div className="col-span-1 flex w-full flex-col gap-3 rounded-lg border bg-card px-5 py-5 drop-shadow-2xl">
      <div className="flex w-full flex-row items-center justify-between">
        <span className="flex flex-row items-center gap-2 text-muted">
          Social Media
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {socials.map((social: any, index: number) => (
          <Social social={social} key={index} />
        ))}
      </div>
    </div>
  );
}
