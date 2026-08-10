import { motion, type Variants } from 'framer-motion';
import { cn } from '../../utils/cn';

import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPrisma, SiPostgresql, SiGit, SiGithub
} from 'react-icons/si';

const skills = [
  { name: 'HTML', category: 'Frontend', Icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', category: 'Frontend', Icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Frontend', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', category: 'Frontend', Icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', category: 'Frontend', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', category: 'Backend', Icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', category: 'Backend', Icon: SiExpress, color: '#FFFFFF' },
  { name: 'Prisma', category: 'Backend', Icon: SiPrisma, color: '#2D3748' },
  { name: 'PostgreSQL', category: 'Database', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Git', category: 'Tools', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', category: 'Tools', Icon: SiGithub, color: '#FFFFFF' },
];



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

// Removed getNeighbourOffset for cleaner, non-disruptive hover states

function SkillCard({
  skill,
}: {
  skill: typeof skills[0],
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.05, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'glass-card relative overflow-hidden group rounded-2xl',
        'cursor-pointer transition-all duration-300',
        'border-transparent lg:border-white/5 lg:group-hover:border-transparent'
      )}
    >
      {/* 
        ROTATING AURA BORDER 
        It sits behind everything, spinning.
      */}
      <div 
        className="absolute -inset-[100%] transition-opacity duration-500 animate-[spin_3s_linear_infinite] opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 280deg, ${skill.color} 360deg)`,
          zIndex: 0
        }}
      />
      
      {/* 
        DARK COVER 
        This is exactly 2px smaller than the card, creating a 2px border for the aura to shine through.
      */}
      <div 
        className="absolute inset-[2px] rounded-[14px] transition-colors duration-500 z-0 bg-background/95 lg:bg-transparent lg:group-hover:bg-background/95"
      />

      {/* Inner Container for Content */}
      <div
        className="flex flex-col items-center justify-center gap-3 w-full h-full p-4 relative z-10 transition-transform duration-300 lg:group-hover:scale-110"
      >
        {/* Icon Container */}
        <div className="relative w-9 h-9 flex items-center justify-center">
          {/* White version — shown at rest on desktop */}
          <skill.Icon
            className="absolute inset-0 w-9 h-9 transition-all duration-300 text-white opacity-0 scale-90 lg:opacity-50 lg:scale-100 lg:group-hover:opacity-0 lg:group-hover:scale-90"
          />
          {/* Color version — shown by default on mobile, on hover on desktop */}
          <skill.Icon
            className="absolute inset-0 w-9 h-9 transition-all duration-300 opacity-100 scale-100 lg:opacity-0 lg:scale-90 lg:group-hover:opacity-100 lg:group-hover:scale-100"
            style={{ color: skill.color }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-1 mt-1">
          <span
            className="font-heading font-medium text-sm text-center leading-tight transition-colors duration-300 text-white lg:text-white/60 lg:group-hover:text-white"
          >
            {skill.name}
          </span>
          <span className="text-[9px] uppercase tracking-widest font-semibold transition-colors duration-300 text-white/50 lg:text-white/30 lg:group-hover:text-white/50">
            {skill.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Skills &amp; Expertise
        </h2>
        <div className="h-[1px] bg-black/10 dark:bg-white/10 flex-1 max-w-xs" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </motion.div>
    </section>
  );
}
