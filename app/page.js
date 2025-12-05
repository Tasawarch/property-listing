import properties from "../data/properties.json";
import PropertyCard from "./components/PropertyCard";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property} // <-- poora object pass karna hai
        />
      ))}
    </div>
  );
}
