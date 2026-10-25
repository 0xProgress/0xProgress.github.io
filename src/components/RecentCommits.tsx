"use client";

import { useEffect, useState } from "react";
import { GitCommit } from "lucide-react";

// CHANGE THIS to your main repository (e.g., "BobbyX208/your-repo")
const REPO_OWNER = "is-a-dev";
const REPO_NAME = "is-a.dev";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
}

export function RecentCommits() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits?per_page=3`
        );
        if (res.ok) {
          const data = await res.json();
          setCommits(data);
        }
      } catch (err) {
        console.error("Failed to fetch commits", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCommits();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4 font-mono text-sm text-zinc-500">
        <div className="h-4 w-48 animate-pulse rounded-sm bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-64 animate-pulse rounded-sm bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-56 animate-pulse rounded-sm bg-zinc-200 dark:bg-zinc-800" />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    return `${diffInDays} days ago`;
  };

  return (
    <ul className="space-y-4 font-mono text-sm">
      {commits.map((commit) => (
        <li key={commit.sha} className="flex items-start gap-3">
          <GitCommit className="mt-1 h-4 w-4 shrink-0 text-zinc-400" />
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-zinc-900 dark:text-zinc-50">
              {commit.commit.message.split("\n")[0]}
            </span>
            <span className="text-xs text-zinc-500">
              {formatDate(commit.commit.author.date)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}