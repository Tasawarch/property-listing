"use client";

import React, { useState } from "react";
import AreaCard from "../components/AreaCard";
import areasData from "@/data/areas.json";

export default function AreaGuidesPage() {
  const [areas, setAreas] = useState(areasData);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-100 p-4 sticky top-0 h-fit">
        <h2 className="font-bold text-lg mb-4">Areas</h2>
        <ul className="space-y-2">
          {areas.map((area) => (
            <li key={area.id}>
              <a
                href={`#${area.id}`}
                className="text-blue-600 hover:underline block"
              >
                {area.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.length > 0 ? (
          areas.map((area) => <AreaCard key={area.id} area={area} />)
        ) : (
          <p className="text-gray-700 col-span-3">No areas found.</p>
        )}
      </main>
    </div>
  );
}
