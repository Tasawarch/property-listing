"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import propertiesData from "@/data/properties.json";

export default function PlotFinder() {
  const [city, setCity] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [results, setResults] = useState(propertiesData);

  const handleSearch = () => {
    const filtered = propertiesData.filter((p) => {
      return (
        (city ? p.city === city : true) &&
        (plotSize ? p.plotSize === plotSize : true) &&
        (maxPrice ? p.price <= parseInt(maxPrice) : true)
      );
    });
    setResults(filtered);
  };

  const handleClear = () => {
    setCity("");
    setPlotSize("");
    setMaxPrice("");
    setResults(propertiesData);
  };

  // Extract unique cities and plot sizes for filters dynamically
  const uniqueCities = [...new Set(propertiesData.map((p) => p.city))];
  const uniquePlotSizes = [...new Set(propertiesData.map((p) => p.plotSize))];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Plot Finder</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-6">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">City</option>
          {uniqueCities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          value={plotSize}
          onChange={(e) => setPlotSize(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Plot Size</option>
          {uniquePlotSizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>

        <button
          onClick={handleClear}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Clear Filter
        </button>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.length > 0 ? (
          results.map((property) => (
            <div key={property.id} className="p-4 shadow border rounded">
              {/* Swiper for property images */}
              <Swiper spaceBetween={10} slidesPerView={1}>
                {property.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${property.title} ${idx + 1}`}
                      className="w-full h-48 object-cover mb-2 rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <h2 className="font-semibold text-xl mt-2">{property.title}</h2>
              <p className="text-gray-600">{property.city} – {property.plotSize}</p>
              <p className="font-bold text-blue-600 mt-2">{property.currency} {property.price.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700 col-span-3">No plots found.</p>
        )}
      </div>
    </div>
  );
}
