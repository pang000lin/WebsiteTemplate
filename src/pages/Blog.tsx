import { useState } from "react";

const posts = [
  {
    id: 1,
    date: "Aug 2026",
    category: "Season Recap",
    title: "2024–25 INTO THE DEEP Season Recap",
    excerpt:
      "Our second FTC season pushed us further than ever. INTO THE DEEP demanded robots that could operate at multiple heights under pressure — here's how Team 24135 rose to the challenge.",
    img: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=350&fit=crop&auto=format",
    readTime: "6 min",
    featured: true,
  },
  {
    id: 2,
    date: "Jun 2026",
    category: "Outreach",
    title: "Our Fourth Griffith Woods Cleanup Walk",
    excerpt:
      "We returned to Griffith Woods for our fourth annual cleanup walk — Calgary's beloved riparian habitat along the Elbow River. Here's what we collected and why it matters to us.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=350&fit=crop&auto=format",
    readTime: "4 min",
    featured: false,
  },
  {
    id: 3,
    date: "Apr 2026",
    category: "Community",
    title: "Run for ALS: Our Team's Fundraising Story",
    excerpt:
      "The Cybertronic PenguinZ participated in the Run for ALS fundraiser this year. As a team, we ran together and raised awareness for a cause that matters beyond robotics.",
    img: "https://images.unsplash.com/photo-1744793917675-97c6e767efac?w=600&h=350&fit=crop&auto=format",
    readTime: "3 min",
    featured: false,
  },
  {
    id: 4,
    date: "Jan 2026",
    category: "Build Season",
    title: "INTO THE DEEP Kickoff: Day-One Game Analysis",
    excerpt:
      "Game reveal day for FTC 2024–25. We broke down the field, the scoring zones, and our initial robot concepts in the first 24 hours after kickoff.",
    img: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=600&h=350&fit=crop&auto=format",
    readTime: "5 min",
    featured: false,
  },
  {
    id: 5,
    date: "Nov 2025",
    category: "Technical",
    title: "Building Our First Linear Slide Lift",
    excerpt:
      "INTO THE DEEP required robots to score at height. Here's how we designed, built, and tuned our first full-extension linear slide mechanism using REV components.",
    img: "https://images.unsplash.com/photo-1637002722490-5f8ceed9774c?w=600&h=350&fit=crop&auto=format",
    readTime: "8 min",
    featured: false,
  },
  {
    id: 6,
    date: "Sep 2024",
    category: "Team",
    title: "Rookie Year Reflection: CENTERSTAGE 2023–24",
    excerpt:
      "Looking back at our first-ever FTC season — 30+ matches, 2 awards, 120+ build hours, and a mountain of lessons that shaped who we are as a team.",
    img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=350&fit=crop&auto=format",
    readTime: "7 min",
    featured: false,
  },
];

