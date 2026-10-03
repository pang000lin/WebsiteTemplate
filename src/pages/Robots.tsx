import { useState } from "react";

const seasons = [
  {
    season: "2024–25",
    game: "INTO THE DEEP",
    img: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=700&h=450&fit=crop&auto=format",
    status: "Completed",
    desc: "Our INTO THE DEEP robot was designed to collect and score game pieces at multiple heights, featuring our most capable autonomous routine to date with improved sensor integration and precise motor control.",
    specs: [
      { label: "Drive", value: "Mecanum" },
      { label: "Control Hub", value: "REV Control Hub" },
      { label: "Language", value: "Java / OnBot" },
      { label: "Lift", value: "Linear slide" },
      { label: "Intake", value: "Claw mechanism" },
      { label: "Vision", value: "Camera + April Tag" },
    ],
    highlights: ["3 awards earned", "40+ matches", "130+ build hours", "Offseason premiere events"],
  },
  {
    season: "2023–24",
    game: "CENTERSTAGE",
    img: "https://images.unsplash.com/photo-1637002722490-5f8ceed9774c?w=700&h=450&fit=crop&auto=format",
    status: "Completed",
    desc: "Our CENTERSTAGE robot — our very first competition robot — was built from the ground up as a rookie team. Featuring a reliable intake and scoring mechanism, it set the foundation for our engineering culture.",
    specs: [
      { label: "Drive", value: "Mecanum" },
      { label: "Control Hub", value: "REV Control Hub" },
      { label: "Language", value: "Java / OnBot" },
      { label: "Scoring", value: "Pixel placer" },
      { label: "Intake", value: "Roller intake" },
      { label: "Climb", value: "Hanging arm" },
    ],
    highlights: ["2 awards earned", "30+ matches", "120+ build hours", "Rookie season debut"],
  },
];

export default function Robots() {
  const [selected, setSelected] = useState(seasons[0]);

  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d" }}>
      {/* Header */}
      <section
        className="py-32 px-6"
        style={{
          background: "linear-gradient(to bottom, rgba(180,140,0,0.12) 0%, transparent 100%)",
          borderBottom: "1px solid rgba(245,196,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            FTC COMPETITION MACHINES
          </span>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-4"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Our <span style={{ color: "#f5c400" }}>Robots</span>
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{ color: "#888888" }}
          >
            Every robot we build starts from a blank whiteboard and ends on a competition field. These are the machines built by FTC Team 24135 — the Cybertronic PenguinZ.
          </p>
        </div>
      </section>

      {/* Robot selector */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 flex-wrap mb-12">
            {seasons.map((s) => (
              <button
                key={s.season}
                onClick={() => setSelected(s)}
                className="px-5 py-2 text-sm font-bold transition-all duration-150"
                style={{
                  fontFamily: "Rajdhani",
                  letterSpacing: "0.06em",
                  background: selected.season === s.season ? "#f5c400" : "transparent",
                  color: selected.season === s.season ? "#0d0d0d" : "#888888",
                  border: `1px solid ${selected.season === s.season ? "#f5c400" : "rgba(245,196,0,0.2)"}`,
                }}
              >
                {s.season} — {s.game}
              </button>
            ))}
          </div>

          {/* Featured robot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="relative overflow-hidden" style={{ background: "#1a1a1a" }}>
              <img
                src={selected.img}
                alt={`${selected.game} robot`}
                className="w-full h-96 object-cover"
              />
              <div
                className="absolute top-4 left-4 px-3 py-1 text-xs font-bold"
                style={{
                  fontFamily: "JetBrains Mono",
                  background: "rgba(245,196,0,0.12)",
                  color: "#f5c400",
                  border: "1px solid rgba(245,196,0,0.3)",
                }}
              >
                {selected.status.toUpperCase()}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <span
                  className="text-xs font-bold tracking-widest block mb-1"
                  style={{ fontFamily: "JetBrains Mono", color: "#888888" }}
                >
                  {selected.season} SEASON
                </span>
                <h2
                  className="text-4xl font-bold"
                  style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                >
                  {selected.game}
                </h2>
              </div>

              <p className="text-sm leading-relaxed my-6" style={{ color: "#b8b8b8" }}>
                {selected.desc}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {selected.specs.map((s) => (
                  <div
                    key={s.label}
                    className="p-3"
                    style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
                  >
                    <p
                      className="text-xs mb-1"
                      style={{ color: "#888888", fontFamily: "JetBrains Mono" }}
                    >
                      {s.label}
                    </p>
                    <p
                      className="text-sm font-bold"
                      style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div>
                <p
                  className="text-xs font-bold mb-3 tracking-widest"
                  style={{ fontFamily: "JetBrains Mono", color: "#d0d0d0" }}
                >
                  SEASON HIGHLIGHTS
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-3 py-1"
                      style={{
                        background: "rgba(200,200,200,0.08)",
                        color: "#d0d0d0",
                        border: "1px solid rgba(200,200,200,0.2)",
                        fontFamily: "JetBrains Mono",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Season grid */}
          <div
            className="pt-12"
            style={{ borderTop: "1px solid rgba(245,196,0,0.1)" }}
          >
            <h3
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "Rajdhani", color: "#888888" }}
            >
              All Seasons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {seasons.map((s) => (
                <div
                  key={s.season}
                  className="cursor-pointer group overflow-hidden"
                  style={{
                    background: "#191919",
                    border: `1px solid ${selected.season === s.season ? "#f5c400" : "rgba(245,196,0,0.1)"}`,
                  }}
                  onClick={() => setSelected(s)}
                >
                  <img
                    src={s.img}
                    alt={s.game}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5">
                    <p
                      className="text-xs mb-1"
                      style={{ fontFamily: "JetBrains Mono", color: "#888888" }}
                    >
                      {s.season}
                    </p>
                    <p
                      className="font-bold text-lg"
                      style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                    >
                      {s.game}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering process */}
      <section
        className="py-20 px-6"
        style={{ background: "#111111", borderTop: "1px solid rgba(245,196,0,0.1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            HOW WE BUILD
          </span>
          <h2
            className="text-4xl font-bold mb-10"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Our 5-Step Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Design", icon: "✏️", desc: "Game analysis, whiteboard sessions, CAD sketches, and mechanism brainstorming." },
              { step: "02", title: "Build", icon: "🔧", desc: "Fabrication, assembly, wiring, and physical construction of all robot systems." },
              { step: "03", title: "Test", icon: "🧪", desc: "Driver practice, sensor calibration, autonomous tuning, and game simulation." },
              { step: "04", title: "Review", icon: "📋", desc: "Post-match analysis, engineering notebook updates, and subsystem iteration." },
              { step: "05", title: "Relax", icon: "🐧", desc: "Team bonding, celebration of wins, and recharging before the next challenge." },
            ].map((s) => (
              <div
                key={s.step}
                className="p-5"
                style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <div
                  className="text-xs mb-1"
                  style={{ fontFamily: "JetBrains Mono", color: "#555555" }}
                >
                  {s.step}
                </div>
                <div
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
                >
                  {s.title}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
