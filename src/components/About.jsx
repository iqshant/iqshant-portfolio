import { motion } from 'framer-motion'
import CourseMarquee from './CourseMarquee.jsx'

const TIMELINE = [
  {
    date: 'Sep 2022 — Jun 2026',
    title: 'B.E., Computer Science',
    place: 'Thapar Institute of Engineering & Technology, Patiala',
    current: true,
  },
  {
    date: 'May 2022',
    title: '12th Grade',
    place: 'Kundan Vidya Mandir',
  },
  {
    date: 'May 2020',
    title: '10th Grade',
    place: 'Sacred Heart Convent School',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="about" className="relative bg-ink px-6 md:px-10 py-28 md:py-36">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="max-w-3xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-square mb-6">
          About
        </p>
        <h2 className="font-display font-medium text-[8vw] md:text-[3.4vw] leading-[1.05] text-paper">
          Currently finishing a Computer Science degree, splitting time
          between coursework and shipping projects that actually get used.
        </h2>
      </motion.div>

      <div className="mt-20 md:mt-28 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-20">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.2em] text-chalk"
        >
          Education
        </motion.p>

        <div className="flex flex-col">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6 py-6 border-b hairline last:border-b-0"
            >
              <div>
                <h3 className="font-display text-xl md:text-2xl text-paper">
                  {item.title}
                  {item.current && (
                    <span className="ml-3 align-middle inline-block w-2 h-2 rounded-full bg-square" />
                  )}
                </h3>
                <p className="text-chalk mt-1">{item.place}</p>
              </div>
              <span className="font-mono text-sm text-chalk shrink-0">
                {item.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.2em] text-chalk mb-6 px-0"
        >
          Coursework — drag the strip
        </motion.p>
        <CourseMarquee />
      </div>
    </section>
  )
}
