import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2024 – Present',
    title: 'Computer Science',
    place: 'Caleb University',
    desc: 'Studying core CS concepts — algorithms, data structures, networks, and software engineering.',
  },
  {
    year: '2025 - Present',
    title: 'Self-Taught Web Dev',
    place: 'Online / Projects',
    desc: 'Learned HTML, CSS, JavaScript, React, and began building full-stack projects independently.',
  },
  {
    year: '2024',
    title: 'First Lines of Code',
    place: 'Python & Java',
    desc: 'Discovered programming through Python scripting and introductory Java coursework.',
  },
];

export function Cv() {
  return (
    <section id="cv" className="py-24 px-6 lg:px-12 max-w-4xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-12"
      >
        {/* Header */}
        <div className="text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Resume</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text mb-4">My Journey</h2>
          <p className="text-text/60 max-w-md mx-auto text-sm">
            A printable CV is currently in progress. For now, here's a brief look at my journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full max-w-2xl space-y-6 relative">
          {/* Vertical line */}
          <div className="absolute left-5 -translate-x-1/2 top-5 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex items-start gap-6"
            >
              {/* Dot */}
              <div className="relative flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              </div>

              {/* Content */}
              <div className="glass-card p-5 flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap mb-2">
                  <div>
                    <h3 className="font-heading font-semibold text-text text-base">{item.title}</h3>
                    <p className="text-primary/80 text-xs font-mono mt-0.5">{item.place}</p>
                  </div>
                  <span className="text-[10px] font-mono text-text/40 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 whitespace-nowrap">
                    {item.year}
                  </span>
                </div>
                <p className="text-text/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated glow ring */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3))',
              filter: 'blur(20px)',
              animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          <div className="glass-card relative px-10 py-8 flex flex-col items-center text-center gap-5"
            style={{ border: '1px solid rgba(59,130,246,0.3)' }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-text mb-2">Full CV Coming Soon</h3>
              <p className="text-text/60 text-sm max-w-xs">
                I'm currently polishing my resume. In the meantime, feel free to reach out directly!
              </p>
            </div>
            <a
              href="#contact"
              className="btn-pulse-wrapper inline-flex items-center gap-2 bg-primary/10 border border-primary/40 hover:bg-primary/20 hover:border-primary/60 text-primary px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              Contact Me Instead
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
