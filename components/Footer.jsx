import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-12 md:py-16">
        <div className="mx-auto grid grid-cols-1 gap-x-5 gap-y-14 text-white sm:grid-cols-3">
          <div>
            <h3 className="mb-5 text-2xl font-semibold">LuminaLore</h3>
            <p className="max-w-[260px] font-source_serif text-white/80">
              At LuminaLore, we're on a journey to illuminate minds and inspire
              curiosity.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-semibold">Quick Links</h3>
            <div className="flex flex-col items-start gap-3 text-white/80">
              <Link
                className="transition-all duration-300 hover:text-primary"
                href="/about"
              >
                About us
              </Link>
              <Link
                className="transition-all duration-300 hover:text-primary"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="transition-all duration-300 hover:text-primary"
                href="/contact"
              >
                Contact us
              </Link>
              <Link
                className="transition-all duration-300 hover:text-primary"
                href="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-semibold">Follow us</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A82ED] text-lg transition-all duration-300 hover:bg-primary"
                href="#"
              >
                <FaFacebookF />
              </Link>
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] text-lg transition-all duration-300 hover:bg-primary"
                href="#"
              >
                <FaYoutube />
              </Link>
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#50ABF1] text-lg transition-all duration-300 hover:bg-primary"
                href="#"
              >
                <FaTwitter />
              </Link>
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#007FBC] text-lg transition-all duration-300 hover:bg-primary"
                href="#"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E60023] text-lg transition-all duration-300 hover:bg-primary"
                href="#"
              >
                <FaPinterestP />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="pb-5 text-center text-white/80">
        © {new Date().getFullYear()} LuminaLore. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
