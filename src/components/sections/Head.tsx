import React from "react";
import { Button } from "@/components/ui/button";
import { FaEnvelope } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Head() {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between gap-4 xl:flex-row xl:gap-0">
      <div className="flex flex-col items-center gap-5 text-center xl:w-1/2 xl:items-start xl:text-start">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">I&apos;m misakii</h1>
          <span className="text-muted xl:text-xl">
            Self taught full-stack developer from France. Making projects with
            💓
          </span>
        </div>
        <div className="flex flex-row gap-2">
          <Button asChild size="sm" className="flex flex-row gap-2">
            <Link href="mailto:contact@misakii.dev">
              <FaEnvelope /> Contact Me
            </Link>
          </Button>
        </div>
      </div>
      <Image
        draggable={false}
        src="/assets/images/profile.png"
        alt="@misakii.dev"
        width={1170}
        height={1170}
        quality={100}
        className="size-40 select-none rounded-full border bg-gradient-to-br to-primary drop-shadow-2xl dark:from-accent/40 xl:mr-9"
      />
    </div>
  );
}
