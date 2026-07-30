import { useRef } from 'react'
import { motion } from 'framer-motion'

const GROUPS = [
  {
    label: 'Web Development',
    items: ['React.js', 'HTML', 'CSS', 'Firebase'],
  },
  {
    label: 'Programming Languages',
    items: ['C++', 'C', 'Python', 'JavaScript', 'SQL'],
  },
  {
    label: 'Core CS',
    items: [
      'Data Structures and Algorithms',
      'OOP',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
    ],
  },
  {
    label: 'Tools & Technologies',
    items: ['VS Code', 'GitHub', 'MySQL', 'Colab', 'PowerBI', 'Linux', 'Git'],
  },
]

function TagGroup({ label, items, index }) {
  const containerRef = useRef(null)

  return (
    <div className="py-10 border-b hairline last:border-b-0">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-square mb-6"
      >
        {label}
      </motion.p>
      <div ref={containerRef} className="relative flex flex-wrap gap-3 md:gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item}
            drag
            dragConstraints={containerRef}
            dragElastic={0.5}
            whileDrag={{ scale: 1.08, zIndex: 20, cursor: 'grabbing' }}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.05 * i }}
            whileHover={{ rotate: 0, borderColor: '#D9C36A', color: '#D9C36A' }}
            className="cursor-grab select-none rounded-full border hairline px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base text-paper/85 bg-graphite"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink px-6 md:px-10 py-28 md:py-36">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-medium text-[10vw] md:text-[5vw] leading-none text-paper mb-4"
      >
        Skills
      </motion.h2>
      <p className="text-chalk max-w-md mb-10">
        Everything here is draggable — pick a tag up, throw it around.
      </p>

      <div>
        {GROUPS.map((group, i) => (
          <TagGroup key={group.label} index={i} {...group} />
        ))}
      </div>
    </section>
  )
}
