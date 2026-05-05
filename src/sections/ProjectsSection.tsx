import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { FadeIn } from '../components/FadeIn'
import { LiveProjectButton } from '../components/LiveProjectButton'

const projects = [
  {
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
]

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={containerRef}
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 relative"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-20 sm:mb-28 md:mb-40">
        <h2 className="
          hero-heading
          font-black
          uppercase
          text-center
          text-[clamp(3rem,12vw,160px)]
        ">
          Project
        </h2>
      </FadeIn>

      {/* Projects stack */}
      <div className="max-w-6xl mx-auto space-y-0">
        {projects.map((project, index) => {
          const totalCards = projects.length
          const targetScale = 1 - (totalCards - 1 - index) * 0.03

          const scale = useTransform(
            scrollYProgress,
            [index / totalCards, 1],
            [1, targetScale]
          )

          return (
            <motion.div
              key={index}
              style={{
                scale,
                top: `${index * 28}px`,
              }}
              className="sticky top-24 md:top-32 h-[85vh] flex items-center"
            >
              <div className="
                w-full
                rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
                border-2 border-[#D7E2EA]
                bg-[#0C0C0C]
                p-4 sm:p-6 md:p-8
              ">
                {/* Top row */}
                <div className="flex justify-between items-start mb-6 sm:mb-8 md:mb-10">
                  <div className="flex-1">
                    <p className="
                      hero-heading
                      font-black
                      text-[clamp(3rem,10vw,140px)]
                      leading-none
                      mb-4
                    ">
                      {project.number}
                    </p>

                    <div className="flex flex-col gap-2">
                      <p className="text-[#D7E2EA]/60 font-light text-sm uppercase tracking-wide">
                        {project.category}
                      </p>
                      <h3 className="
                        text-[#D7E2EA]
                        font-medium
                        uppercase
                        text-[clamp(1.2rem,3vw,2.5rem)]
                      ">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <LiveProjectButton />
                </div>

                {/* Image grid */}
                <div className="grid grid-cols-10 gap-4 h-[clamp(300px,45vh,600px)]">
                  {/* Left column - 2 stacked images (40%) */}
                  <div className="col-span-4 flex flex-col gap-4">
                    <img
                      src={project.images.col1[0]}
                      alt={`${project.name} - Image 1`}
                      className="
                        w-full
                        h-[clamp(130px,16vw,230px)]
                        rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
                        object-cover
                      "
                      loading="lazy"
                    />
                    <img
                      src={project.images.col1[1]}
                      alt={`${project.name} - Image 2`}
                      className="
                        w-full
                        h-[clamp(160px,22vw,340px)]
                        rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
                        object-cover
                        flex-1
                      "
                      loading="lazy"
                    />
                  </div>

                  {/* Right column - 1 tall image (60%) */}
                  <div className="col-span-6 h-full">
                    <img
                      src={project.images.col2}
                      alt={`${project.name} - Featured`}
                      className="
                        w-full
                        h-full
                        rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
                        object-cover
                      "
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Spacer for scrolling */}
        <div className="h-96" />
      </div>
    </section>
  )
}