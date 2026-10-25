'use client';

import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import StatCard from '@/components/StatCard';
import SponsorGrid from '@/components/SponsorGrid';

const GithubIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-stone-500"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function NavRail() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = ['work', 'about', 'sponsor', 'contact'];

  return (
    <nav className="nav-rail">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className={`nav-link ${active === link ? 'active' : ''}`}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

export default function Page() {
  return (
    <>
      {/* Fixed Logo */}
      <div className="fixed top-6 left-6 z-50 font-mono text-sm text-stone-50">
        0xProgress
        <span className="inline-block w-2 h-4 bg-purple-400 animate-blink ml-0.5 align-middle"></span>
      </div>

      {/* Fixed Right Rail Nav */}
      <NavRail />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6">
        {/* 1. Hero */}
        <section id="hero" className="pt-32 pb-24">
          <p className="font-mono text-xs text-stone-400 mb-2">
            Progress O. Uwhuseba
          </p>
          <p className="font-mono text-xs text-stone-400 mb-8 flex items-center gap-2">
            Lagos, Nigeria{' '}
            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-blink"></span>
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-50 hover-wonk mb-6 max-w-2xl leading-tight">
            "I build small tools that punch above their weight."
          </h1>
          <p className="font-mono text-xs text-stone-400">
            Go · Python · Backend · OSS
          </p>
        </section>

        {/* 2. Work */}
        <section id="work" className="py-24">
          <p className="font-mono text-xs uppercase text-stone-500 mb-8">
            work
          </p>
          <div className="space-y-4">
            <a
              href="https://pypi.org/project/envdiff/"
              className="block bg-stone-900 p-6 card-hover-border rounded-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-mono text-stone-50">envdiff</h3>
                <ExternalLink size={14} className="text-stone-500 mt-1" />
              </div>
              <p className="text-stone-400 text-sm mb-4">
                Compare .env files. Zero config. CI-native.
              </p>
              <p className="font-mono text-[10px] text-stone-500">
                python · cli · security
              </p>
            </a>

            <a
              href="https://github.com/0xProgress/waitfor"
              className="block bg-stone-900 p-6 card-hover-border rounded-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-mono text-stone-50">waitfor</h3>
                <ExternalLink size={14} className="text-stone-500 mt-1" />
              </div>
              <p className="text-stone-400 text-sm mb-4">
                Blocks until a condition is true. Tells you why it failed.
              </p>
              <p className="font-mono text-[10px] text-stone-500">
                go · cli · devtools
              </p>
            </a>

            <a
              href="https://is-a.dev"
              className="block bg-stone-900 p-6 card-hover-border rounded-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-mono text-stone-50">
                  is-a.dev{' '}
                  <span className="text-stone-500 text-[10px]">
                    (maintainer)
                  </span>
                </h3>
                <ExternalLink size={14} className="text-stone-500 mt-1" />
              </div>
              <p className="text-stone-400 text-sm mb-4">
                Free subdomains for developers. Thousands rely on it.
              </p>
              <p className="font-mono text-[10px] text-stone-500">
                dns · open-source · community
              </p>
            </a>
          </div>
        </section>

        {/* 3. About */}
        <section id="about" className="py-24">
          <p className="font-mono text-xs uppercase text-stone-500 mb-8">
            about
          </p>
          <p className="text-stone-400 max-w-xl mb-8">
            CS student in Lagos. No internships, no employer, just 4 years of
            building things because I couldn't stop. Everything I ship is open
            source.
          </p>

          <div className="mb-8">
            <StatCard />
          </div>

          <div className="bg-stone-800 border border-stone-700 p-6 rounded-sm font-mono text-sm mb-6">
            <p>
              <span className="text-purple-400">$</span> whoami
            </p>
            <p className="text-stone-400 mt-2">
              &gt; self-taught. ships real things.
            </p>
            <p className="text-stone-400">
              &nbsp;&nbsp;Boot.dev → Go mastery in progress.
            </p>
            <p className="text-stone-400">
              &nbsp;&nbsp;GitHub Education Dev Pack holder.
            </p>
          </div>

          <p className="font-mono text-xs text-stone-500 flex items-center gap-2">
            <GithubIcon size={12} />
            This work is supported in part by the GitHub Education Developer
            Pack.
          </p>
        </section>

        {/* 5. Sponsor */}
        <section id="sponsor" className="py-24">
          <p className="font-mono text-xs uppercase text-stone-500 mb-8">
            sponsor
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-50 italic mb-4">
            "Support the work."
          </h2>
          <p className="text-stone-400 max-w-xl mb-8">
            Everything here is free and open source. If any of it saved you
            time, sponsoring helps me build more of it and get to full-time OSS
            faster.
          </p>

          <a
            href="https://github.com/sponsors/0xProgress"
            className="inline-block bg-purple-400 text-stone-950 font-mono text-sm px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            ♥ Sponsor on GitHub
          </a>

          <div className="mt-16">
            <p className="font-mono text-xs text-stone-500 mb-6">
              Current sponsors
            </p>
            <SponsorGrid />
            <p className="text-stone-400 text-sm mt-8 max-w-xl">
              Sponsor slots are visible to everyone who visits. Sponsorship is
              recurring, any amount. Your support directly funds open-source
              work built in public, for developers.
            </p>
          </div>
        </section>

        {/* 6. Contact */}
        <section id="contact" className="py-24">
          <p className="font-mono text-xs uppercase text-stone-500 mb-8">
            contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-50 mb-6">
            "Let's talk."
          </h2>
          <div className="font-mono text-sm flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://github.com/0xProgress"
              className="text-stone-400 hover:underline decoration-purple-400 underline-offset-4 transition-all"
            >
              github
            </a>
            <a
              href="https://x.com/0xProgress"
              className="text-stone-400 hover:underline decoration-purple-400 underline-offset-4 transition-all"
            >
              x
            </a>
            <a
              href="https://discord.com/users/1214231706698252320"
              className="text-stone-400 hover:underline decoration-purple-400 underline-offset-4 transition-all"
            >
              discord
            </a>
            <a
              href="mailto:progressuwhuseba@gmail.com"
              className="text-stone-400 hover:underline decoration-purple-400 underline-offset-4 transition-all"
            >
              progressuwhuseba@gmail.com
            </a>
          </div>
        </section>

        {/* 7. Footer */}
        <footer className="py-12 border-t border-stone-700">
          <p className="font-mono text-xs text-stone-500">
            © 2026 Progress Uwhuseba · built in Lagos
          </p>
        </footer>
      </main>
    </>
  );
}