import Link from "next/link";

const Copyright = () => {
    const year = new Date().getFullYear();
    return (
        <div className="bg-text">
            <div className="container mx-auto px-3">
                <div className="py-2 flex justify-between">
                    <div className="text-background text-sm">
                        © {year} Onetekus.com
                    </div>
                    <div className="text-background text-sm">
                        <Link href={""} className="mr-2 md:mr-9">Terms & Conditions</Link>
                        <Link href={""}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;