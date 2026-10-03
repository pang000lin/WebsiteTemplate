import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
            GET IN TOUCH
          </span>
          <h1
            className="text-6xl sm:text-7xl font-bold mb-4"
            style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
          >
            Contact <span style={{ color: "#f5c400" }}>Us</span>
          </h1>
          <p
            className="text-base max-w-xl leading-relaxed"
            style={{ color: "#888888" }}
          >
            Whether you're interested in sponsoring our team, learning more about what we do, or just want to say hello — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
            >
              Reach Out Directly
            </h2>

            {[
              {
                label: "Email",
                value: "cybertronicpenguinz@gmail.com",
                icon: "✉",
                href: "mailto:cybertronicpenguinz@gmail.com",
              },
              {
                label: "Instagram",
                value: "@cybertronic_penguinz",
                icon: "📸",
                href: "https://www.instagram.com/cybertronic_penguinz/",
              },
              {
                label: "YouTube",
                value: "@cybertronicpenguinZ",
                icon: "▶",
                href: "https://www.youtube.com/@cybertronicpenguinZ",
              },
              {
                label: "FTC Events",
                value: "Team #24135 Profile",
                icon: "🏆",
                href: "https://ftc-events.firstinspires.org/2024/team/24135",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 mb-3 transition-colors duration-150 group"
                style={{
                  background: "#191919",
                  border: "1px solid rgba(245,196,0,0.1)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(245,196,0,0.3)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(245,196,0,0.1)")
                }
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-sm flex-shrink-0 transition-colors duration-150"
                  style={{ background: "rgba(245,196,0,0.08)", color: "#f5c400" }}
                >
                  {c.icon}
                </div>
                <div>
                  <p
                    className="text-xs mb-0.5"
                    style={{ color: "#888888", fontFamily: "JetBrains Mono" }}
                  >
                    {c.label}
                  </p>
                  <p
                    className="text-sm font-bold"
                    style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                  >
                    {c.value}
                  </p>
                </div>
                <span
                  className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "#f5c400" }}
                >
                  →
                </span>
              </a>
            ))}

            {/* Location */}
            <div
              className="mt-6 p-6"
              style={{ background: "#191919", border: "1px solid rgba(245,196,0,0.1)" }}
            >
              <p
                className="text-xs mb-2"
                style={{ fontFamily: "JetBrains Mono", color: "#888888" }}
              >
                BASED IN
              </p>
              <p
                className="text-lg font-bold mb-1"
                style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
              >
                Calgary, Alberta, Canada
              </p>
              <p className="text-xs" style={{ color: "#888888" }}>
                FIRST Tech Challenge · Team #24135
              </p>
            </div>

            {/* Sponsor info */}
            <div
              className="mt-4 p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(200,160,0,0.08), rgba(245,196,0,0.04))",
                border: "1px solid rgba(245,196,0,0.2)",
              }}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Rajdhani", color: "#f5c400" }}
              >
                Sponsor Us
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#888888" }}>
                Your support goes directly to robot components, competition fees, travel, and outreach programs for Calgary youth. Current sponsors include Marda Loop Braces, C and C Educenter, and SkyFire Energy.
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: "JetBrains Mono", color: "#b8b8b8" }}
              >
                Sponsor inquiries:{" "}
                <a
                  href="mailto:cybertronicpenguinz@gmail.com"
                  style={{ color: "#f5c400" }}
                >
                  cybertronicpenguinz@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
            >
              Send a Message
            </h2>

            {sent ? (
              <div
                className="p-10 text-center"
                style={{
                  background: "#191919",
                  border: "1px solid rgba(245,196,0,0.2)",
                }}
              >
                <div className="text-5xl mb-4" style={{ color: "#f5c400" }}>
                  ✓
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: "Rajdhani", color: "#f0f0f0" }}
                >
                  Message Sent!
                </h3>
                <p className="text-sm mb-2" style={{ color: "#888888" }}>
                  Thanks for reaching out. We'll get back to you as soon as we can.
                </p>
                <p
                  className="text-xs"
                  style={{ fontFamily: "JetBrains Mono", color: "#555555" }}
                >
                  cybertronicpenguinz@gmail.com
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-6 px-6 py-2 text-sm font-bold"
                  style={{
                    fontFamily: "Rajdhani",
                    border: "1px solid rgba(245,196,0,0.3)",
                    color: "#f5c400",
                    background: "transparent",
                  }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  {
                    id: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Jane Smith",
                  },
                  {
                    id: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "jane@example.com",
                  },
                  {
                    id: "subject",
                    label: "Subject",
                    type: "text",
                    placeholder: "Sponsorship inquiry",
                  },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      className="text-xs font-bold block mb-1.5 tracking-wider"
                      style={{ fontFamily: "JetBrains Mono", color: "#888888" }}
                    >
                      {f.label.toUpperCase()}
                    </label>
                    <input
                      type={f.type}
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) =>
                        setForm((v) => ({ ...v, [f.id]: e.target.value }))
                      }
                      placeholder={f.placeholder}
                      required
                      className="w-full px-4 py-3 text-sm outline-none"
                      style={{
                        background: "#191919",
                        border: "1px solid rgba(245,196,0,0.15)",
                        color: "#f0f0f0",
                        fontFamily: "Inter",
                        transition: "border-color 0.15s",
                      }}
                      onFocus={(e) =>
                        ((e.currentTarget as HTMLInputElement).style.borderColor =
                          "#f5c400")
                      }
                      onBlur={(e) =>
                        ((e.currentTarget as HTMLInputElement).style.borderColor =
                          "rgba(245,196,0,0.15)")
                      }
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="text-xs font-bold block mb-1.5 tracking-wider"
                    style={{ fontFamily: "JetBrains Mono", color: "#888888" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((v) => ({ ...v, message: e.target.value }))
                    }
                    placeholder="Tell us what you're looking for..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      background: "#191919",
                      border: "1px solid rgba(245,196,0,0.15)",
                      color: "#f0f0f0",
                      fontFamily: "Inter",
                      transition: "border-color 0.15s",
                    }}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLTextAreaElement).style.borderColor =
                        "#f5c400")
                    }
                    onBlur={(e) =>
                      ((e.currentTarget as HTMLTextAreaElement).style.borderColor =
                        "rgba(245,196,0,0.15)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-bold text-sm transition-all duration-150"
                  style={{
                    fontFamily: "Rajdhani",
                    letterSpacing: "0.1em",
                    background: "#f5c400",
                    color: "#0d0d0d",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "#ffd033")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "#f5c400")
                  }
                >
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
