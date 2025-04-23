import React from "react";
import Main from "../components/Main";

const clinics = [
  {
    name: "Healthy Paws Veterinary",
    location: "Nairobi",
    phone: "0712 111 222",
  },
  {
    name: "Coastline Animal Care",
    location: "Mombasa",
    phone: "0722 333 444",
  },
  {
    name: "Lakeview Vet Clinic",
    location: "Kisumu",
    phone: "0733 555 666",
  },
  {
    name: "Upland Vets & Animal Health",
    location: "Eldoret",
    phone: "0744 777 888",
  },
];

const VetClinic = () => {
  return (
    <Main>
      <section className="pt-20 container mx-auto mt-8 p-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Vet Clinics 🏥
        </h2>
        <p className="text-center mt-4 max-w-2xl mx-auto text-gray-700">
          Find trusted veterinary clinics near you for regular checkups,
          vaccinations, and emergency care. Our listed clinics offer reliable
          and compassionate care for your furry friends.
        </p>

        <h3 className="text-2xl font-semibold text-blue-700 mt-10 text-center">
          Nearby Clinics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-6">
          {clinics.map((clinic) => (
            <div
              key={clinic.name}
              className="bg-blue-100 border border-blue-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-blue-900">
                {clinic.name}
              </h4>
              <p className="text-sm text-blue-700 mt-1">
                <strong>Location:</strong> {clinic.location}
              </p>
              <p className="text-sm text-blue-700">
                <strong>Phone:</strong> {clinic.phone}
              </p>
              <p className="text-sm text-blue-700">
                <strong>Opening Hours:</strong> 8am – 8pm (Available for house
                calls after hours for emergencies)
              </p>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default VetClinic;
