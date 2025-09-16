import { NavLink, Link } from "react-router-dom";

const Navber = () => {
  const navOptions = (
    <>
      {[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Service", path: "/service" },
        { name: "Education", path: "/education" },
        { name: "Skills", path: "/skills" },
        { name: "Resume", path: "/resume" },
        { name: "Contact", path: "/contact" },

      ].map((item, i) => (
        <li key={i}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `font-semibold transition duration-300 ${isActive
                ? "text-fuchsia-400 border-b-2 border-fuchsia-400"
                : "hover:text-fuchsia-300"
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar text-white shadow-md px-4 md:px-10 
                    bg-gradient-to-r from-blue-800 to-indigo-700
                    sticky top-0 z-50 backdrop-blur-lg">
      {/* Left: Name */}
      <div className="navbar-start">
        <Link
          to="/"
          className="text-xl  md:text-2xl sm:xl  font-bold tracking-wide 
                     transition duration-300 hover:text-fuchsia-400"
        >
          RAGINA AKTER
        </Link>

        {/* Mobile dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 
                       shadow bg-blue-900 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
      </div>

      {/* Center: Menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navOptions}</ul>
      </div>

      {/* Right: Hire Me button */}
      <div className="navbar-end">
        <Link to="/hire">
          <button className="btn bg-white text-blue-800 rounded-xl px-5 font-semibold 
                             hover:bg-fuchsia-500 hover:text-white 
                             transition duration-300 shadow">
            Hire Me!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navber;
