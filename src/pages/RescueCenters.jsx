import RescueImage from "../assets/rescue-img.webp";
import { FaPaw } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 bg-gray-50 rounded-3xl shadow-md">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            <span className="text-red-500  underline pr-1">Rescue!</span> a Dog
            🆘
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Paw-lease don’t scroll past a pup in need! 🐶💔 Spotted a stray tail
            wagging alone or a pup feeling ruff? Let’s fetch them the help they
            deserve! Reach out to nearby rescue centers or vet clinics—we're all
            ears when it comes to saving lives. Every dog deserves a second
            leash on life. 🦴 At our center, we believe in turning sad howls
            into happy tails. So why not stop chasing your tail and start
            changing a life?
          </p>
          <button
            onClick={() => navigate("/vet")}
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-3 rounded-full shadow-md transition"
          >
            Vet Inquiry →
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src={RescueImage}
            alt="Dog wrapped in towel with food and milk"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Bottom Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-6 lg:px-24">
        {centers.map((center) => (
          <div className=" p-6 bg-blue-200 rounded-xl mb-2 shadow-lg  text-center  hover:shadow-lg transition">
            <FaPaw className=" text-3xl mx-auto text-blue-900 mb-4" />
            <h3 className=" font-bold text-blue-900 text-lg mb-2">
              {center.name}
            </h3>
            <p className="text-gray-600 text-blue-700 text-sm">
              {center.location}
            </p>
            <p className="text-gray-600 text-sm text-blue-700">
              {center.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RescueCenter;
