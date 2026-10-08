const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur border-b border-black/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="font-serif italic font-medium text-black text-2xl">
            Ade Dwi Andika
        </a>
        <ul className="flex gap-6 text-black font-normal">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-black transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
