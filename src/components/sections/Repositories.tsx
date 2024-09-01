import React from "react";
import Repository from "@/components/cards/Repository";
import { fallbackRepositories } from "@/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Repositories({
  fullPage = false,
}: {
  fullPage?: boolean;
}) {
  let repositories: any[] = [];

  try {
    const response = await fetch(
      "https://api.github.com/users/misakiidev/repos",
    );

    repositories = await response.json();
  } catch (error) {
    repositories = fallbackRepositories;
  }

  return (
    <div
      className={`${!fullPage && "rounded-lg border bg-card p-5 xl:col-span-2"} flex w-full flex-col gap-3 drop-shadow-2xl`}
    >
      {!fullPage && (
        <div className="flex w-full flex-row items-center justify-between">
          <span className="flex flex-row items-center gap-2 text-muted">
            Repositories
          </span>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="!h-5 !px-2 !py-3"
          >
            <Link
              href="/repositories"
              className="flex flex-row items-center gap-1 text-muted"
            >
              View More
            </Link>
          </Button>
        </div>
      )}

      {repositories
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, fullPage ? repositories.length : 4)
        .map((repo: any, index: number) => (
          <Repository key={index} repo={repo} />
        ))}
    </div>
  );
}
