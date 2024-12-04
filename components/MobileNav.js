import { Navlinks } from "@/constants/NavLinks"
import OnetekFullLogo from "@/icons/OnetekFullLogo"
import Link from "next/link"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const MobileNav = () => {
    return (
        <nav className="lg:hidden">
            <div className="container mx-auto px-3 py-6">
                <div className="flex justify-between ">

                    <div>
                        <Link href={"/"}>
                            <OnetekFullLogo />
                        </Link>
                    </div>
                    <Menu>
                        <MenuButton className="">
                            <Bars3Icon className="size-9" />
                        </MenuButton>
                        <MenuItems anchor="bottom end" className="data-[open]:bg-text px-8 py-4">
                            {Navlinks.map((links) => (
                                <MenuItem key={links.label}>
                                    <a className="block text-background py-2" href={links.link}>
                                        {links.label}
                                    </a>
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}

export default MobileNav