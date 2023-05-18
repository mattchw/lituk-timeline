'use client';

import { Chrono } from "react-chrono";
import { items } from "@/constants/timelineItems";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-full h-screen">
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          enableOutline
          slideShow
          // cardHeight={50}
          mediaHeight={300}
        />
      </div>
    </main>
  )
}
