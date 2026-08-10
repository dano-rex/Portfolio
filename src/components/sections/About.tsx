import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stats = [
  { value: '2+', label: 'Years Coding' },
  { value: '10+', label: 'Projects' },
  { value: 'Open', label: 'To Work ✅' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col gap-14"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">About Me</h2>
          <div className="h-[1px] bg-black/10 dark:bg-white/10 flex-1 max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 items-start">

          {/* Left — Avatar */}
          <motion.div variants={itemVariants} className="md:col-span-3 flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)',
                  padding: '3px',
                  borderRadius: '9999px',
                }}
              />
              {/* Avatar circle */}
              <div
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center text-4xl font-bold font-heading text-text"
                style={{
                  background: 'linear-gradient(135deg, #1e2a4a 0%, #0F172A 100%)',
                  border: '3px solid transparent',
                  backgroundClip: 'padding-box',
                  boxShadow: '0 0 40px rgba(59,130,246,0.2), inset 0 0 30px rgba(59,130,246,0.05)',
                  zIndex: 1,
                  position: 'relative',
                }}
              >
                AID
              </div>
              {/* Status dot */}
              <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-green-400 border-2 border-background z-10 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            </div>
          </motion.div>

          {/* Middle — Bio */}
          <div className="md:col-span-5 space-y-5">
            <motion.div
              variants={itemVariants}
              className="border-l-2 border-primary/60 pl-5 space-y-4 text-text/80 text-base leading-relaxed"
            >
              <p>
                I build modern, scalable, and intuitive web applications. My journey in software engineering stems from a deep passion for learning and solving complex problems with creative thinking.
              </p>
              <p>
                As an aspiring Full-Stack Developer, I enjoy bridging the gap between beautiful, user-centric interfaces and robust backend architectures. I believe exceptional products require both excellent design and solid engineering.
              </p>
              <p>
                When I'm not writing code, you'll find me exploring new technologies, refining my design intuition, or gaming.
              </p>
            </motion.div>
          </div>

          {/* Right — Philosophy */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <motion.div
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-card p-7 h-full flex flex-col justify-center cursor-pointer"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(59,130,246,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
            >
              <h3 className="text-lg font-heading font-semibold mb-5 text-text">Core Philosophy</h3>
              <ul className="space-y-3">
                {[
                  'Write clean, maintainable, self-documenting code.',
                  'Design for the user first; complexity should be invisible.',
                  'Embrace continuous learning and adaptability.',
                  'Communicate effectively and collaborate openly.',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-accent mt-0.5 text-sm">▹</span>
                    <span className="text-text/75 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 max-w-lg"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 + i * 0.12, type: 'spring', stiffness: 300 }}
              className="glass-card p-5 flex flex-col items-center justify-center text-center"
            >
              <span className="text-2xl font-bold font-heading text-text">{stat.value}</span>
              <span className="text-[10px] text-text/40 uppercase tracking-wider mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
