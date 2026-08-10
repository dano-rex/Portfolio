import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/dano-rex',
    color: '#ffffff',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/inioluwa-daniel-ayeleso-577a77428/',
    color: '#0A66C2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'X / Twitter',
    href: 'https://x.com/danorex123',
    color: '#ffffff',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ayelesoinioluwadanny@gmail.com',
    color: '#06B6D4',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

type ButtonState = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [btnState, setBtnState] = useState<ButtonState>('idle');

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (btnState !== 'idle' && btnState !== 'error') return;
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms Access Key
    formData.append("access_key", "43ea4268-2ddb-4aaf-a151-922cf2b943e9");


    setBtnState('loading');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setBtnState('success');
        form.reset();
        setTimeout(() => setBtnState('idle'), 3000);
      } else {
        console.error("Error submitting form:", data);
        setBtnState('error');
        setTimeout(() => setBtnState('idle'), 3000);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setBtnState('error');
      setTimeout(() => setBtnState('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 max-w-4xl mx-auto w-full relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col items-center text-center gap-6"
      >
        <motion.p variants={itemVariants} className="text-primary font-mono text-sm tracking-widest uppercase">
          What's Next?
        </motion.p>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-heading text-text">
          Get In Touch
        </motion.h2>

        <motion.p variants={itemVariants} className="text-text/70 text-base max-w-lg mx-auto">
          Whether you have a question, a project idea, or just want to say hi — I'm currently open to new opportunities and I'll get back to you as soon as possible!
        </motion.p>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-2">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.92 }}
              aria-label={social.name}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-text/60 hover:text-text transition-colors duration-200"
              style={{ '--s-color': social.color } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${social.color}50`;
                (e.currentTarget as HTMLElement).style.color = social.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
                (e.currentTarget as HTMLElement).style.color = '';
              }}
            >
              {social.svg}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 w-full max-w-md">
          <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10" />
          <span className="text-xs text-text/30 font-mono">or send a message</span>
          <div className="h-[1px] flex-1 bg-black/10 dark:bg-white/10" />
        </motion.div>

        <motion.form 
          variants={itemVariants} 
          className="w-full max-w-md mx-auto space-y-4 text-left"
          onSubmit={handleSend}
        >
          <motion.div variants={itemVariants} className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-text/70 px-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-text transition-all placeholder:text-text/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:bg-black/5 dark:focus:bg-white/8"
              placeholder="John Doe"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-text/70 px-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-text transition-all placeholder:text-text/30 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
              placeholder="hello@example.com"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium text-text/70 px-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-text transition-all placeholder:text-text/30 resize-none outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
              placeholder="Hello..."
            />
          </motion.div>
          
          <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={btnState === 'loading' || btnState === 'success'}
              className="btn-pulse-wrapper w-full font-medium py-3.5 rounded-xl transition-all mt-4 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              style={{
                background: btnState === 'success'
                  ? 'linear-gradient(135deg, #10b981, #059669)'
                  : btnState === 'error'
                  ? 'linear-gradient(135deg, #ef4444, #b91c1c)'
                  : 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                opacity: btnState === 'loading' ? 0.8 : 1,
                transform: btnState === 'idle' ? undefined : 'none',
              }}
            >
              {btnState === 'idle' && <span className="text-white">Send Message</span>}
              {btnState === 'loading' && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  <span className="text-white">Sending...</span>
                </>
              )}
              {btnState === 'success' && (
                <>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white">Message Sent!</span>
                </>
              )}
              {btnState === 'error' && (
                <>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-white">Failed to send</span>
                </>
              )}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
}
