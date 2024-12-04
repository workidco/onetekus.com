import Copyright from "@/components/Copyright";
import "./globals.css";
import { Inter } from "next/font/google"
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Onetek Software Solutions",
  description: "IT Consulting, Software Development, Staffing & Recruitment, Technology Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Nav />
        <MobileNav />
        {children}
        <Footer />
        {/* <Copyright /> */}
      </body>
    </html>
  );
}
