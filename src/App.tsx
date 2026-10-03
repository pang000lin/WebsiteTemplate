import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Outreach from "./pages/Outreach";
import Accomplishments from "./pages/Accomplishments";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

type Page = "home" | "about" | "outreach" | "accomplishments" | "contact" | "services";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home": return <Home onNav={navigate} />;
      case "about": return <About />;
      case "outreach": return <Outreach onNav={navigate} />;
      case "accomplishments": return <Accomplishments />;
      case "contact": return <Contact />;
      case "services": return <Services onNav={navigate} />;
    }
  };

  return (
    <div
      className="min-h-full flex flex-col"
      style={{ background: "#0d0d0d", color: "#f0f0f0" }}
    >
      <Nav current={page} onNav={navigate} />
      <main className="flex-1 pt-16">
        {renderPage()}
      </main>
      <Footer onNav={navigate} />
    </div>
  );
}
