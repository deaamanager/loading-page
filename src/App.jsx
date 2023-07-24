import { useEffect } from "react";
import { init } from "./utlis/initDroneLayer";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "./index.css";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="App. h-full max-w-7xl mx-auto flex flex-col items-start pl-2 md:pl-5">
      <div className="hero. pl-2 my-28 relative  ">
        <div className="absolute w-[20rem] h-[18rem] rounded-2xl blur bg-amber-500/60 z-0 rotate-45 top-14 -left-12 " />
        <div className="absolute w-[20rem] h-[18rem] rounded-full bg-amber-500/60 z-0  top-12 blur -left-0 " />

        <div className="z-50 relative w-full h-full top-0 left-0">
          <h1 className="text-3xl md:text-5xl text-amber-500  ">
            this loading-page from
          </h1>
          <p className="text. text-sm md:text-base mt-7">
            {" "}
            there can make your dics or write what you want about
          </p>

          <p className="text. text-sm md:text-base ">
            {" "}
            there can make your dics or write whatyou want
          </p>
          <p className="text. text-sm md:text-base ">
            {" "}
            there can make your dics or
          </p>

          <p className="text. text-sm md:text-base ">
            {" "}
            there can make your dics or write what you want about
          </p>

          <p className="text. text-sm md:text-base ">
            {" "}
            there can make your dics or write whatyou want
          </p>
          <p className="text. text-sm md:text-base ">
            {" "}
            there can make your dics or
          </p>
        </div>
        <div className="mt-24 md:mt-12 flex flex-col items-center justify-center  md:flex-row w-[40%]  md:w-full gap-y-10 ">
          <div className="w-full md:mr-6 relative  box  overflow-hidden flex items-center justify-center ">
            <button
              className="relative md:pr-8 group z-50 py-3 px-3 w-full h-full rounded-lg transition-all duration-150  font-bold overflow-hidden flex items-center justify-center gap-x-2
           bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']   before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:z-50 before:blur  before:opacity-0
          "
            >
              <span className=" ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/800px-PayPal_Logo_Icon_2014.svg.png"
                  className="h-6 w-6 group-hover:scale-125 transition-all duration-150  ease-in-out object-contain"
                />
              </span>
              <span className="text-gray-300 text-sm">Buy Now</span>
            </button>
          </div>
          <button
            className="w-full bg-[#FFBA02]  py-2 realtive  hover:shadowyalow hover:border-2 border-[#FFBA02]  hover:scale-105 text-gray-300
            hover:animate-pulse rounded-xl transition-all duration-150  font-bold   
          text-center bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:z-50  before:opacity-5
          "
          >
            More Info
          </button>
        </div>
      </div>

      <div className="pricing.  mt-24  md:mt-[12.5rem] ">
        <h1 className="text. pl-3  md:pl-16 text-center text-5xl md:text-[3.5rem] bg-gradient-to-r from-[#FFBA02] via-gray-500 to-[#FFBA02]  bg-clip-text md:font-bold  text-transparent ">
          <Typewriter
            loop={true}
            cursor
            delaySpeed={500}
            words={["My Packages"]}
          />
          <Cursor cursorColor="#FFBA02" />
        </h1>
      </div>

      <div className="w-full flex-col lg:flex-row flex items-center justify-center lg:space-x-10 lg:space-y-0 space-y-10 mb-24 md:mb-36 mt-8 pt-24">
        {/* erste card */}
        <div className="h-[26.5rem] w-72  bg-transparent cursor-pointer group prespective rounded-2xl ">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute group  w-full h-full backface-hiiden rounded-2xl   backdrop-blur">
              <div className="absolute w-full h-full text-[#111] py-32 flex flex-col items-center  bottom-2 left-0 z-50 rounded-2xl">
                <div className=" w-full h-full absolute flex flex-col items-center top-[18rem] ">
                  <h1 className="text-[16px]  bg-gradient-to-r from-[#8d6a0a] font-medium via-gray-800 to-[#8d6a0a]  bg-clip-text md:font-bold text-transparent">
                    Some quick example text to build on
                  </h1>
                  <h1 className="mt-1 uppercase text-[13px]  font-bold bg-gradient-to-r from-[#8d6a0a] via-gray-800 to-[#8d6a0a]  bg-clip-text md:font-bold  text-transparent">
                    Some quick example text
                  </h1>
                </div>
                <button
                  className=" text-gray-800 rounded-xl z-50 bg-[#FFBA02]  px-2  top-[90%] right-[10%] absolute animate-pulse
              py-2 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:opacity-0 
              "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <img
                className=" -hue-rotate-15 sab z-0  object-cover h-full w-full rounded-2xl "
                src="https://media.istockphoto.com/id/1004078578/photo/little-girl-child-with-drone-at-home.jpg?s=612x612&w=0&k=20&c=z8vLzeQ161jVpG-7b9UqwIjagSdbYd-Go6vpIJEdtwQ="
                alt=""
              />
            </div>
            <div className="absolute w-full h-[26.5rem]  my-rotate-y-180 backface-hiiden  rounded-2xl">
              <div className="block    w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl">
                  <img
                    className="rounded-t-lg h-full  "
                    src="https://www.cameraelectronic.com.au/cdn/shop/products/800q-01_114014_800x.png?v=1680296985"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
                </div>
                <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                  <h5 className="mb-2 text-xl font-medium leading-tight  text-amber-500/80 shadow-2xl  ">
                    Card title
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="text-gray-600 relative rounded-full bg-[#FFBA02] hover:shadowyalow hover:border-2 border-[#FFBA02] w-full py-2 my-3
                  transition-all duration-150 ease-in-out  font-bold  animate-puls 
                  bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-0
                  "
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*card 2 */}
        <div className="h-[26.5rem] w-72  bg-transparent cursor-pointer group prespective rounded-2xl ">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute group  w-full h-full backface-hiiden rounded-2xl   backdrop-blur">
              <div className="absolute w-full h-full text-[#111] py-32 flex flex-col items-center  bottom-2 left-0 z-50 rounded-2xl">
                <div className=" w-full h-full absolute flex flex-col items-center top-[18rem] ">
                  <h1 className="text-[16px]  bg-gradient-to-r from-[#8d6a0a] font-medium via-gray-800 to-[#8d6a0a]  bg-clip-text md:font-bold text-transparent">
                    Some quick example text to build on
                  </h1>
                  <h1 className="mt-1 uppercase text-[13px]  font-bold bg-gradient-to-r from-[#8d6a0a] via-gray-800 to-[#8d6a0a]  bg-clip-text md:font-bold  text-transparent">
                    Some quick example text
                  </h1>
                </div>
                <button
                  className=" text-gray-800 rounded-xl z-50 bg-[#FFBA02]  px-2  top-[90%] right-[10%] absolute animate-pulse
              py-2 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:opacity-0 
              "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <img
                className=" -hue-rotate-15 sab z-0  object-cover h-full w-full rounded-2xl "
                src="https://www.fourstateshomepage.com/wp-content/uploads/sites/36/2023/03/Steps-To-Legally-Pilot-A-Drone.jpg?w=1280"
                alt=""
              />
            </div>
            <div className="absolute w-full h-[26.5rem]  my-rotate-y-180 backface-hiiden  rounded-2xl">
              <div className="block    w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl">
                  <img
                    className="rounded-t-lg h-full  "
                    src="https://www.cameraelectronic.com.au/cdn/shop/products/800q-01_114014_800x.png?v=1680296985"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
                </div>
                <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                  <h5 className="mb-2 text-xl font-medium leading-tight  text-amber-500/80 shadow-2xl  ">
                    Card title
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="text-gray-600 relative rounded-full bg-[#FFBA02] hover:shadowyalow hover:border-2 border-[#FFBA02] w-full py-2 my-3
                  transition-all duration-150 ease-in-out  font-bold  animate-puls 
                  bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-0
                  "
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*card 3 */}
        <div className="h-[26.5rem] w-72  bg-transparent cursor-pointer group prespective rounded-2xl ">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute group  w-full h-full backface-hiiden rounded-2xl   backdrop-blur">
              <div className="absolute w-full h-full text-[#111] py-32 flex flex-col items-center  bottom-2 left-0 z-50 rounded-2xl">
                <div className=" w-full h-full absolute flex flex-col items-center top-[18rem] ">
                  <h1 className="text-[16px]  bg-gradient-to-r from-[#8d6a0a] font-medium via-gray-800 to-[#8d6a0a]  bg-clip-text md:font-bold text-transparent">
                    Some quick example text to build on
                  </h1>
                  <h1 className="mt-1 uppercase text-[13px]  font-bold bg-gradient-to-r from-[#8d6a0a] via-gray-800 to-[#8d6a0a]  bg-clip-text md:font-bold  text-transparent">
                    Some quick example text
                  </h1>
                </div>
                <button
                  className=" text-gray-800 rounded-xl z-50 bg-[#FFBA02]  px-2  top-[90%] right-[10%] absolute animate-pulse
              py-2 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:opacity-0 
              "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
              <img
                className=" -hue-rotate-15 sab z-0  object-cover h-full w-full rounded-2xl "
                src="https://www.dartdrones.com/wp-content/uploads/2018/10/shutterstock_653350510-scaled.jpg"
                alt=""
              />
            </div>
            <div className="absolute w-full h-[26.5rem]  my-rotate-y-180 backface-hiiden  rounded-2xl">
              <div className="block    w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl">
                  <img
                    className="rounded-t-lg h-full  "
                    src="https://www.cameraelectronic.com.au/cdn/shop/products/800q-01_114014_800x.png?v=1680296985"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
                </div>
                <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                  <h5 className="mb-2 text-xl font-medium leading-tight  text-amber-500/80 shadow-2xl  ">
                    Card title
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    className="text-gray-600 relative rounded-full bg-[#FFBA02] hover:shadowyalow hover:border-2 border-[#FFBA02] w-full py-2 my-3
                  transition-all duration-150 ease-in-out  font-bold  animate-puls 
                  bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-0
                  "
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <div className="flex items-center justify-center flex-row   w-full h-[14rem] my-24 md:my-[12rem]">
        <div className="pl-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1287/1287462.png"
            className=" object-cover w-[80%] "
            alt=""
          />
        </div>
        <div className=" pr-8 relative">
          <h1 className="text-3xl md:text-5xl text-amber-500 w-full absolute -top-24">
            <Typewriter
              loop={true}
              cursor
              delaySpeed={500}
              words={["this loading-page from"]}
            />
            <Cursor cursorColor="#FFBA02" />
          </h1>
          <p className="text. text-sm md:text-base mt-7">
            {" "}
            there can make your dics or write what you want about
          </p>

          <p className="text. text-sm md:text-base ">
            {" "}
            there can make your dics or write whatyou want
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex items-center justify-center flex-row w-full h-[14rem] space-x-16  my-24 md:my-[12rem] ">
        <div className=" pl-4 relative">
          <h1 className="text-3xl md:text-5xl text-amber-500 w-full absolute -top-24">
            <Typewriter
              loop={true}
              cursor
              delaySpeed={500}
              words={["this loading-page from"]}
            />
            <Cursor cursorColor="#FFBA02" />
          </h1>
          <p className="text. text-sm md:text-base mt-7">
            {" "}
            there can make your dics or write what you want about
          </p>

          <p className="text. text-sm md:text-base ">
            {" "}
            there can make your dics or write whatyou want
          </p>
        </div>
        <div className="">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2631/2631455.png"
            className=" object-cover w-[80%] "
            alt=""
          />
        </div>
      </div>
      {/*bezahlmethode logos */}
      <div className="  flex items-center justify-center w-full h-full my-10 md:my-16 ">
        <img
          src="https://www.bettdecke.de/wp-content/uploads/2020/11/trust-bottom.png"
          className="object-cover w-[80%] md:w-[50%] "
          alt=""
        />
      </div>

      <footer className="  rounded-lg shadow w-[95%] mb-4 flex justify-center items-center">
        <div className="w-full p-4 md:py-8">
          <div className="flex items-center justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-400 ">
                Flowbite
              </span>
            </a>
            <ul className="flex flex-wrap items-center justify-center mb-0 text-[8px] font-medium text-[#FFBA02]/60  ">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border border-[#FFBA02]/60 sm:mx-auto  lg:my-8" />
          <span className="block md:text-base text-[11px] text-gray-400 text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            All Rights Reserved By Deaa Aldin Alawad
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
