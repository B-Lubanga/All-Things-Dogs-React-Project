import React from "react";
import Main from "../components/Main";
import { FaDog } from "react-icons/fa6";

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
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 text-4xl font-bold text-blue-600 text-center">
            <h2>Vet Clinics </h2>
            <FaDog />
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Find trusted veterinary clinics near you for regular checkups,
            vaccinations, and emergency care. Our listed clinics offer reliable
            and compassionate care for your furry friends.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Nearby Clinics
        </h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clinics.map((clinic) => (
            <div
              key={clinic.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border border-blue-100"
            >
              <h4 className="text-xl font-semibold text-blue-900 mb-2">
                {clinic.name}
              </h4>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium text-blue-700">📍 Location:</span>{" "}
                {clinic.location}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <span className="font-medium text-blue-700">📞 Phone:</span>{" "}
                {clinic.phone}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium text-blue-700">🕒 Hours:</span> 8am
                – 8pm
                <br />
                <span className="text-xs italic text-gray-500">
                  (Emergency house calls available after hours)
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default VetClinic;
