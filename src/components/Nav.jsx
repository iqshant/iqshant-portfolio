import { motion } from 'framer-motion'
import Magnetic from './Magnetic.jsx'

const LINKS = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-6">
        <a
          href="#top"
          className="font-display text-sm tracking-tightest uppercase text-paper"
        >
          Iqshant Bawa
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Magnetic key={l.href} strength={0.4}>
              <a
                href={l.href}
                className="text-sm text-paper/90 hover:text-square transition-colors duration-300"
              >
                {l.label}
              </a>
            </Magnetic>
          ))}
        </nav>
        <a
          href="mailto:iqshantbawa@gmail.com"
          className="text-sm text-paper border border-paper/30 rounded-full px-4 py-2 hover:border-square hover:text-square transition-colors duration-300"
        >
          Say hi
        </a>
      </div>
    </motion.header>
  )
}
