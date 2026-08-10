import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const stats = [
  { value: '3+', label: 'Years Learning' },
  { value: '10+', label: 'Projects Built' },
  { value: '∞', label: 'Lines of Code' },
];

function TypewriterText() {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const ROLES = [
      'Full-Stack Developer',
      'UI/UX Enthusiast',
      'React Engineer',
      'Problem Solver',
      'Creative Thinker',
      'Software Engineer',
      'Lifelong Learner',
      'Frontend Specialist',
      'Tech Explorer',
    ];
    
    let roleIndex = 0;
    let isDeleting = false;
    let text = '';
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const current = ROLES[roleIndex];
      const speed = isDeleting ? 40 : 80;

      if (isDeleting) {
        text = current.substring(0, text.length - 1);
      } else {
        text = current.substring(0, text.length + 1);
      }

      setDisplayed(text);

      let nextSpeed = speed;

      if (!isDeleting && text === current) {
        // Pause at the end of the word
        isDeleting = true;
        nextSpeed = 1800;
      } else if (isDeleting && text === '') {
        // Pause before typing the next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        nextSpeed = 500;
      }

      timeoutId = setTimeout(tick, nextSpeed);
    }

    // Start typing loop
    timeoutId = setTimeout(tick, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <span 
      className="inline-block text-transparent bg-clip-text animate-shimmer" 
      style={{
        backgroundImage: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)',
        backgroundSize: '200% auto',
      }}
    >
      {displayed}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center pt-24 pb-8 px-6 lg:px-12 max-w-7xl mx-auto w-full relative">

      <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center items-center text-center relative z-10">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center gap-5 md:gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center gap-3 text-sm font-medium text-accent"
          >
            <span className="w-8 h-[1px] bg-accent"></span>
            Hello, I'm
            <span className="w-8 h-[1px] bg-accent"></span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight text-text leading-tight"
          >
            Ayeleso <br />
            <span
              className="animate-shimmer"
              style={{
                backgroundImage: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Inioluwa Daniel.
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-text/60 min-h-[2rem]"
          >
            <TypewriterText />
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text/60 max-w-xl mx-auto"
          >
            Passionate about building scalable, intuitive applications and turning complex ideas into beautiful digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mt-2 md:mt-4"
          >
            <a
              href="#project"
              className="btn-pulse-wrapper bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 hover:bg-black/5 dark:hover:bg-white/5 text-text px-8 py-3.5 rounded-full font-medium transition-all hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 md:gap-14 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-black/10 dark:border-white/10 w-full max-w-sm justify-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.15, duration: 0.5 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-2xl md:text-3xl font-bold font-heading text-text">{stat.value}</span>
                <span className="text-[10px] md:text-[11px] text-text/40 uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator - Dancing thin aura line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="shrink-0 z-10 mt-8 mb-4 flex justify-center"
      >
        <a href="#about" className="flex flex-col items-center justify-center group w-12 h-20 hover:scale-110 transition-transform">
          <div className="relative w-[2px] h-14 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-shadow">
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-primary to-transparent blur-[1px]"
            />
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/3 bg-text"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