const categories = ["All", "Season Recap", "Build Season", "Technical", "Outreach", "Community", "Team"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);
  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen" style={{ background: "#0d0d0d" }}>
      {/* Header */}
      <section
        className="py-32 px-6"
        style={{
          background: "linear-gradient(to bottom, rgba(180,140,0,0.1) 0%, transparent 100%)",
          borderBottom: "1px solid rgba(245,196,0,0.12)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <span
            className="text-xs font-bold tracking-widest block mb-3"
            style={{ fontFamily: "JetBrains Mono", color: "#f5c400" }}
          >
            TEAM UPDATES
          </span>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-4"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            The <span style={{ color: "#f5c400" }}>Blog</span>
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{ color: "#888888" }}
          >
            Season recaps, technical deep dives, community stories, and behind-the-scenes updates from FTC Team 24135 — the Cybertronic PenguinZ.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className="px-4 py-1.5 text-xs font-bold transition-all duration-150"
                style={{
                  fontFamily: "Rajdhani",
                  letterSpacing: "0.06em",
                  background: activeCategory === c ? "#f5c400" : "transparent",
                  color: activeCategory === c ? "#0d0d0d" : "#888888",
                  border: `1px solid ${activeCategory === c ? "#f5c400" : "rgba(245,196,0,0.2)"}`,
                }}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {activeCategory === "All" && featured && (
            <div
              className="mb-10 group cursor-pointer overflow-hidden grid grid-cols-1 md:grid-cols-2"
              style={{
                background: "#191919",
                border: "1px solid rgba(245,196,0,0.15)",
              }}
              onClick={() =>
                setExpanded(expanded === featured.id ? null : featured.id)
              }
            >
              <div
                className="overflow-hidden h-64 md:h-auto"
                style={{ background: "#1a1a1a" }}
              >
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs px-2 py-0.5 font-bold"
                    style={{
                      background: "rgba(245,196,0,0.1)",
                      color: "#f5c400",
                      fontFamily: "JetBrains Mono",
                    }}
                  >
                    FEATURED
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "#d0d0d0", fontFamily: "JetBrains Mono" }}
                  >
                    {featured.category.toUpperCase()}
                  </span>
                </div>
                <h2
                  className="text-3xl font-bold mb-3"
                  style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                >
                  {featured.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#888888" }}
                >
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs"
                    style={{ color: "#888888", fontFamily: "JetBrains Mono" }}
                  >
                    {featured.date}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "#888888", fontFamily: "JetBrains Mono" }}
                  >
                    ·
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "#888888", fontFamily: "JetBrains Mono" }}
                  >
                    {featured.readTime} read
                  </span>
                  <span
                    className="text-xs font-bold ml-auto"
                    style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
                  >
                    {expanded === featured.id ? "COLLAPSE ↑" : "READ MORE →"}
                  </span>
                </div>
                {expanded === featured.id && (
                  <div
                    className="mt-6 pt-6"
                    style={{ borderTop: "1px solid rgba(245,196,0,0.1)" }}
                  >
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#b8b8b8" }}
                    >
                      INTO THE DEEP was our most technically demanding season yet. Our robot had to operate a full-extension lift, navigate autonomously using April Tag vision, and score consistently under match pressure. With 40+ matches of competition data and 3 awards earned, it was a season that proved how far we've grown since our CENTERSTAGE rookie year.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden cursor-pointer"
                style={{
                  background: "#191919",
                  border: "1px solid rgba(245,196,0,0.1)",
                }}
                onClick={() =>
                  setExpanded(expanded === p.id ? null : p.id)
                }
              >
                <div
                  className="overflow-hidden h-44"
                  style={{ background: "#1a1a1a" }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs px-1.5 py-0.5 font-bold"
                      style={{
                        background: "rgba(245,196,0,0.08)",
                        color: "#f5c400",
                        fontFamily: "JetBrains Mono",
                      }}
                    >
                      {p.category.toUpperCase()}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "#555555", fontFamily: "JetBrains Mono" }}
                    >
                      {p.date}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2 group-hover:text-[#f5c400] transition-colors"
                    style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-3"
                    style={{ color: "#888888" }}
                  >
                    {p.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs"
                      style={{ color: "#555555", fontFamily: "JetBrains Mono" }}
                    >
                      {p.readTime} read
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
                    >
                      {expanded === p.id ? "COLLAPSE ↑" : "READ →"}
                    </span>
                  </div>
                  {expanded === p.id && (
                    <div
                      className="mt-4 pt-4"
                      style={{ borderTop: "1px solid rgba(245,196,0,0.1)" }}
                    >
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "#b8b8b8" }}
                      >
                        Follow us on Instagram @cybertronic_penguinz or YouTube @cybertronicpenguinZ for the full story, photos, and behind-the-scenes content from this event.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Social CTA */}
          <div
            className="mt-14 p-8 text-center"
            style={{
              background: "#191919",
              border: "1px solid rgba(245,196,0,0.12)",
            }}
          >
            <p
              className="text-xs mb-2"
              style={{ fontFamily: "JetBrains Mono", color: "#888888" }}
            >
              FOLLOW US FOR LIVE UPDATES
            </p>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
            >
              Stay in the Loop
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.instagram.com/cybertronic_penguinz/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-bold transition-all duration-150"
                style={{
                  fontFamily: "Rajdhani",
                  letterSpacing: "0.08em",
                  background: "#f5c400",
                  color: "#0d0d0d",
                  textDecoration: "none",
                }}
              >
                @CYBERTRONIC_PENGUINZ
              </a>
              <a
                href="https://www.youtube.com/@cybertronicpenguinZ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-bold transition-all duration-150"
                style={{
                  fontFamily: "Rajdhani",
                  letterSpacing: "0.08em",
                  border: "1px solid rgba(245,196,0,0.3)",
                  color: "#f5c400",
                  background: "transparent",
                  textDecoration: "none",
                }}
              >
                YOUTUBE CHANNEL
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
