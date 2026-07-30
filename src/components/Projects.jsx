import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    name: 'ExplainMate',
    period: 'May – Jun 2025',
    subtitle: 'Explainable Chess Position Commentary',
    stack: ['Spring Boot 3', 'PostgreSQL', 'PyTorch', 'GPT-2', 'Stockfish'],
    points: [
      'Parsed PGN/FEN and extracted Stockfish features to fine-tune GPT-2, cutting perplexity from 30.0 to 18.9.',
      'Designed a commentary pipeline built on evaluation scores and tactical motifs.',
      'Integrated the pipeline across Spring Boot 3, PostgreSQL, and PyTorch — insight that helped push a chess rating past 2350.',
    ],
  },
  {
    name: 'MedSync',
    period: '2025',
    subtitle: 'Cloud-Assisted IoT Smart Medication Dispenser · Capstone',
    stack: ['ESP32', 'MQTT', 'Firebase', 'IoT'],
    points: [
      'Engineered a cloud-assisted IoT medication dispenser with biometric authentication and automated scheduling, lifting adherence by 40%.',
      'Wired MQTT and Firebase together for secure cloud connectivity and real-time alerts.',
      'Optimized ESP32 firmware, cutting communication errors by 25%.',
    ],
  },
  {
    name: 'PlaceVerse',
    period: '2025',
    subtitle: 'College Placement Portal',
    stack: ['React.js', 'Firebase'],
    points: [
      'Built a React.js and Firebase placement portal covering student profiles, company listings, and real-time search.',
      'Shipped authentication, dynamic filtering, and responsive UI components.',
      'Cut down manual placement-tracking effort for the department.',
    ],
  },
]

export default function Projects() {
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  const x = useMotionValue(0)
  const [bounds, setBounds] = useState({ min: 0, max: 0 })
  const [active, setActive] = useState(0)
  const cardWidth = useRef(0)

  useEffect(() => {
    function measure() {
      if (!trackRef.current || !containerRef.current) return
      const trackW = trackRef.current.scrollWidth
      const containerW = containerRef.current.offsetWidth
      cardWidth.current = trackW / PROJECTS.length
      setBounds({ min: -(trackW - containerW), max: 0 })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  function goTo(index) {
    const clamped = Math.max(0, Math.min(PROJECTS.length - 1, index))
    const target = Math.max(bounds.min, -clamped * cardWidth.current)
    setActive(clamped)
    animate(x, target, { type: 'spring', stiffness: 260, damping: 32 })
  }

  function handleDragEnd(_, info) {
    const projected = x.get() + info.velocity.x * 0.2
    const nearestIndex = Math.round(-projected / (cardWidth.current || 1))
    goTo(nearestIndex)
  }

  return (
    <section id="projects" className="relative bg-ink py-28 md:py-36 overflow-hidden">
      <div className="px-6 md:px-10 flex items-end justify-between mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-[11vw] md:text-[5vw] leading-none text-paper"
        >
          Selected work
        </motion.h2>
        <span className="hidden md:block font-mono text-sm text-chalk">
          {String(active + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')} — drag to browse
        </span>
      </div>

      <div ref={containerRef} className="px-6 md:px-10">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={bounds}
          dragElastic={0.08}
          onDragEnd={handleDragEnd}
          style={{ x }}
          className="flex gap-6 md:gap-8 w-max cursor-grab active:cursor-grabbing"
        >
          {PROJECTS.map((project, i) => (
            <article
              key={project.name}
              className="group w-[85vw] md:w-[46vw] lg:w-[38vw] shrink-0 rounded-3xl border hairline bg-graphite p-8 md:p-10 select-none"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-paper">
                    {project.name}
                  </h3>
                  <p className="font-mono text-xs text-square mt-2 uppercase tracking-[0.15em]">
                    {project.period}
                  </p>
                </div>
                <ArrowUpRight
                  size={28}
                  className="text-chalk group-hover:text-square group-hover:rotate-45 transition-all duration-300 shrink-0"
                />
              </div>

              <p className="text-paper/90 text-lg mb-6">{project.subtitle}</p>

              <ul className="space-y-3 mb-8">
                {project.points.map((point) => (
                  <li key={point} className="text-chalk text-sm leading-relaxed pl-4 border-l hairline">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-paper/70 border hairline rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </div>

      <div className="flex gap-2 mt-10 px-6 md:px-10">
        {PROJECTS.map((project, i) => (
          <button
            key={project.name}
            onClick={() => goTo(i)}
            aria-label={`Show ${project.name}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? 'w-8 bg-square' : 'w-4 bg-chalk/40 hover:bg-chalk'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
