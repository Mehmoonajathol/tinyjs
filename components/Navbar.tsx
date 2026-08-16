import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-[#0056b3]">
      <div className="flex justify-between items-center px-6 md:px-20 py-5">

        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-white text-3xl md:text-4xl font-bold no-underline"
          >
            TinyURL
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none">

            <li>
              <Link
                href="/"
                className="text-white text-[17px] hover:text-[#9ed8ff] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/plans"
                className="text-white text-[17px] hover:text-[#9ed8ff] transition"
              >
                Plans
              </Link>
            </li>

            <li>
              <Link
                href="/blog"
                className="text-white text-[17px] hover:text-[#9ed8ff] transition"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/features"
                className="text-white text-[17px] hover:text-[#9ed8ff] transition"
              >
                Features
              </Link>
            </li>

            <li>
              <Link
                href="/domains"
                className="text-white text-[17px] hover:text-[#9ed8ff] transition"
              >
                Domains
              </Link>
            </li>

          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="text-white font-semibold no-underline"
          >
            Log In
          </Link>

          <Link
            href="/signup"
            className="bg-[#19b6ff] text-white px-5 py-2.5 rounded-lg hover:bg-[#008fd6] transition no-underline"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;