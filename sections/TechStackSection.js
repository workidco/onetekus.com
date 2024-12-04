import { TechStackContent } from "@/constants/TectStackContent"
import { CircleStackIcon, CloudIcon, CpuChipIcon, CursorArrowRippleIcon, DevicePhoneMobileIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid"

const TechStackSection = () => {
  return (
    <section className="bg-text">
      <div className="container mx-auto px-3">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-sm tracking-wider text-background uppercase rounded-full bg-accent font-light">
                Tech Stack
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-background sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-primary lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="07690130-d013-42bc-83f4-90de7ac68f76"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Unlock the Power of</span>
              </span>{' '}
              <span className="inline-block text-primary">
                Cutting-Edge Technology
              </span>
            </h2>
            <p className="text-base text-background md:text-lg">
              Our diverse and robust tech stack empowers us to create scalable, high-performance solutions tailored to your business needs. With expertise in the latest tools and technologies, we ensure your success in a rapidly evolving digital landscape.
            </p>
          </div>

          <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0">
            {TechStackContent.map((data) => (
              <div className="space-y-6 sm:px-16 pb-9" key={data.title}>
                <div className="flex flex-col max-w-md sm:flex-row">
                  <div className="mb-4 mr-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      {data.icon}
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-3 text-xl font-bold leading-5 text-background">
                      {data.title}
                    </h6>
                    <p className="text-base font-light text-background">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackSection