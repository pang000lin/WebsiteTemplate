import { useState } from "react";

type Page = "home" | "about" | "outreach" | "accomplishments" | "contact" | "services";

interface OutreachProps {
  onNav: (p: Page) => void;
}

const workshopDetails = [
  {
    title: "Girls in STEM Workshop",
    imgNum: "W1",
    desc: "We hosted a workshop to inspire girls in our community to participate in STEM. Through hands-on activities, mentorship conversations, and exposure to robotics and engineering, we aimed to break down barriers and show that STEM is for everyone.",
  },
  {
    title: "Summer Camps",
    imgNum: "W2",
    desc: "We hosted two one-week summer camps where we taught kids how to build and code robots. Sessions covered robot construction, coding fundamentals, and the principles of Gracious Professionalism — the core value of FIRST.",
  },
];

const programs = [
  {
    imgNum: 9,
    title: "Run for ALS",
    category: "Fundraising",
    desc: "We participated in the Run for ALS, helping raise awareness and funds for ALS research and patient support. Our team ran together as a show of solidarity and community spirit.",
    impact: "Community fundraiser",
  },
  {
    imgNum: 10,
    title: "Griffith Woods Cleanup",
    category: "Environment",
    desc: "We completed our fourth cleanup walk at Griffith Woods in Calgary, picking up litter and helping preserve one of the city's most cherished natural environments.",
    impact: "4 cleanups completed",
  },
  {
    imgNum: 11,
    title: "FLL Scrimmage",
    category: "FIRST",
    desc: "We hosted and participated in a FIRST Lego League scrimmage event, giving younger teams a low-pressure environment to test their robots, practice judging presentations, and experience competition before the official season.",
    impact: "Supporting rookie teams",
  },
  {
    imgNum: 12,
    title: "Workshops",
    category: "Education",
    desc: "We run hands-on workshops teaching students the fundamentals of robotics, programming, and engineering design. From building simple mechanisms to writing basic autonomous code, our workshops make STEM accessible to all ages.",
    impact: "Open to all ages",
  },
];

const stats = [
  { value: "50+", label: "Outreach Hours" },
  { value: "4", label: "Griffith Woods Cleanups" },
  { value: "2023", label: "Outreach Since" },
];

export default function Outreach({ onNav }: OutreachProps) {
  const [workshopsOpen, setWorkshopsOpen] = useState(false);

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
            COMMUNITY IMPACT
          </span>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-6"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Beyond the
            <br />
            <span style={{ color: "#f5c400" }}>Competition Field</span>
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "#888888" }}
          >
            Being part of FIRST means committing to more than just building robots. We carry our values into the Calgary community through environmental action, fundraising, and inspiring the next generation of engineers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-14 px-6"
        style={{ borderBottom: "1px solid rgba(245,196,0,0.1)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-4xl font-bold mb-1"
                style={{ fontFamily: "Rajdhani", color: "#d0d0d0" }}
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

      {/* Programs */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            OUR PROGRAMS
          </span>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            How We Give Back
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => {
              const isWorkshops = p.title === "Workshops";
              return (
                <div
                  key={p.title}
                  className="group overflow-hidden"
                  style={{
                    background: "#191919",
                    border: `1px solid ${isWorkshops && workshopsOpen ? "#f5c400" : "rgba(245,196,0,0.1)"}`,
                    cursor: isWorkshops ? "pointer" : "default",
                  }}
                  onClick={() => isWorkshops && setWorkshopsOpen((v) => !v)}
                >
                  <div className="h-52 flex items-center justify-center" style={{ background: "#ffffff" }}>
                    <span style={{ fontFamily: "Rajdhani", fontWeight: 700, fontSize: "20px", color: "#333333", letterSpacing: "0.04em" }}>Image_{p.imgNum}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs px-2 py-0.5 font-bold"
                        style={{
                          background: "rgba(245,196,0,0.08)",
                          color: "#f5c400",
                          fontFamily: "JetBrains Mono",
                        }}
                      >
                        {p.category.toUpperCase()}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#d0d0d0", fontFamily: "JetBrains Mono" }}
                      >
                        {p.impact}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                      >
                        {p.title}
                      </h3>
                      {isWorkshops && (
                        <span
                          className="text-xs font-bold tracking-wider"
                          style={{
                            fontFamily: "Rajdhani",
                            color: "#f5c400",
                            transition: "transform 0.2s",
                            display: "inline-block",
                            transform: workshopsOpen ? "rotate(90deg)" : "none",
                          }}
                        >
                          ▶
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                      {p.desc}
                    </p>
                    {isWorkshops && (
                      <p className="text-xs mt-3 font-bold tracking-wider" style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}>
                        {workshopsOpen ? "COLLAPSE ↑" : "SEE OUR WORKSHOPS →"}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Workshops detail panel */}
          {workshopsOpen && (
            <div
              className="mt-8 p-8"
              style={{
                background: "#111111",
                border: "1px solid rgba(245,196,0,0.2)",
              }}
            >
              <span
                className="text-xs font-bold tracking-widest block mb-3"
                style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
              >
                OUR WORKSHOPS
              </span>
              <h3
                className="text-3xl font-bold mb-8"
                style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
              >
                What We Run
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {workshopDetails.map((w) => (
                  <div
                    key={w.title}
                    className="flex flex-col overflow-hidden"
                    style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
                  >
                    <div className="h-40 flex items-center justify-center" style={{ background: "#ffffff" }}>
                      <span style={{ fontFamily: "Rajdhani", fontWeight: 700, fontSize: "18px", color: "#333333", letterSpacing: "0.04em" }}>Image_{w.imgNum}</span>
                    </div>
                    <div className="p-5">
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                      >
                        {w.title}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                        {w.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>


    </div>
  );
}
