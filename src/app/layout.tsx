import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Shahriar Islam | Software Engineer & Researcher',
  description: 'Portfolio of Shahriar Islam — software engineering, full-stack development, AI/ML and research.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
