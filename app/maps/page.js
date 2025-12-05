"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import map from "@/data/map.json"; // yaha 'map' ko 'areasData' se replace karein

// Leaflet map dynamically import karo (SSR false)
const LeafletMap = dynamic(() => import("../components/LeafletMap"), { ssr: false });

export default function MapPage() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="font-bold text-lg mb-4">Areas</h2>
        <ul className="space-y-2">
          {map.map((area) => (
            <li key={area.id}>
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setSelectedArea(area)}
              >
                {area.name}
              </button>

              {/* SubAreas */}
              {area.subAreas && (
                <ul className="ml-4 mt-1 space-y-1">
                  {area.subAreas.map((sub) => (
                    <li key={sub.id}>
                      <button
                        className="text-blue-400 hover:underline text-sm"
                        onClick={() => setSelectedArea(sub)}
                      >
                        {sub.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Map */}
      <div className="flex-1">
        <LeafletMap selectedArea={selectedArea} />
      </div>
    </div>
  );
}
