"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg shadow p-4 bg-white dark:bg-gray-800">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        className="rounded"
      >
        {property.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`${property.title} ${idx + 1}`}
              className="w-full h-48 object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Property Info */}
      <h2 className="text-xl font-bold mt-2 text-gray-800 dark:text-gray-100">
        {property.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        {property.city}, {property.area} – {property.plotSize}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        {property.bedrooms} Bed | {property.bathrooms} Bath
      </p>
      <p className="font-bold text-blue-600 mt-2">
        {property.currency} {property.price.toLocaleString()}
      </p>

      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
}
