import { useState } from "react";

const seasons = [
  {
    id: "2024-25",
    label: "2024–25 Season",
    game: "INTO THE DEEP",
    status: "Completed",
    awards: 3,
    matches: 40,
    buildHours: 130,
    highlights: [
      "Competed at multiple district events in Western Canada",
      "Earned 3 awards across the season",
      "Introduced our most advanced autonomous routine to date",
      "Expanded engineering portfolio documentation",
      "Attended Offseason Premier Events",
    ],
    details:
      "Our second FTC season saw significant growth in robot complexity and team maturity. INTO THE DEEP challenged teams to design robots capable of collecting and scoring underwater-themed game pieces at multiple heights.",
  },
  {
    id: "2023-24",
    label: "2023–24 Season",
    game: "CENTERSTAGE",
    status: "Completed",
    awards: 2,
    matches: 30,
    buildHours: 120,
    highlights: [
      "Rookie FTC season — Team 24135 founded",
      "Earned 2 awards in our inaugural year",
      "Logged 250+ total build hours across the season",
      "50+ community outreach hours",
      "Established our five-step engineering process",
    ],
    details:
      "CENTERSTAGE was our first-ever FTC season. As a rookie team, we built our foundational processes, bonded as a group, and immediately made our mark with 2 awards and 30+ competitive matches.",
  },
  {
    id: "offseason",
    label: "Offseason & Premieres",
    game: "Offseason Events",
    status: "Ongoing",
    awards: 0,
    matches: 10,
    buildHours: 40,
    highlights: [
      "Participated in offseason Premier Events",
      "Community workshops and FLL scrimmage support in Calgary",
      "Prototype testing for upcoming season",
      "Engineering notebook development",
      "Team training and leadership workshops",
    ],
    details:
      "Between official seasons, we stay active through offseason premier events, community outreach, and preparation work for the following season's robot.",
  },
];

const overallStats = [
  { value: "5", label: "Total Awards" },
  { value: "70+", label: "Matches Played" },
  { value: "250+", label: "Build Hours" },
  { value: "50+", label: "Outreach Hours" },
];

export default function Accomplishments() {
  const [active, setActive] = useState(seasons[0].id);
  const selected = seasons.find((s) => s.id === active)!;

  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d" }}>
      {/* Header */}
      <section
        className="py-32 px-6"
        style={{
          background: "linear-gradient(to bottom, rgba(245,196,0,0.06) 0%, transparent 100%)",
          borderBottom: "1px solid rgba(245,196,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            TRACK RECORD
          </span>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-6"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Seasons &<br />
            <span style={{ color: "#f5c400" }}>Accomplishments</span>
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "#888888" }}
          >
            Three years of competing in FIRST Tech Challenge, earning awards, and growing as engineers. Here's every season on record for FTC Team 24135.
          </p>
        </div>
      </section>

      {/* Overall stats */}
      <section
        className="py-14 px-6"
        style={{ borderBottom: "1px solid rgba(245,196,0,0.1)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {overallStats.map((s) => (
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

      {/* Season selector */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            BY SEASON
          </span>
          <h2
            className="text-4xl font-bold mb-10"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Season Breakdown
          </h2>

          {/* Season tabs */}
          <div className="flex gap-3 flex-wrap mb-10">
            {seasons.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className="px-5 py-2 text-sm font-bold transition-all duration-150"
                style={{
                  fontFamily: "Rajdhani",
                  letterSpacing: "0.06em",
                  background: active === s.id ? "#f5c400" : "transparent",
                  color: active === s.id ? "#0d0d0d" : "#888888",
                  border: `1px solid ${active === s.id ? "#f5c400" : "rgba(245,196,0,0.2)"}`,
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Season detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                <div>
                  <h3
                    className="text-3xl font-bold"
                    style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                  >
                    {selected.game}
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "#888888", fontFamily: "JetBrains Mono" }}
                  >
                    {selected.label}
                  </p>
                </div>
                <span
                  className="text-xs px-3 py-1 font-bold self-start"
                  style={{
                    fontFamily: "JetBrains Mono",
                    background:
                      selected.status === "Ongoing"
                        ? "rgba(245,196,0,0.1)"
                        : "rgba(100,100,120,0.2)",
                    color:
                      selected.status === "Ongoing" ? "#f5c400" : "#888888",
                    border: `1px solid ${selected.status === "Ongoing" ? "rgba(245,196,0,0.3)" : "rgba(100,100,120,0.3)"}`,
                  }}
                >
                  {selected.status.toUpperCase()}
                </span>
              </div>

              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "#b8b8b8" }}
              >
                {selected.details}
              </p>

              <h4
                className="text-sm font-bold mb-4 tracking-wider"
                style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
              >
                SEASON HIGHLIGHTS
              </h4>
              <ul className="space-y-3">
                {selected.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="text-xs mt-0.5 flex-shrink-0"
                      style={{ color: "#f5c400" }}
                    >
                      ▶
                    </span>
                    <span className="text-sm" style={{ color: "#b8b8b8" }}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: stats */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Awards", value: selected.awards, suffix: selected.awards > 0 ? "" : "" },
                { label: "Matches", value: selected.matches, suffix: "+" },
                { label: "Build Hours", value: selected.buildHours, suffix: "+" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="p-6 text-center"
                  style={{
                    background: "#191919",
                    border: "1px solid rgba(245,196,0,0.12)",
                  }}
                >
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
                  >
                    {m.value}
                    {m.suffix}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest"
                    style={{ fontFamily: "JetBrains Mono", color: "#888888" }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}

              <div
                className="p-6 flex-1"
                style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
              >
                <p
                  className="text-xs mb-1"
                  style={{ fontFamily: "JetBrains Mono", color: "#888888" }}
                >
                  TEAM
                </p>
                <p
                  className="text-base font-bold mb-1"
                  style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                >
                  Cybertronic PenguinZ
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
                >
                  FTC #24135
                </p>
                <p className="text-xs mt-1" style={{ color: "#888888", fontFamily: "JetBrains Mono" }}>
                  Calgary, AB, Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FTC profile link */}
      <section
        className="py-16 px-6"
        style={{
          background: "#111111",
          borderTop: "1px solid rgba(245,196,0,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
            >
              View Our FTC Events Profile
            </h3>
            <p className="text-sm" style={{ color: "#888888" }}>
              Full match history, team rankings, and official event results on the FIRST Tech Challenge events portal.
            </p>
          </div>
          <a
            href="https://ftc-events.firstinspires.org/2024/team/24135"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 font-bold text-sm transition-all duration-150 whitespace-nowrap"
            style={{
              fontFamily: "Rajdhani",
              letterSpacing: "0.08em",
              background: "#f5c400",
              color: "#0d0d0d",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#ffd033")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#f5c400")
            }
          >
            FTC EVENTS PROFILE →
          </a>
        </div>
      </section>
    </div>
  );
}
