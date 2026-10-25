'use client';

import { useEffect, useState } from 'react';

export default function StatCard() {
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          'https://github-contributions-api.jogruber.de/v4/0xProgress'
        );
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const sum = data.contributions.reduce(
          (acc: number, curr: { count: number }) => acc + curr.count,
          0
        );
        setTotal(sum);
      } catch (e) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  const display = error || total === null ? '-' : total.toLocaleString();

  return (
    <div className="bg-stone-900 border border-stone-700 p-6 rounded-sm">
      <p className="font-mono text-3xl text-stone-50 mb-1">
        {display} <span className="text-xl text-stone-400">commits</span>
      </p>
      <p className="font-mono text-xs text-stone-500">lifetime contributions</p>
    </div>
  );
}