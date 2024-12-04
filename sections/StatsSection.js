import { StatsContent } from "@/constants/StatsContent"

const StatsSection = () => {
    return (
        <section className="bg-accent/5">
            <div className="container mx-auto px-3">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                        {StatsContent.map((data) => (
                            <div key={data.figure} className="text-center">
                                <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{data.figure}</h6>
                                <p className="text-sm font-medium tracking-tighter text-primary lg:text-base">
                                    {data.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection