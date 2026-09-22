import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={closeMenu}>
        <img src="/logo.png" alt="SM logo" />
        <span>Saumya Mathur</span>
      </a>

      <nav className={`nav-links ${open ? "nav-open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </nav>

      <button
        className="menu-button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}

export default Navbar;