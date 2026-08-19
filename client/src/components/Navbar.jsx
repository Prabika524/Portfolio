import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", id: "home" },
  { label: "Experience & Education", id: "experience" },
  { label: "Projects & Publications", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ name = "Prabika Rai" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const firstName = name.split(" ")[0];

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `text-[13px] font-medium tracking-wide transition-colors ${
      active === id
        ? "text-ink underline underline-offset-[6px] decoration-2"
        : "text-gray-500 hover:text-ink"
    }`;

  return (
    <>
      <div className="h-[3px] w-full bg-ink" />
      <header className="sticky top-0 z-40 border-b border-line bg-paper">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="font-display text-xl font-bold text-ink shrink-0">
            {"< "}
            {firstName}
            {" />"}
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a href={`#${link.id}`} className={linkClass(link.id)}>
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <ul className="flex flex-col gap-1 border-t border-line bg-paper px-6 py-4 lg:hidden">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[13px] font-medium tracking-wide text-gray-600"
                >
                  {link.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}
