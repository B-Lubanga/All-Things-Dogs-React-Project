import React from "react";

// Rename the array to avoid conflict with the component name
const centers = [
  { name: "Nairobi Animal Rescue", location: "Nairobi" },
  { name: "Mombasa Dog Help", location: "Mombasa" },
];

export default function Centers() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Nearby Rescue Centers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {centers.map((center) => (
          <div key={center.name} className="bg-green-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{center.name}</h3>
            <p className="text-sm">{center.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
