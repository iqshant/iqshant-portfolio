import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'

const COURSES = [
  'Network Security',
  'Distributed Systems',
  'Optimization Techniques',
  'Generative AI',
  'Machine Learning',
  'Data Structures and Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Object-Oriented Programming',
]

/**
 * An infinite, drag-to-scroll strip styled like a chess notation
 * ticker. Auto-drifts at a slow constant speed, and the visitor can
 * grab it and fling it with real inertia — pauses the drift while
 * dragging, then resumes once momentum settles.
 */
export default function CourseMarquee() {
  const x = useMotionValue(0)
  const trackRef = useRef(null)
  const [segmentWidth, setSegmentWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const driftRef = useRef(null)

  // measure one copy of the list so we can wrap it seamlessly
  useEffect(() => {
    if (trackRef.current) {
      setSegmentWidth(trackRef.current.scrollWidth / 2)
    }
  }, [])

  function wrap(value) {
    if (!segmentWidth) return value
    let v = value % segmentWidth
    if (v > 0) v -= segmentWidth
    return v
  }

  // slow continuous drift, paused while the user is dragging
  useEffect(() => {
    if (!segmentWidth || isDragging) return
    let raf
    let last = performance.now()
    const speed = 26 // px per second

    function tick(now) {
      const dt = (now - last) / 1000
      last = now
      x.set(wrap(x.get() - speed * dt))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [segmentWidth, isDragging])

  function handleDragEnd(_, info) {
    setIsDragging(false)
    // fling with inertia based on release velocity, then wrap seamlessly
    const target = wrap(x.get() + info.velocity.x * 0.18)
    animate(x, target, {
      type: 'inertia',
      velocity: info.velocity.x,
      power: 0.25,
      timeConstant: 250,
      modifyTarget: (t) => wrap(t),
    })
  }

  const items = [...COURSES, ...COURSES]

  return (
    <div className="relative overflow-hidden border-y hairline py-6 md:py-8">
      <motion.div
        ref={trackRef}
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className="flex w-max cursor-grab active:cursor-grabbing select-none"
      >
        {items.map((course, i) => (
          <div
            key={`${course}-${i}`}
            className="flex items-center shrink-0 pr-10 md:pr-14"
          >
            <span className="font-mono text-lg md:text-2xl text-paper/85 whitespace-nowrap">
              {course}
            </span>
            <span className="font-mono text-square/70 pl-10 md:pl-14">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
