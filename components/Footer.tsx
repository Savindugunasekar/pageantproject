import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-200 to-yellow-400">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10 text-center">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <Link href="/" className="flex items-center mb-6 sm:mb-0 space-x-3">
            <img
              src="/logo.svg"
              className="h-10 drop-shadow-md"
              alt="Company Logo"
            />
            
          </Link>
          <ul className="flex flex-wrap items-center text-md font-medium text-white sm:mb-0">
            <li>
              <Link href="/about" className="hover:text-slate-600 transition-colors me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-slate-600 transition-colors me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/licensing" className="hover:text-slate-600 transition-colors me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-slate-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8 " />
        <span className="block text-sm text-white sm:text-center">
          © {new Date().getFullYear()} <Link href="/" className="hover:underline text-white not-first:font-semibold">CompanyName™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
