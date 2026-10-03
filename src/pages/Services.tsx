import { useState } from "react";

type Page = "home" | "about" | "outreach" | "accomplishments" | "blog" | "contact" | "services";

interface ServicesProps {
  onNav: (p: Page) => void;
}

const sponsors = [
  {
    name: "Marda Loop Braces",
    desc: "An orthodontic practice in Calgary led by Dr. Chen. Supporting local youth STEM education.",
    label: "King Penguin Sponsor",
    color: "#C98642",
    imgNum: 15,
  },
  {
    name: "C and C Educenter",
    desc: "Calgary-based tutoring center offering K-12 courses in all subjects, taught by Alberta Certified Teachers.",
    label: "Royal Penguin Sponsor",
    color: "#d0d0d0",
    imgNum: 16,
  },
  {
    name: "SkyFire Energy",
    desc: "Western Canada's leading solar contractor, operating since 2001. Committed to sustainable communities.",
    label: "Royal Penguin Sponsor",
    color: "#d0d0d0",
    imgNum: 17,
  },
];

const tiers = [
  {
    name: "Royal Penguin Sponsor",
    perks: ["Logo on team website", "Social media shoutout", "Thank-you at events"],
    color: "#C98642",
  },
  {
    name: "King Penguin Sponsor",
    perks: ["Everything in Royal Penguin", "Logo on robot", "Mention in engineering portfolio", "Certificate of appreciation"],
    color: "#d0d0d0",
  },
  {
    name: "Emperor Penguin Sponsor",
    perks: ["Everything in King Penguin", "Premier logo placement on robot", "Banner at competitions", "Featured in engineering portfolio"],
    color: "#f5c400",
  },
];


export default function Services({ onNav }: ServicesProps) {
  const [sponsorTab, setSponsorTab] = useState<"tiers" | "current">("tiers");

  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d" }}>
      {/* Header */}
      <section
        className="py-32 px-6"
        style={{
          background: "linear-gradient(to bottom, rgba(200,200,200,0.08) 0%, transparent 100%)",
          borderBottom: "1px solid rgba(245,196,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#d0d0d0" }}
          >
            SUPPORT US
          </span>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-6"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Support the<br />
            <span style={{ color: "#f5c400" }}>Team</span>
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "#888888" }}
          >
            Sponsorships help us cover competition costs, robot parts, and outreach programs for Calgary youth.
          </p>
        </div>
      </section>

      {/* Sponsorship tiers + Current Sponsors (tabbed) */}
      <section
        className="py-20 px-6"
        style={{
          background: "#111111",
          borderTop: "1px solid rgba(245,196,0,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            SPONSORSHIP
          </span>
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Support the Team
          </h2>
          <p className="text-sm max-w-xl mb-10" style={{ color: "#888888" }}>
            Sponsorships directly fund robot components, competition entry fees, travel to events, and community outreach programs for Calgary youth.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mb-10">
            {(["tiers", "current"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSponsorTab(tab)}
                className="px-5 py-2 text-sm font-bold transition-all duration-150"
                style={{
                  fontFamily: "Rajdhani",
                  letterSpacing: "0.06em",
                  background: sponsorTab === tab ? "#f5c400" : "transparent",
                  color: sponsorTab === tab ? "#0d0d0d" : "#888888",
                  border: `1px solid ${sponsorTab === tab ? "#f5c400" : "rgba(245,196,0,0.2)"}`,
                }}
              >
                {tab === "tiers" ? "SPONSORSHIP TIERS" : "OUR SPONSORS"}
              </button>
            ))}
          </div>

          {sponsorTab === "tiers" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((t) => (
                <div
                  key={t.name}
                  className="p-6 flex flex-col"
                  style={{
                    background: "#191919",
                    border: `1px solid ${t.color}`,
                    boxShadow: `0 0 20px ${t.color}18`,
                  }}
                >
                  <div
                    className="text-sm font-bold mb-6 tracking-widest"
                    style={{ fontFamily: "JetBrains Mono", color: t.color }}
                  >
                    {t.name.toUpperCase()}
                  </div>
                  <ul className="space-y-4 flex-1">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-base">
                        <span style={{ color: t.color, flexShrink: 0, fontSize: "16px" }}>✓</span>
                        <span style={{ color: "#b8b8b8", fontFamily: "Rajdhani", fontSize: "17px", fontWeight: 600 }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNav("contact")}
                    className="mt-8 py-3 font-bold text-sm transition-all duration-200 w-full"
                    style={{
                      fontFamily: "Rajdhani",
                      letterSpacing: "0.1em",
                      background: t.color,
                      color: "#0d0d0d",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    }}
                  >
                    CONTACT US TO SPONSOR →
                  </button>
                </div>
              ))}
            </div>
          )}

          {sponsorTab === "current" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {sponsors.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col overflow-hidden"
                  style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
                >
                  <div className="p-6">
                    <div
                      className="text-xs font-bold mb-3 tracking-widest"
                      style={{ fontFamily: "JetBrains Mono", color: s.color }}
                    >
                      {s.label.toUpperCase()}
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                    >
                      {s.name}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                      {s.desc}
                    </p>
                  </div>
                  <div className="h-44 flex items-center justify-center" style={{ background: "#ffffff" }}>
                    <span style={{ fontFamily: "Rajdhani", fontWeight: 700, fontSize: "20px", color: "#333333", letterSpacing: "0.04em" }}>Image_{s.imgNum}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
