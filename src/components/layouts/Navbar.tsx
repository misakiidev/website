"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="mx-auto mt-8 flex w-full max-w-5xl items-center justify-between rounded-lg border bg-card px-5 py-2.5 drop-shadow-2xl">
      <div className="transition duration-300">
        <Link
          className={`${pathname !== "/" ? "text-muted" : "dark:text-white"}`}
          href="/"
        >
          misakii.dev
        </Link>
        <span
          className={`${pathname === "/" ? "opacity-0" : ""} transition-opacity duration-300`}
        >
          /{pathname.split("/")[1]}
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
