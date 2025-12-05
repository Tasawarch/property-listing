"use client";

import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import propertiesData from "@/data/properties.json"; // ✅ Import from data folder

export default function PropertiesPage() {
  const [properties, setProperties] = useState(propertiesData); // use the imported JSON

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Properties</h1>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-gray-700 col-span-3">No properties found.</p>
        )}
      </div>
    </div>
  );
}
