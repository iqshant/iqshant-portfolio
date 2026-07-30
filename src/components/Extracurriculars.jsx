import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const ITEMS = [
  {
    title: 'Saturnalia',
    role: 'Executive Committee, Techno-Cultural Festival',
    date: 'Oct 2023 — Nov 2024',
    points: [
      'Led PR and outreach, expanding social media reach by 60% and event participation by 25%.',
      'Coordinated with 30+ colleges, driving a 40% rise in external registrations.',
    ],
  },
  {
    title: "URJA-TIET'24",
    role: 'Head of Department, Event Management',
    date: 'Feb 2024 — May 2024',
    points: [
      'Designed and implemented process SOPs that improved team coordination efficiency.',
    ],
  },
]

export default function Extracurriculars() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative bg-ink px-6 md:px-10 py-28 md:py-36">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-medium text-[10vw] md:text-[5vw] leading-none text-paper mb-12 md:mb-16"
      >
        Beyond the code
      </motion.h2>

      <div className="max-w-3xl border-t hairline">
        {ITEMS.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.title} className="border-b hairline">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-6 py-7 text-left"
              >
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-paper">
                    {item.title}
                  </h3>
                  <p className="text-chalk text-sm mt-1">{item.role}</p>
                </div>
                <div className="flex items-center gap-6 shrink-0">
                  <span className="font-mono text-xs text-chalk hidden md:block">
                    {item.date}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-square"
                  >
                    <Plus size={22} />
                  </motion.span>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="pb-7 space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="text-chalk text-sm md:text-base leading-relaxed pl-4 border-l hairline">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
