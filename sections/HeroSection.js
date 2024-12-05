import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="">
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-sm font-light tracking-wider text-background uppercase rounded-full bg-accent">
                  New Colaborations
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-text sm:text-4xl sm:leading-none">
                Transform Your Business with Expert
                {' '}
                <span className="inline-block text-primary">
                  IT Solutions
                </span>
              </h2>
              <p className="text-base text-text md:text-lg">
                Onetek Software Solutions delivers innovative, scalable technology solutions to help your business thrive in a digital world.
              </p>
            </div>
            <div className="flex items-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-background transition duration-200 rounded shadow-md bg-primary hover:bg-primary/80 focus:shadow-outline focus:outline-none"
              >
                Apply Now
              </Link>
              <Link
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-text transition-colors duration-200 hover:text-primary"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <Image
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/hero-1.png"
            alt="Hero Image"
            width={900}
            height={900}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

