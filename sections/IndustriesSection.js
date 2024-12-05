import { IndustriesContent } from "@/constants/IndustriesContent"
import { BanknotesIcon, EyeIcon, HomeModernIcon, ShoppingCartIcon, AcademicCapIcon, SignalIcon, ShoppingBagIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline"

const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-primary/5">
      <div className="container mx-auto px-3">
        <div className="">
          <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0 blur-lg">
              <svg
                viewBox="0 0 88 88"
                className="w-full max-w-screen-xl text-primary/10"
              >
                <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="44"
                />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="37.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="29.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="22.5"
                />
              </svg>
            </div>

            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-sm font-light tracking-wider text-background uppercase rounded-full bg-accent">
                  Industries
                </p>
              </div>
              <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-text sm:text-4xl md:mx-auto">
                <span className="relative text-text">Transforming Industries with</span>
                {' '}
                <span className='inline-block text-primary'>
                  Innovative
                </span>
                <span className='text-text'>
                  Technology Solutions
                </span>
              </h2>
            </div>


            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {IndustriesContent.map((data) => (
                <div key={data.title} className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-background rounded shadow-xl group hover:shadow-2xl">
                  <div className="p-5">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 text-primary">
                      {data.icons}
                    </div>
                    <p className="mb-2 font-bold">{data.title}</p>
                    <p className="text-sm leading-5 text-text">
                      {data.description}
                    </p>
                  </div>
                  <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-primary group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection