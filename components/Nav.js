import { Navlinks } from "@/constants/NavLinks"
import OnetekFullLogo from "@/icons/OnetekFullLogo"
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="max-lg:hidden">
            <div className="container mx-auto px-3 py-6 border-b border-b-primary/50">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href={"/"}>
                            <OnetekFullLogo />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-9">
                        {Navlinks.map((links) => (
                            <div key={links.label} className="">
                                <Link href={links.link} className="text-text hover:text-primary">
                                    {links.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav