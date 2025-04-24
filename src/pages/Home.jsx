import HeroImage from "../assets/found a home.jpeg";
import Main from "../components/Main";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <div className=" flex justify-between bg-displayGrey">
        <div className="flex items-center flex-col w-full px-4 xl:px-0 lg:w-2/5 py-4 md:py-5 lg:py-4 2xl:py-20 overflow-y-auto">
          <div className="flex flex-col gap-6 items-center justify-center flex-grow max-w-md lg:ml-[60px] mt-4 w-full">
            <h2 className="text-4xl sm:font-medium lg:font-bold my-0 text-black my-4">
              <span className="text-3xl"> 🐾 </span> Will you help us find our
              fur-ever homes?
            </h2>
            <p className="text-greyish text-base sm:font-semibold xl:font-medium my-4">
              Find your perfect furry friend and give them a loving home. Adopt
              a four-legged fur-iend today and give them a fur-ever home.
              Because when you rescue one, you’re not just their hero—you’re
              their whole paw-sible future. 🐾💙
            </p>
            <p className="flex flex-col gap-2 my-4">
              Whether you're looking to adopt, foster, or just show some
              love—you're in the right place. Start your journey today.
            </p>

            <button
              onClick={() => navigate("/adopt")}
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white text-base px-6 py-3 rounded-full shadow-md transition"
            >
              Click to Adopt →
            </button>
          </div>
          <div className="text-center px-4 max-w-md lg:ml-[60px] w-full xl:px-0 text-sm mb-2">
            <p className="text-gray">
              <span className="text-textPurple text-xl hover:text-mediumPurple font-medium cursor-pointer whitespace-nowrap">
                <span className="text-3xl"> 🐾 </span> Every dog deserves a
                loving Home. <span className="text-3xl"> 🐾 </span>
              </span>
            </p>
          </div>
        </div>

        <div className="w-[55%]">
          <div className="h-[100%] w-[95%] flex flex-col bg-faintGrey items-center text-center rounded-[24px]">
            <div className=" overflow-hidden w-full flex justify-end rounded-bg">
              <img
                src={HeroImage}
                alt="heroImg"
                className="w-[90%] h-[760px] rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Home;
