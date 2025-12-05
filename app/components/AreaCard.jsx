"use client";

import Image from "next/image";
import { useState } from "react";

export default function AreaCard({ area }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {/* Main Card */}
      <div className="border rounded-lg h-120 shadow p-5 bg-white dark:bg-gray-800 flex flex-col">
        <h3 className="text-2xl font-bold mb-1">{area.name}</h3>
        <p className="text-yellow-500 font-semibold text-sm mb-2">
          ⭐ {area.rating || "N/A"} / 5
        </p>
        <p className="text-gray-600 text-sm mb-3">{area.description}</p>

        {area.image && (
          <div className="relative w-full h-48 mt-3 rounded overflow-hidden">
            <Image
              src={area.image}
              alt={area.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority
            />
          </div>
        )}

        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={() => setShowDetails(true)}
        >
          View Details
        </button>
      </div>

      {/* Modal with Background Blur */}
      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-white/20"
            onClick={() => setShowDetails(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white dark:bg-gray-800 w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto rounded-lg shadow-lg p-5">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setShowDetails(false)}
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">{area.name} - Details</h3>

            {/* SubAreas */}
            {area.subAreas && area.subAreas.map((subArea) => (
              <div key={subArea.id} className="border-t pt-3 mt-3">
                <h4 className="text-xl font-semibold">{subArea.name}</h4>
                <p className="text-gray-600 text-sm mb-1">{subArea.description}</p>

                {subArea.avgResidentialPrice && (
                  <p className="text-gray-700 font-medium">
                    Avg Residential Price: <span className="text-blue-600">{subArea.avgResidentialPrice.toLocaleString()} {subArea.currency || "AED"}</span>
                  </p>
                )}
                {subArea.avgCommercialPrice && (
                  <p className="text-gray-700 font-medium">
                    Avg Commercial Price: <span className="text-blue-600">{subArea.avgCommercialPrice.toLocaleString()} {subArea.currency || "AED"}</span>
                  </p>
                )}

                {subArea.bestFor && (
                  <p className="mt-1 text-gray-700 text-sm">
                    <span className="font-semibold">Best For:</span> {subArea.bestFor.join(", ")}
                  </p>
                )}

                {subArea.famousLocations && (
                  <p className="mt-1 text-gray-700 text-sm">
                    <span className="font-semibold">Famous Locations:</span> {subArea.famousLocations.join(", ")}
                  </p>
                )}

                {subArea.image && (
                  <div className="relative w-full h-40 mt-2 rounded overflow-hidden">
                    <Image
                      src={subArea.image}
                      alt={subArea.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                    />
                  </div>
                )}

                {subArea.counts && (
                  <div className="mt-2 text-gray-700 text-sm space-y-1">
                    <p>Schools: {subArea.counts.schools}</p>
                    <p>Hospitals: {subArea.counts.hospitals}</p>
                    <p>Banks: {subArea.counts.banks}</p>
                    <p>Universities: {subArea.counts.universities}</p>
                    <p>Mosques: {subArea.counts.mosques}</p>

                    {subArea.counts.schoolsDetail && (
                      <div>
                        <p className="font-semibold mt-1">School Details:</p>
                        <ul className="ml-3 list-disc">
                          {subArea.counts.schoolsDetail.map((school, idx) => (
                            <li key={idx}>{school.name} ({school.type}) - {school.address}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {subArea.counts.hospitalsDetail && (
                      <div>
                        <p className="font-semibold mt-1">Hospital Details:</p>
                        <ul className="ml-3 list-disc">
                          {subArea.counts.hospitalsDetail.map((hospital, idx) => (
                            <li key={idx}>{hospital.name} - {hospital.address}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
