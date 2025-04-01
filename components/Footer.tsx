import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10 text-center">
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8 " />
        <div className="sm:flex sm:items-center sm:justify-between ">
          <Link href="/" className="flex items-center mb-6 sm:mb-0 space-x-3">
            <img
              src="/logo2.png"
              className="h-10 drop-shadow-md"
              alt="Company Logo"
            />
          </Link>
          <ul className="flex flex-wrap items-center text-md font-medium text-gray-500 sm:mb-0">
            <li>
              <Link
                href="/about"
                className="hover:text-slate-600 transition-colors me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-slate-600 transition-colors me-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/licensing"
                className="hover:text-slate-600 transition-colors me-6"
              >
                Licensing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-slate-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8 " />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link
            href="/"
            className="hover:underline text-gray-500 not-first:font-semibold"
          >
            CompanyName™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
