type Page = "home" | "about" | "outreach" | "accomplishments" | "contact" | "services";

interface FooterProps {
  onNav: (p: Page) => void;
}

export default function Footer({ onNav }: FooterProps) {
  return (
    <footer
      className="mt-auto"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(245,196,0,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="https://cybertronicpenguinz.com/wp-content/uploads/2025/05/Cybertronic_Penguin_Logo_Transparent_160x160.png"
              alt="Cybertronic PenguinZ Logo"
              className="w-14 h-14 object-contain flex-shrink-0"
            />
            <div>
              <span
                className="text-base font-bold block leading-tight"
                style={{ fontFamily: "Rajdhani", color: "#f5c400", letterSpacing: "0.04em" }}
              >
                CYBERTRONIC PENGUINZ
              </span>
              <span
                className="text-xs block mt-0.5"
                style={{ fontFamily: "JetBrains Mono", color: "#888888", letterSpacing: "0.06em" }}
              >
                FTC TEAM #24135
              </span>
              <span
                className="text-xs block"
                style={{ fontFamily: "JetBrains Mono", color: "#555555", letterSpacing: "0.06em" }}
              >
                Calgary, Alberta, Canada
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed max-w-xs mb-2" style={{ color: "#888888" }}>
            Knowledge · Leadership · Passion · Perseverance · Success
          </p>
          <p className="text-xs leading-relaxed max-w-xs mb-6" style={{ color: "#555555" }}>
            A Calgary-based FIRST Tech Challenge team of 10 students in grades 8–10, founded in 2023.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/cybertronic_penguinz/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold transition-colors duration-150"
              style={{
                border: "1px solid rgba(245,196,0,0.2)",
                color: "#888888",
                fontFamily: "JetBrains Mono",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#f5c400";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#f5c400";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#888888";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,196,0,0.2)";
              }}
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.youtube.com/@cybertronicpenguinZ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold transition-colors duration-150"
              style={{
                border: "1px solid rgba(245,196,0,0.2)",
                color: "#888888",
                fontFamily: "JetBrains Mono",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#f5c400";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#f5c400";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#888888";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,196,0,0.2)";
              }}
            >
              YOUTUBE
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4
            className="text-xs font-bold mb-5 tracking-widest"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            NAVIGATE
          </h4>
          <ul className="space-y-2.5">
            {(
              [
                { p: "home", l: "Home" },
                { p: "about", l: "About Us" },
                { p: "outreach", l: "Community Impact" },
                { p: "accomplishments", l: "Seasons & Awards" },
              ] as { p: Page; l: string }[]
            ).map((item) => (
              <li key={item.p}>
                <button
                  onClick={() => onNav(item.p)}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "#888888" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#888888")
                  }
                >
                  {item.l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* More */}
        <div>
          <h4
            className="text-xs font-bold mb-5 tracking-widest"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            MORE
          </h4>
          <ul className="space-y-2.5">
            {(
              [
                { p: "services", l: "Support Us" },
                { p: "contact", l: "Contact" },
              ] as { p: Page; l: string }[]
            ).map((item) => (
              <li key={item.p}>
                <button
                  onClick={() => onNav(item.p)}
                  className="text-sm transition-colors duration-150"
                  style={{ color: "#888888" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = "#888888")
                  }
                >
                  {item.l}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(245,196,0,0.08)" }}>
            <p className="text-xs mb-1" style={{ fontFamily: "JetBrains Mono", color: "#555555" }}>
              EMAIL
            </p>
            <a
              href="mailto:cybertronicpenguinz@gmail.com"
              className="text-xs transition-colors duration-150"
              style={{ fontFamily: "JetBrains Mono", color: "#888888", textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#f5c400")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#888888")
              }
            >
              cybertronicpenguinz@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Sponsors strip */}
      <div
        className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center gap-6"
        style={{ borderTop: "1px solid rgba(245,196,0,0.08)" }}
      >
        <span
          className="text-xs tracking-widest flex-shrink-0"
          style={{ fontFamily: "JetBrains Mono", color: "#555555" }}
        >
          SPONSORS:
        </span>
        {["Marda Loop Braces", "C and C Educenter", "SkyFire Energy"].map((s) => (
          <span
            key={s}
            className="text-xs px-3 py-1"
            style={{
              fontFamily: "JetBrains Mono",
              color: "#888888",
              border: "1px solid rgba(245,196,0,0.1)",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div
        className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderTop: "1px solid rgba(245,196,0,0.06)" }}
      >
        <p
          className="text-xs"
          style={{ color: "#555555", fontFamily: "JetBrains Mono" }}
        >
          © 2026 Cybertronic PenguinZ · FTC Team 24135 · Calgary, AB, Canada
        </p>
        <p
          className="text-xs"
          style={{ color: "#555555", fontFamily: "JetBrains Mono" }}
        >
          FIRST Tech Challenge
        </p>
      </div>
    </footer>
  );
}
