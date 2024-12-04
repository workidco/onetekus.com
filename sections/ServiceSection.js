import { ServicesContent } from "@/constants/ServicesContent"
import Link from "next/link"

const ServiceSection = () => {
  return (
    <section id="services" className="bg-accent/5">
      <div className="container mx-auto px-3">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
                Comprehensive
                <span className="inline-block text-primary">
                  IT Services
                </span>
                {" "}to Drive Your Business Forward
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-gray-700 md:text-lg">
                At Onetek, we provide a full range of services designed to empower your business with the technology and expertise needed to succeed. From strategic IT consulting to custom software solutions, staffing, and efficient technology management, our team is committed to delivering innovative solutions that fuel your growth and success.
              </p>
            </div>
          </div>
          <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {ServicesContent.map((data) => (
              <div key={data.title} className="max-w-md">
                <div className="flex items-center justify-start w-16 h-16 mb-4">
                  <svg
                    className="w-12 h-12 text-primary"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5">{data.title}</h6>
                <p className="mb-3 text-sm text-gray-900">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection