import ScrollyCanvas from "@/components/ScrollyCanvas";
import CinematicSection from "@/components/CinematicSection";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import StartupJourney from "@/components/sections/StartupJourney";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="home" className="min-h-screen text-white bg-transparent">
      {/* ── Hero — frame-sequence animation, NEVER re-rendered ── */}
      <ScrollyCanvas />

      {/* ── Cinematic portfolio sections ────────────────────────
          Each is wrapped in CinematicSection which applies a
          GPU-composited scroll-driven zoom-out + fade entrance
          (scale 1.06→1, opacity 0→1, y 64px→0) creating the
          "flying through a mission control center" depth effect.
      ──────────────────────────────────────────────────────── */}
      <div className="cinematic-container relative z-20 bg-transparent">
        {/* 01 — About */}
        <CinematicSection>
          <About />
        </CinematicSection>

        <div className="section-rule" />

        {/* 03 — Engineering / Projects */}
        <CinematicSection>
          <Projects />
        </CinematicSection>

        <div className="section-rule" />

        {/* 04 — Achievements */}
        <CinematicSection>
          <Achievements />
        </CinematicSection>

        <div className="section-rule" />

        {/* 05 — Startup Journey */}
        <CinematicSection>
          <StartupJourney />
        </CinematicSection>

        <div className="section-rule" />

        {/* 06 — Contact */}
        <CinematicSection>
          <Contact />
        </CinematicSection>
      </div>
    </main>
  );
}
