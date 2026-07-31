import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin, Mail, Phone } from 'lucide-react'

const CONTACTS = [
  { label: 'Email', value: 'iqshantbawa@gmail.com', href: 'mailto:iqshantbawa@gmail.com', Icon: Mail },
  { label: 'Phone', value: '+91 70098 35585', href: 'tel:+917009835585', Icon: Phone },
  { label: 'GitHub', value: 'github.com/iqshant', href: 'https://github.com/iqshant', Icon: Github },
  { label: 'LinkedIn', value: 'linkedin.com/iqshantbawa', href: 'https://linkedin.com/in/iqshantbawa', Icon: Linkedin },
]

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 })

  const bgX = useTransform(sx, [-1, 1], [-24, 24])
  const bgY = useTransform(sy, [-1, 1], [-24, 24])
  const nameX = useTransform(sx, [-1, 1], [-8, 8])
  const nameY = useTransform(sy, [-1, 1], [-8, 8])

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1)
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-ink px-6 md:px-10 pt-32 pb-10"
    >
      {/* subtle checkerboard grain, drifts opposite the cursor for depth */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="pointer-events-none absolute -inset-16 board-grain"
      />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-mono text-xs md:text-sm text-square uppercase tracking-[0.2em]"
        >
          Software Developer / Patiala, India
        </motion.p>
      </div>

      <motion.h1
        style={{ x: nameX, y: nameY }}
        className="relative z-10 font-display font-semibold leading-[0.82] tracking-tightest text-paper select-none"
      >
        <motion.span
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[16vw] md:text-[11vw]"
        >
          Iqshant
        </motion.span>
        <motion.span
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="block text-[16vw] md:text-[11vw] text-transparent [-webkit-text-stroke:1.5px_#EEEAE2] md:[-webkit-text-stroke:2px_#EEEAE2]"
        >
          Bawa
        </motion.span>
      </motion.h1>

      <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-md text-chalk text-base md:text-lg leading-relaxed"
        >
          I build things that sit between systems and people — from a chess
          engine that explains its own thinking, to firmware that quietly
          keeps someone on schedule with their medication.
          <span className="inline-flex items-center gap-1 text-square ml-1">
            Scroll <ArrowDownRight size={16} />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 gap-x-8 gap-y-3 font-mono text-xs md:text-sm"
        >
          {CONTACTS.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex items-center gap-2 text-paper/80 hover:text-square transition-colors"
            >
              <Icon size={14} className="text-chalk group-hover:text-square transition-colors" />
              <span className="border-b border-transparent group-hover:border-square">
                {value}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
