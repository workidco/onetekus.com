import { AboutUsContent } from '@/constants/AboutUsContent'

const AboutSection = () => {
    return (
        <section id='about'>
            <div className="container mx-auto px-3">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-sm font-light tracking-wider text-background uppercase rounded-full bg-accent">
                                About Us
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative text-text">Discover How</span>
                            {' '}
                            <span className='inline-block text-primary'>
                                Onetek Transforms Your Business
                            </span>
                            <span className='text-text'>
                                with Innovative Solutions
                            </span>
                        </h2>
                        <p className="text-base text-text md:text-lg">
                            Onetek Software Solutions is dedicated to helping businesses succeed in the digital era by providing innovative, reliable, and scalable technology solutions. We focus on delivering tailored strategies that optimize your operations, enhance customer experiences, and drive long-term growth. Our team of experts is committed to supporting your business in navigating the complexities of technology, ensuring that you stay competitive in an ever-evolving digital world.
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
                        {AboutUsContent.map((data) => (
                            <div key={data.title} className="duration-300 transform border-l-4 border-primary hover:-translate-y-2">
                                <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                                    <h6 className="mb-2 font-semibold leading-5">{data.title}</h6>
                                    <p className="text-sm text-gray-900">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection