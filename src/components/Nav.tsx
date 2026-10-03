import { useState } from "react";

type Page =
  | "home"
  | "about"
  | "outreach"
  | "accomplishments"
  | "contact"
  | "services";

interface NavProps {
  current: Page;
  onNav: (p: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Community", page: "outreach" },
  { label: "Seasons", page: "accomplishments" },
  { label: "Support Us", page: "services" },
  { label: "Contact", page: "contact" },
];

export default function Nav({ current, onNav }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(0,0,0,0.94)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(245,196,0,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => onNav("home")}
          className="flex items-center gap-3 group"
        >
          <img
            src="https://cybertronicpenguinz.com/wp-content/uploads/2025/05/Cybertronic_Penguin_Logo_Transparent_160x160.png"
            alt="Cybertronic PenguinZ Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="text-left">
            <span
              className="text-sm font-bold leading-none block"
              style={{ fontFamily: "Rajdhani", color: "#f5c400", letterSpacing: "0.05em" }}
            >
              CYBERTRONIC PENGUINZ
            </span>
            <span
              className="leading-none block mt-0.5"
              style={{ fontFamily: "JetBrains Mono", color: "#888888", letterSpacing: "0.04em", fontSize: "10px" }}
            >
              Knowledge·Leadership·Passion·Perseverance·Success
            </span>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => onNav(l.page)}
              className="px-3 py-1.5 text-xs transition-colors duration-150"
              style={{
                fontFamily: "Rajdhani",
                fontWeight: 700,
                letterSpacing: "0.07em",
                color: current === l.page ? "#f5c400" : "#b8b8b8",
                borderBottom: current === l.page ? "2px solid #f5c400" : "2px solid transparent",
              }}
            >
              {l.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "#f5c400",
                transform:
                  open && i === 0
                    ? "rotate(45deg) translateY(8px)"
                    : open && i === 1
                    ? "scaleX(0)"
                    : open && i === 2
                    ? "rotate(-45deg) translateY(-8px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-4 flex flex-col gap-1"
          style={{ borderTop: "1px solid rgba(245,196,0,0.1)" }}
        >
          {links.map((l) => (
            <button
              key={l.page}
              onClick={() => {
                onNav(l.page);
                setOpen(false);
              }}
              className="text-left py-2 text-sm"
              style={{
                fontFamily: "Rajdhani",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: current === l.page ? "#f5c400" : "#b8b8b8",
              }}
            >
              {l.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
