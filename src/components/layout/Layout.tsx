import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GalaxyBackground } from '../ui/GalaxyBackground';
import { AstronautScrollbar } from '../ui/AstronautScrollbar';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-primary/30 selection:text-white">
      <GalaxyBackground />
      <AstronautScrollbar />
      <Navbar />
      <main className="flex-1 w-full relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
