import Image from "next/image"

const ClientLogoSection = () => {
  return (
    <section>
      <div className="container mx-auto px-3">
        <div className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-text sm:text-4xl sm:leading-tight">
                <span className="inline-block text-primary">Trusted by</span>{' '}world class companies, design teams & popular designers</h2>
            </div>

            <div className="grid items-center max-w-4xl grid-cols-2 mx-auto mt-12 md:mt-20 md:grid-cols-4 gap-x-10 gap-y-16">
              <div>
                <Image className="object-contain w-full h-6 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png" alt="" width={"100"} height={"100"} />
              </div>

              <div>
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png" alt="" width={"100"} height={"100"} />
              </div>

              <div>
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png" alt="" width={"100"} height={"100"} />
              </div>

              <div>
                <Image className="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png" alt="" width={"100"} height={"100"} />
              </div>

              <div className="hidden md:block">
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png" alt="" width={"100"} height={"100"} />
              </div>

              <div className="hidden md:block">
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png" alt="" width={"100"} height={"100"} />
              </div>

              <div className="hidden md:block">
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png" alt="" width={"100"} height={"100"} />
              </div>

              <div className="hidden md:block">
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png" alt="" width={"100"} height={"100"} />
              </div>

              <div className="hidden md:block">
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png" alt="" width={"100"} height={"100"} />
              </div>

              <div className="hidden md:block">
                <Image className="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png" alt="" width={"100"} height={"100"} />
              </div>

              <div className="hidden md:block">
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png" alt="" width={"100"} height={"100"} />
              </div>

              <div className="hidden md:block">
                <Image className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png" alt="" width={"100"} height={"100"} />
              </div>
            </div>

            <div className="flex items-center justify-center mt-10 space-x-3 md:hidden">
              <div className="w-2.5 h-2.5 rounded-full bg-accent block"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-accent block"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-accent block"></div>
            </div>

            <p className="mt-10 text-base font-semibold text-center text-primary md:mt-20">and 100+ more companies</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogoSection