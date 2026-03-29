"use client";
import { TabProvider, useTab } from "@/components/layout/TabContext";
import Header from "@/components/layout/Header";
import Nav from "@/components/layout/Nav";
import Overview from "@/components/overview/Overview";
import Schedule from "@/components/overview/Schedule";
import DaysTab from "@/components/days/DaysTab";
import WeeklyRotation from "@/components/overview/WeeklyRotation";
import Tracker from "@/components/tracker/Tracker";
import PrepTab from "@/components/prep/PrepTab";
import TipsTab from "@/components/overview/TipsTab";

function TabContent() {
  const { active } = useTab();

  return (
    <main className="mx-auto max-w-4xl px-3 py-4 pb-12 sm:px-4 sm:py-6">
      {active === "overview"  && <Overview />}
      {active === "schedule"  && <Schedule />}
      {active === "days"      && <DaysTab />}
      {active === "rotation"  && <WeeklyRotation />}
      {active === "tracker"   && <Tracker />}
      {active === "prep"      && <PrepTab />}
      {active === "tips"      && <TipsTab />}
    </main>
  );
}

export default function Home() {
  return (
    <TabProvider>
      <div className="min-h-screen bg-[#FFF9F0]">
        <Header />
        <Nav />
        <TabContent />
      </div>
    </TabProvider>
  );
}
