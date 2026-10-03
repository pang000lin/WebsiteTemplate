type Page = "home" | "about" | "outreach" | "accomplishments" | "contact" | "services";

interface HomeProps {
  onNav: (p: Page) => void;
}

const stats = [
  { value: "5", label: "Awards Won" },
  { value: "70+", label: "Matches Played" },
  { value: "250+", label: "Build Hours" },
  { value: "50+", label: "Outreach Hours" },
];

const highlights = [
  {
    imgNum: 5,
    title: "Community Impact",
    desc: "ALS runs, Griffith Woods cleanups, and community workshops across Calgary — giving back is part of who we are.",
    page: "outreach" as Page,
  },
  {
    imgNum: 6,
    title: "Meet the Team",
    desc: "Ten students, grades 8–10, from Calgary. We started in FLL, reached Worlds, and stepped up to FTC.",
    page: "about" as Page,
  },
  {
    imgNum: 7,
    title: "Our Seasons",
    desc: "From CENTERSTAGE to INTO THE DEEP — every season we compete harder, earn more, and grow as engineers.",
    page: "accomplishments" as Page,
  },
];

const sponsors = [
  { name: "Marda Loop Braces", desc: "Orthodontics – Dr. Chen", imgNum: 2 },
  { name: "C and C Educenter", desc: "K-12 tutoring, Calgary", imgNum: 3 },
  { name: "SkyFire Energy", desc: "Western Canada solar", imgNum: 4 },
];

