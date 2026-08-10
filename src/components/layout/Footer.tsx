import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-text/60">
          © {new Date().getFullYear()} Ayeleso Inioluwa Daniel. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/dano-rex"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-text/60 hover:text-primary hover:bg-primary/10 rounded-full transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:ayelesoinioluwadanny@gmail.com"
            className="p-2 text-text/60 hover:text-primary hover:bg-primary/10 rounded-full transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-text/60 hover:text-primary transition-colors"
        >
          Back to Top <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
