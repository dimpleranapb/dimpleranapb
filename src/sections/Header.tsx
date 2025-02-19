export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full z-10 top-3">
      <nav
        className="flex gap-1 p-1 text-lg border border-white/15 rounded-full bg-white/10 backdrop-blur"
        aria-label="Main Navigation"
      >
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:text-white/70"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
