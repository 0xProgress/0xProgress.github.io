import type { Metadata } from 'next';
import { Fraunces, DM_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['WONK', 'opsz'],
  display: 'swap',
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://0xprogress.is-a.dev'),
  title: {
    default: '0xProgress | Progress O. Uwhuseba',
    template: '%s | 0xProgress',
  },
  description:
    'CS student in Lagos building small tools that punch above their weight. Open source CLI tools, backend development, and developer utilities. Creator of envdiff, waitfor, and is-a.dev maintainer.',
  keywords: [
    'Progress Uwhuseba',
    '0xProgress',
    'open source developer',
    'Lagos developer',
    'Nigeria developer',
    'Go developer',
    'Python developer',
    'CLI tools',
    'envdiff',
    'waitfor',
    'is-a.dev',
    'backend developer',
    'computer science student',
    'GitHub Education',
    'developer portfolio',
  ],
  authors: [{ name: 'Progress O. Uwhuseba', url: 'https://github.com/0xProgress' }],
  creator: 'Progress Uwhuseba',
  publisher: 'Progress Uwhuseba',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://0xprogress.is-a.dev',
    siteName: '0xProgress',
    title: '0xProgress | Progress O. Uwhuseba',
    description:
      'CS student in Lagos building small tools that punch above their weight. Open source CLI tools and developer utilities.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Progress O. Uwhuseba — 0xProgress',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '0xProgress | Progress O. Uwhuseba',
    description:
      'CS student in Lagos building small tools that punch above their weight. Open source CLI tools and developer utilities.',
    images: ['/og-image.png'],
    creator: '@0xProgress',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://0xprogress.is-a.dev',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Progress O. Uwhuseba',
    alternateName: '0xProgress',
    url: 'https://0xprogress.is-a.dev',
    image: 'https://0xprogress.is-a.dev/og-image.png',
    jobTitle: 'Open Source Developer',
    description:
      'CS student in Lagos building small tools that punch above their weight. Open source CLI tools, backend development, and developer utilities.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'Nigeria',
    },
    sameAs: [
      'https://github.com/0xProgress',
      'https://x.com/0xProgress',
      'https://0xprogress.is-a.dev',
    ],
    knowsAbout: ['Go', 'Python', 'Backend Development', 'CLI Tools', 'Open Source', 'DevOps'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Lagos State University of Education',
      alternateName: 'LASUED',
    },
  };

  const waitforJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'waitfor',
    alternateName: 'waitfor CLI',
    url: 'https://github.com/0xProgress/waitfor',
    downloadUrl: 'https://github.com/0xProgress/waitfor/releases',
    installUrl: 'https://github.com/0xProgress/waitfor#install',
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: 'CLI Tool',
    operatingSystem: 'Linux, macOS',
    programmingLanguage: 'Go',
    description:
      "Block until a condition is true, or tell you exactly why it wasn't. A Go CLI that polls ports, HTTP endpoints, files, processes, and shell commands — and on timeout tells you exactly what was wrong.",
    featureList: [
      'TCP port readiness checks',
      'HTTP endpoint health checks',
      'File existence and size checks',
      'Process readiness checks',
      'Arbitrary shell command checks',
      'Parallel multi-condition checks with waitfor all',
      'Machine-readable JSON output',
      'CI/CD native with meaningful exit codes',
    ],
    keywords: 'cli, go, golang, devops, ci-cd, healthcheck, devtools',
    license: 'https://github.com/0xProgress/waitfor/blob/main/LICENSE',
    codeRepository: 'https://github.com/0xProgress/waitfor',
    softwareVersion: 'latest',
    author: {
      '@type': 'Person',
      name: 'Progress O. Uwhuseba',
      alternateName: '0xProgress',
      url: 'https://0xprogress.is-a.dev',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${dmMono.variable}`}>
      <head>
        {/* Identity verification */}
        <link rel="me" href="https://github.com/0xProgress" />
        <link rel="me" href="https://x.com/0xProgress" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(waitforJsonLd) }}
        />
      </head>
      <body className="bg-stone-950 text-stone-50 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}