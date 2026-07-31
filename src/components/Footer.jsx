import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Magnetic from './Magnetic.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink px-6 md:px-10 pt-28 md:pt-36 pb-10">
      <div className="absolute inset-0 board-grain pointer-events-none" />

      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-square mb-6"
        >
          Get in touch
        </motion.p>

        <Magnetic strength={0.15}>
          <a
            href="mailto:iqshantbawa@gmail.com"
            className="block font-display font-medium text-[11vw] md:text-[6.5vw] leading-[0.95] text-paper hover:text-square transition-colors duration-300"
          >
            iqshantbawa@gmail.com
          </a>
        </Magnetic>

        <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-t hairline pt-8">
          <div className="flex gap-6">
            <a
              href="https://github.com/iqshant"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-chalk hover:text-square transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/iqshantbawa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-chalk hover:text-square transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="tel:+917009835585"
              className="flex items-center gap-2 text-chalk hover:text-square transition-colors"
            >
              <Mail size={18} /> +91 70098 35585
            </a>
          </div>
          <p className="font-mono text-xs text-chalk">
            © {new Date().getFullYear()} Iqshant Bawa. Built with React &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
