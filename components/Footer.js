import OnetekFullLogo from "@/icons/OnetekFullLogo";
import Link from "next/link"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer id="contact" className="bg-accent/10">
            <div className="container mx-auto px-3">
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="sm:col-span-2">
                            <Link
                                href="/"
                                aria-label="Go home"
                                title="Company"
                                className="inline-flex items-center"
                            >
                                <OnetekFullLogo />
                            </Link>
                            <div className="mt-6 lg:max-w-sm">
                                <p className="text-sm text-text">
                                    Innovative technology solutions driving business growth and success in a digital world.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <p className="text-base font-bold tracking-wide text-text">
                                Contacts
                            </p>
                            <div className="flex">
                                <a
                                    href="tel:+1 (325) 244-9851"
                                    aria-label="Our phone"
                                    title="Our phone"
                                    className="transition-colors duration-300 text-text hover:text-primary"
                                >
                                    +1 (325) 244-9851
                                </a>
                            </div>
                            <div className="flex">
                                <a
                                    href="mailto:contact@onetekus.com"
                                    aria-label="Our email"
                                    title="Our email"
                                    className="transition-colors duration-300 text-text hover:text-primary"
                                >
                                    contact@onetekus.com
                                </a>
                            </div>
                            <div className="flex">
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Our address"
                                    title="Our address"
                                    className="transition-colors duration-300 text-text hover:text-primary"
                                >
                                    5900 Balcones DR STE 4000,
                                    <br />
                                    Austin, TX 78731

                                </a>
                            </div>
                        </div>
                        <div>
                            <span className="text-base font-bold tracking-wide text-text">
                                Social
                            </span>
                            <div className="flex items-center mt-1 space-x-3">
                                <Link
                                    href="/"
                                    className="text-text transition-colors duration-300 hover:text-primary"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/"
                                    className="text-text transition-colors duration-300 hover:text-primary"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                    </svg>
                                </Link>
                            </div>
                            <p className="mt-4 text-sm text-text">
                                Follow us for the latest updates, insights, and innovations. Join our community to engage, learn, and stay connected with Onetek Software Solutions.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-accent/50 lg:flex-row">
                        <p className="text-sm text-text">
                            © Copyright {year} Onetekus.com. All rights reserved.
                        </p>
                        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-text transition-colors duration-300 hover:text-primary"
                                >
                                    F.A.Q
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-text transition-colors duration-300 hover:text-primary"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-text transition-colors duration-300 hover:text-primary"
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer