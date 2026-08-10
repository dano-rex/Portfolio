import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/GithubIcon';

const projects = [
  {
    label: 'Featured Project',
    title: 'Premium Portfolio OS',
    description:
      'A highly interactive, space-themed personal portfolio. Built with a custom design system, 3D galaxy background, Framer Motion animations, glassmorphism UI, and a custom astronaut scrollbar.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    github: 'https://github.com/dano-rex',
    live: '#',
    gradient: 'from-blue-500/20 to-purple-500/20',
    accent: '#3B82F6',
  },
  {
    label: 'In Progress',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with product listings, shopping cart, user auth, and a simulated payment gateway. Built with React, Node.js, Express, and PostgreSQL.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/dano-rex',
    live: '#',
    gradient: 'from-cyan-500/20 to-teal-500/20',
    accent: '#06B6D4',
  },
  {
    label: 'Coming Soon',
    title: 'Task Manager App',
    description:
      'A productivity-focused task manager with drag-and-drop boards, deadlines, priorities, and team collaboration features. Currently in the planning and design phase.',
    tags: ['React', 'TypeScript', 'Supabase', 'DnD Kit'],
    github: 'https://github.com/dano-rex',
    live: '#',
    gradient: 'from-purple-500/20 to-pink-500/20',
    accent: '#8B5CF6',
  },
];

export function Project() {
  return (
    <section id="project" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading">Selected Work</h2>
        <div className="h-[1px] bg-white/10 flex-1 max-w-xs" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card flex flex-col overflow-hidden group relative"
            style={{ '--project-accent': project.accent } as React.CSSProperties}
          >
            {/* Gradient top bar */}
            <div
              className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} relative overflow-hidden`}
            >
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </div>

            {/* Hover glow overlay */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: `inset 0 0 60px ${project.accent}15`,
                border: `1px solid ${project.accent}30`,
              }}
            />

            {/* Card body */}
            <div className="flex flex-col flex-1 p-7 gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: project.accent }}>
                  {project.label}
                </p>
                <h3 className="text-xl font-heading font-bold text-text mb-3">
                  {project.title}
                </h3>
                <p className="text-text/70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-text/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2 border-t border-black/10 dark:border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-text/50 hover:text-text transition-colors hover:scale-110 active:scale-95 transition-transform"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  className="p-2 text-text/50 hover:text-text transition-colors hover:scale-110 active:scale-95 transition-transform"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <span className="ml-auto text-[10px] font-mono text-text/30 uppercase tracking-wider">
                  View Project →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
