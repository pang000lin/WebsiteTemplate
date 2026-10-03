const values = [
  {
    label: "Knowledge",
    desc: "We believe in learning relentlessly  from mentors, from failures, from each other. Every season makes us even better.",
  },
  {
    label: "Leadership",
    desc: "Our students lead every subteam. From design to outreach, every member owns their domain and grows as a leader.",
  },
  {
    label: "Passion",
    desc: "Robotics is more than a competition for us, it's a calling. We show up because we genuinely love building and solving problems.",
  },
  {
    label: "Perseverance",
    desc: "Robots break. Matches are lost. We keep going. Resilience is the skill that outlasts every competition season.",
  },
];

const journey = [
  {
    year: "2021–22",
    title: "First Lego League Beginnings",
    desc: "Several of our founding members competed together in FLL, discovering a shared love of robotics and problem-solving.",
  },
  {
    year: "2022–23",
    title: "FLL World Championships",
    desc: "The group attended the FLL World Championship, an experience that proved we could compete at the highest level.",
  },
  {
    year: "2023",
    title: "Cybertronic PenguinZ Founded",
    desc: "Inspired by Worlds, 6 students in middle school from Calgary formed FTC Team 24135: the Cybertronic PenguinZ.",
  },
  {
    year: "2023–24",
    title: "Rookie FTC Season",
    desc: "Our first season in FIRST Tech Challenge. 70+ matches, 250+ build hours, and 5 awards across our inaugural year.",
  },
  {
    year: "2024–25",
    title: "Growing Stronger",
    desc: "We refined our engineering process (Design, Build, Test, Review, Relax) and expanded our community outreach footprint.",
  },
];

const ftcSubteams = [
  { name: "Mechanical", desc: "Robot structure, drivetrain, game mechanisms, and CAD design." },
  { name: "Programming", desc: "Autonomous routines, TeleOp control, and sensor integration using Java/OnBot." },
  { name: "Drive Team", desc: "Controls the robot during matches  executing autonomous, TeleOp, and real-time decisions on the field." },
  { name: "Business & Outreach", desc: "Fundraising, sponsorships, community programs, and engineering portfolio." },
  { name: "Media", desc: "Photography, social media, video documentation, and our engineering journal." },
];

export default function About() {
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
            WHO WE ARE
          </span>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-6"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            About the
            <br />
            <span style={{ color: "#f5c400" }}>Cybertronic PenguinZ</span>
          </h1>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "#888888" }}
          >
            We're a student-led FIRST Tech Challenge team of 10 students in grades 8–10, based in Calgary, Alberta, Canada. Founded in 2023, we started in FLL and made it to the World Championships before levelling up to FTC.
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section
        className="py-14 px-6"
        style={{ borderBottom: "1px solid rgba(245,196,0,0.1)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Team Number", value: "#24135" },
            { label: "Founded", value: "2023" },
            { label: "Location", value: "Calgary, AB" },
            { label: "League", value: "FTC" },
          ].map((f) => (
            <div
              key={f.label}
              className="p-5 text-center"
              style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
            >
              <div
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
              >
                {f.value}
              </div>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: "#888888", fontFamily: "JetBrains Mono" }}
              >
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story + photo */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="text-xs font-bold tracking-widest block mb-3"
              style={{ fontFamily: "JetBrains Mono", color: "#d0d0d0" }}
            >
              OUR STORY
            </span>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
            >
              From Lego to
              <br />
              Full-Scale Robots
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#888888" }}>
              Our founding members first met competing in FIRST Lego League. After advancing to the FLL World Championships, the group decided they wanted more: more engineering challenge, more competition, more impact.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#888888" }}>
              In 2023, they formed FTC Team 24135&nbsp;&nbsp;the Cybertronic PenguinZ. What began as ten students with a shared dream has grown into a structured team with mechanical, programming, electrical, business, and media subteams.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
              Under the guidance of Coach Marcus and our generous sponsors, we've competed in 70+ matches, earned 5 awards, logged 250+ build hours, and contributed 50+ hours back to the Calgary community.
            </p>
          </div>
          <div className="relative overflow-hidden" style={{ background: "#ffffff" }}>
            <div className="w-full h-80 flex items-center justify-center">
              <span style={{ fontFamily: "Rajdhani", fontWeight: 700, fontSize: "22px", color: "#333333", letterSpacing: "0.04em" }}>Image_8</span>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
              }}
            >
              <p
                className="text-xs"
                style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
              >
                // Team 24135 — Calgary, Alberta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 px-6"
        style={{
          borderTop: "1px solid rgba(245,196,0,0.1)",
          borderBottom: "1px solid rgba(245,196,0,0.1)",
          background: "#111111",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            CORE VALUES
          </span>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.label}
                className="p-6"
                style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
              >

                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                >
                  {v.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subteams */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            TEAM STRUCTURE
          </span>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Our Subteams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ftcSubteams.map((s, i) => (
              <div
                key={s.name}
                className="p-6 flex gap-4 items-start"
                style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
              >
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-sm font-bold"
                  style={{
                    background: "rgba(245,196,0,0.1)",
                    color: "#f5c400",
                    fontFamily: "JetBrains Mono",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                  >
                    {s.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team journey timeline */}
      <section
        className="py-20 px-6"
        style={{ background: "#111111", borderTop: "1px solid rgba(245,196,0,0.1)" }}
      >
        <div className="max-w-4xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#d0d0d0" }}
          >
            TEAM HISTORY
          </span>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Our Journey
          </h2>

          <div className="relative">
            <div
              className="absolute left-4 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #f5c400, rgba(245,196,0,0.1))" }}
            />
            <div className="space-y-10 pl-12">
              {journey.map((j) => (
                <div key={j.year} className="relative">
                  <div
                    className="absolute -left-8 top-1 w-3 h-3 rounded-full"
                    style={{
                      background: "#f5c400",
                      boxShadow: "0 0 8px rgba(245,196,0,0.5)",
                    }}
                  />
                  <div
                    className="text-xs font-bold mb-1"
                    style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
                  >
                    {j.year}
                  </div>
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                  >
                    {j.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#888888" }}>
                    {j.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
