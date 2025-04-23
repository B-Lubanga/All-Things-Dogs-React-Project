import React from "react";
import Main from "../components/Main";

// Rescue center data with phone numbers
const centers = [
  {
    name: "Nairobi Animal Rescue",
    location: "Nairobi",
    phone: "0712 123 456",
  },
  {
    name: "Mombasa Dog Help",
    location: "Mombasa",
    phone: "0722 456 789",
  },
  {
    name: "Kisumu Stray Dog Shelter",
    location: "Kisumu",
    phone: "0733 987 654",
  },
  {
    name: "Eldoret Rescue & Rehab",
    location: "Eldoret",
    phone: "0744 321 678",
  },
];

const RescueCenter = () => {
  return (
    <Main>
      <section id="rescue" className="pt-20 container mx-auto mt-8 p-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Rescue a Dog 🆘
        </h2>
        <p className="text-center mt-4 max-w-3xl mx-auto text-gray-700">
          Help Rescue & Reunite Dogs! 🐾 Every dog deserves safety and care. In
          our Dog Rescue section, you can report lost or stray dogs, helping
          them find their way home or into loving arms. Browse listings of
          rescued dogs available for adoption and connect with rescue
          organizations dedicated to giving these pups a second chance. Whether
          you're reuniting a lost pet or offering a forever home, your support
          makes a difference in a dog's life! 🐶💙
        </p>

        <h2 className="text-2xl font-bold my-10 text-center text-blue-700">
          Nearby Rescue Centers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {centers.map((center) => (
            <div
              key={center.name}
              className="bg-blue-100 border border-blue-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-900">
                {center.name}
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                <strong>Location:</strong> {center.location}
              </p>
              <p className="text-sm text-blue-700">
                <strong>Phone:</strong> {center.phone}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default RescueCenter;
