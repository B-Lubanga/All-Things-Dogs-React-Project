import React from "react";

const clinics = [
  { name: "VetCare Clinic", location: "Nairobi" },
  { name: "Animal Health Centre", location: "Kisumu" },
];

export default function VetClinics() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Vet Clinics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {clinics.map((clinic) => (
          <div key={clinic.name} className="bg-blue-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{clinic.name}</h3>
            <p className="text-sm">{clinic.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
