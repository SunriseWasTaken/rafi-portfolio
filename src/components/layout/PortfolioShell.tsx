"use client";

import { Footer } from "@/components/layout/Footer";
import { GridBackground } from "@/components/layout/GridBackground";
import { MobileDialHuly } from "@/components/layout/MobileDialHuly";
import { MobileHeaderBar } from "@/components/layout/MobileHeaderBar";
import { SideNav } from "@/components/layout/SideNav";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { TelemetryOverlay } from "@/components/layout/TelemetryOverlay";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { CONTENT_PL } from "@/lib/layout";

export function PortfolioShell() {
  return (
    <SmoothScroll>
      <GridBackground />
      <div className="relative z-10 flex min-h-full">
        <SideNav />
        <div className={`flex min-w-0 flex-1 flex-col ${CONTENT_PL}`}>
          <MobileHeaderBar />
          <main id="main-content" className="pb-12 lg:pb-0">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <MobileDialHuly />
      <TelemetryOverlay />
    </SmoothScroll>
  );
}