export default function Home({ onNav }: HomeProps) {
  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d" }}>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(200,160,0,0.18) 0%, transparent 70%), #0d0d0d",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,196,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,196,0,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(245,196,0,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(200,200,200,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl">
          {/* Logo */}
          <img
            src="/imports/TED_2417.JPG"
            alt="Cybertronic PenguinZ"
            className="w-24 h-24 object-contain mx-auto mb-6"
            style={{ filter: "drop-shadow(0 0 20px rgba(245,196,0,0.4))" }}
          />

          <div
            className="inline-block mb-4 px-3 py-1 text-xs font-bold tracking-widest"
            style={{
              fontFamily: "JetBrains Mono",
              color: "#f5c400",
              border: "1px solid rgba(245,196,0,0.3)",
              background: "rgba(245,196,0,0.06)",
            }}
          >
            FTC TEAM #24135 · CALGARY, CANADA
          </div>

          <h1
            className="text-6xl sm:text-8xl font-bold leading-none mb-2"
            style={{
              fontFamily: "Rajdhani",
              color: "#f0f0f0",
              letterSpacing: "-0.01em",
            }}
          >
            CYBERTRONIC
          </h1>
          <h1
            className="text-6xl sm:text-8xl font-bold leading-none mb-8"
            style={{
              fontFamily: "Rajdhani",
              background: "linear-gradient(90deg, #f5c400 0%, #d4a800 60%, #f5c400 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.01em",
            }}
          >
            PENGUINZ
          </h1>

          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#888888" }}
          >
            Knowledge · Leadership · Passion · Perseverance · Success
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNav("accomplishments")}
              className="px-8 py-3 font-bold text-sm transition-all duration-150"
              style={{
                fontFamily: "Rajdhani",
                letterSpacing: "0.1em",
                background: "#f5c400",
                color: "#0d0d0d",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#ffd033")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#f5c400")
              }
            >
              OUR SEASONS
            </button>
            <button
              onClick={() => onNav("about")}
              className="px-8 py-3 font-bold text-sm transition-all duration-150"
              style={{
                fontFamily: "Rajdhani",
                letterSpacing: "0.1em",
                border: "1px solid rgba(245,196,0,0.35)",
                color: "#f5c400",
                background: "transparent",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(245,196,0,0.08)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
              }
            >
              MEET THE TEAM
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div
            className="w-px h-12"
            style={{ background: "linear-gradient(to bottom, #f5c400, transparent)" }}
          />
          <span
            className="text-xs"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400", letterSpacing: "0.1em" }}
          >
            SCROLL
          </span>
        </div>
      </section>

      {/* Sponsors */}
      <section
        className="py-16 px-6"
        style={{
          borderTop: "1px solid rgba(245,196,0,0.12)",
          borderBottom: "1px solid rgba(245,196,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <span
                className="text-xs font-bold tracking-widest block mb-2"
                style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
              >
                OUR SUPPORTERS
              </span>
              <h2
                className="text-3xl font-bold"
                style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
              >
                Thank You, Sponsors
              </h2>
            </div>
            <button
              onClick={() => onNav("services")}
              className="text-sm font-bold tracking-wider self-start sm:self-auto"
              style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
            >
              BECOME A SPONSOR →
            </button>
          </div>

          {/* Photo banner */}
          <div className="relative overflow-hidden mb-10" style={{ height: "260px" }}>
            <div className="w-full h-full flex items-center justify-center" style={{ background: "#ffffff" }}>
              <span style={{ fontFamily: "Rajdhani", fontWeight: 700, fontSize: "22px", color: "#333333", letterSpacing: "0.04em" }}>Image_1</span>
            </div>
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.4) 100%)",
              }}
            />
            <div className="absolute bottom-6 left-6">
              <p
                className="text-xs font-bold"
                style={{ fontFamily: "JetBrains Mono", color: "#f5c400", letterSpacing: "0.1em" }}
              >
                // MADE POSSIBLE BY OUR SPONSORS
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="flex flex-col overflow-hidden"
                style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
              >
                <div className="h-40 flex items-center justify-center" style={{ background: "#ffffff" }}>
                  <span style={{ fontFamily: "Rajdhani", fontWeight: 700, fontSize: "20px", color: "#333333", letterSpacing: "0.04em" }}>Image_{s.imgNum}</span>
                </div>
                <div className="p-5 flex flex-col gap-1">
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                  >
                    {s.name}
                  </h3>
                  <p className="text-xs" style={{ color: "#888888" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 px-6"
        style={{
          borderBottom: "1px solid rgba(245,196,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-5xl font-bold mb-1"
                style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
              >
                {s.value}
              </div>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: "#888888", fontFamily: "Rajdhani" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span
              className="text-xs font-bold tracking-widest block mb-2"
              style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
            >
              WHO WE ARE
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
            >
              Built to Compete.
              <br />
              <span style={{ color: "#f5c400" }}>Driven to Inspire.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group overflow-hidden cursor-pointer"
                style={{
                  background: "#191919",
                  border: "1px solid rgba(245,196,0,0.12)",
                }}
                onClick={() => onNav(h.page)}
              >
                <div className="h-48 flex items-center justify-center" style={{ background: "#ffffff" }}>
                  <span style={{ fontFamily: "Rajdhani", fontWeight: 700, fontSize: "20px", color: "#333333", letterSpacing: "0.04em" }}>Image_{h.imgNum}</span>
                </div>
                <div className="p-5">
                  <h3
                    className="text-lg font-bold mb-1.5"
                    style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                  >
                    {h.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "#888888", maxWidth: "28ch" }}>
                    {h.desc}
                  </p>
                  <span
                    className="text-xs font-bold tracking-wider"
                    style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
                  >
                    LEARN MORE →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(200,160,0,0.12) 0%, rgba(245,196,0,0.04) 50%, rgba(200,200,200,0.07) 100%)",
          borderBottom: "1px solid rgba(245,196,0,0.12)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Get in Touch
          </h2>
          <p className="text-sm mb-8" style={{ color: "#888888" }}>
            Interested in sponsoring us, learning more about the team, or connecting with Cybertronic PenguinZ? We'd love to hear from you.
          </p>
          <button
            onClick={() => onNav("contact")}
            className="px-10 py-4 font-bold text-sm transition-all duration-150"
            style={{
              fontFamily: "Rajdhani",
              letterSpacing: "0.1em",
              background: "#d0d0d0",
              color: "#0d0d0d",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#bbbbbb")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "#d0d0d0")
            }
          >
            CONTACT US
          </button>
        </div>
      </section>

    </div>
  );
}
