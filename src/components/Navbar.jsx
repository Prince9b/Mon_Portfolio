import { useState } from "react";
import { Container, Menu, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#Home" },
  { label: "À propos", href: "#Apropos" },
  { label: "Compétences", href: "#Competences" },
  { label: "Projets", href: "#Projets" },
  { label: "Contact", href: "#Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/90 backdrop-blur-xl">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8"
      >
        <a
          href="#Home"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <Container className="size-5 text-accent" aria-hidden="true" />P
          <span className="text-accent">DEV</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-base-content/70 transition-colors hover:bg-base-200 hover:text-base-content"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="btn btn-ghost btn-sm btn-square md:hidden"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="border-t border-base-content/10 bg-base-100 px-5 py-3 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm text-base-content/75 transition-colors hover:bg-base-200 hover:text-base-content"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
