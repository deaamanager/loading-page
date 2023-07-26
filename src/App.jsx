import { useEffect, useState } from "react";
import { init } from "./utlis/initDroneLayer";
import { Typewriter, Cursor } from "react-simple-typewriter";
import "./index.css";

function App() {
  useEffect(() => {
    init();
  }, []);
  const [buy, setBuy] = useState(false);
  console.log(buy);

  return (
    <>
      <div className=" relative h-16 max-w-2xl mx-auto  flex items-center justify-center mt-14 md:mt-24 rounded-full">
        <div className="absolute bg-amber-500/30 top-0 left-0 w-full h-full blur rounded-full " />
        <ul class=" flex items-center justify-evenly relative text-gray-400 text-[11px] md:text-base ">
          <li>
            <a
              href="/#Cards"
              className="mr-4 hover:underline md:mr-6 hover:text-[#FFBA02]/60  "
            >
              Our Packages
            </a>
          </li>
          <li>
            <a
              href="/#Specification"
              className="mr-4 hover:underline md:mr-6 hover:text-[#FFBA02]/60 "
            >
              Specification
            </a>
          </li>
          <li>
            <a
              href="/#Other-Prducts"
              className="mr-4 hover:underline md:mr-6 hover:text-[#FFBA02]/60  "
            >
              Other Prducts
            </a>
          </li>
          <li onClick={() => setBuy(!buy)}>
            <a href="#" className="hover:underline hover:text-[#FFBA02]/60 ">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className=" overflow-hidden h-full max-w-7xl mx-auto flex flex-col items-start pl-2 md:pl-5">
        <div className="pl-2 my-28 ">
          <h1 className="text-3xl md:text-5xl text-amber-500">GLT-Max Drone</h1>
          <p className=" flex flex-col text-sm md:text-base mt-7 text-gray-300">
            {" "}
            <span>Welcome to Dorne,</span>
            <span>the ultimate destination for travel enthusiasts.</span>
          </p>

          <p className="text-sm md:text-base  text-gray-300">
            {" "}
            Our mission is to create the most memorable
          </p>
          <p className="text-sm md:text-base flex flex-col md:flex-row text-gray-300 ">
            {" "}
            <span>and extraordinary vacation experiences</span>
            <span>for our customers.</span>
          </p>

          <div className="mt-24  md:mt-12 flex flex-col items-center justify-center  md:flex-row w-[40%]  md:w-full gap-y-10 ">
            <button
              onClick={() => setBuy(!buy)}
              className="w-full bg-[#FFBA02]  py-2 realtive   hover:shadowyalow hover:border-2 border-[#FFBA02]  hover:scale-105 text-[#111]
          hover:animate-pulse rounded-xl transition-all duration-150  font-bold   
        text-center bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:z-50  before:opacity-5
        "
            >
              More Info
            </button>
            <div className="w-[150%] md:mr-6 relative ml-12  box  overflow-hidden flex items-center justify-center ">
              <button
                onClick={() => setBuy(!buy)}
                className="relative md:pr-8  py-3 px-3  w-full  h-full rounded-lg transition-all duration-150 z-20 font-bold overflow-hidden flex items-center justify-center gap-x-2
         bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']   before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:z-50 before:blur  before:opacity-0
        "
              >
                <span className=" ">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/800px-PayPal_Logo_Icon_2014.svg.png"
                    className="h-6 w-6  transition-all duration-150  ease-in-out object-contain"
                    alt="drone"
                  />
                </span>
                <span className="text-gray-300 text-sm">Buy Now</span>
              </button>
            </div>
            {buy && (
              <div className="absolute top-0 left-0 z-50 bg-[#111]/80 w-full h-full ">
                <div className="flex flex-col items-center justify-center space-y-10 mt-[12rem] ">
                  <div className="flex items-center justify-center flex-row pl-5 space-x-5 md:px-10 md:space-x-14 pb-[5rem]">
                    <div className="">
                      <p className="md:px-24 md:text-xl text-gray-300">
                        {" "}
                        This Loading-Page just to Show Customer How We building
                        and Deploy UI/UX design
                      </p>
                    </div>

                    <img
                      className="md:h-[15rem] h-[10rem] px-10 object-cover rounded-full mix-blend-screen animate-pulse "
                      src="https://cdn.sanity.io/images/7n5v8za3/production/6b2dffb830ec36a6cba4b89112392e02d833f4fa-449x555.png"
                      alt="deaa-aldin-alawad"
                    />
                  </div>
                  <div className="pb-[5rem] flex items-center justify-between gap-x-10">
                    <span>
                      <a href="https://www.linkedin.com/in/deaa-aldin-alawad/">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
                          alt="Linkedin-logo"
                          className="h-8 w-8 object-cover mix-blend-screen cursor-pointer"
                        />
                      </a>
                    </span>

                    <span>
                      <a href="https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0">
                        <img
                          src=" https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
                          alt="Whatsapp-logo"
                          className="h-9 w-9 object-cover mix-blend-screen cursor-pointer"
                        />
                      </a>
                    </span>
                  </div>
                  <button
                    onClick={() => setBuy(!buy)}
                    className="relative py-1 md:w-[10%] w-[20%] text-amber-500 text-sm  h-full rounded-lg transition-all duration-150 z-20 font-bold overflow-hidden flex items-center justify-center gap-x-2
         bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']   before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:z-50 before:blur  before:opacity-0"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pricing.  mt-24  md:mt-[12.5rem] ">
          <h1 className="text. pl-3  md:pl-16 text-center text-5xl md:text-[3.5rem] bg-gradient-to-r from-[#FFBA02] via-gray-500 to-[#FFBA02]  bg-clip-text md:font-bold  text-transparent ">
            <Typewriter
              loop={true}
              cursor
              delaySpeed={5000}
              words={["Our Package :"]}
            />
            <Cursor cursorColor="#FFBA02" />
          </h1>
        </div>

        <section
          id="Cards"
          className="w-full flex-col lg:flex-row flex items-center justify-center lg:space-x-10 lg:space-y-0 space-y-10 mb-24 md:mb-36 mt-8 pt-24"
        >
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
                      alt="drone"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
                  </div>
                  <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                    <h5 className="mb-2 text-xl font-medium leading-tight  text-amber-500/80 shadow-2xl  ">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
                  alt="drone"
                />
              </div>
              <div className="absolute w-full h-[26.5rem]  my-rotate-y-180 backface-hiiden  rounded-2xl">
                <div className="block    w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl">
                    <img
                      className="rounded-t-lg h-full  "
                      src="https://www.cameraelectronic.com.au/cdn/shop/products/800q-01_114014_800x.png?v=1680296985"
                      alt="drone"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
                  </div>
                  <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                    <h5 className="mb-2 text-xl font-medium leading-tight  text-amber-500/80 shadow-2xl  ">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
                  alt="drone"
                />
              </div>
              <div className="absolute w-full h-[26.5rem]  my-rotate-y-180 backface-hiiden  rounded-2xl">
                <div className="block    w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl">
                    <img
                      className="rounded-t-lg h-full  "
                      src="https://www.cameraelectronic.com.au/cdn/shop/products/800q-01_114014_800x.png?v=1680296985"
                      alt="drone"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
                  </div>
                  <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                    <h5 className="mb-2 text-xl font-medium leading-tight  text-amber-500/80 shadow-2xl  ">
                      Card title
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
        </section>

        {/* section 1 */}
        <section
          id="Specification"
          className="flex items-center justify-center flex-row w-full h-[14rem] my-24 md:my-[12rem]"
        >
          <div className="pl-4 w-[100%] md:w-[40%]  bg-red-500. mr-8 md:mr-0 relative z-50 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1287/1287462.png"
              className=" object-cover md:p-24   "
              alt="info-dron"
            />
          </div>
          <div className=" pr-6 md:pr-12 bg-green-500. relative">
            <div className="absolute h-44 rounded-3xl w-[50rem]  top-0 blur-3xl -left-[19rem] bg-amber-500/40 z-0" />
            <h1 className="text-2xl md:text-5xl text-amber-500  w-full absolute -top-16 md:-top-24">
              <Typewriter
                loop={true}
                delaySpeed={5000}
                words={["Specification :"]}
              />
              <Cursor cursorColor="#FFBA02" />
            </h1>
            <p className="relative text-gray-400 mb-4 text-sm md:text-base mt-7">
              <ul className="flex flex-col md:pr-12">
                <li className=" md:flex  md:flex-col">
                  <span>- A 4K camera that can capture stunning photos</span>
                  <span> and videos from any angle.</span>{" "}
                </li>

                <li className="mt-1">
                  - A foldable design that makes it easy to carry and store.{" "}
                </li>
              </ul>
            </p>
          </div>
        </section>
        {/* section 2 */}
        <section
          id="Other-Prducts"
          className="flex items-center justify-center flex-row w-full h-[14rem] my-24 md:my-[12rem]"
        >
          <div className=" pl-4 md:pl-8 relative">
            <div className="absolute h-44 rounded-3xl w-[50rem] top-0 blur-3xl -right-[35rem] bg-amber-500/40 z-0" />
            <h1 className="text-xl md:text-5xl text-amber-500  w-[150%] absolute -top-16 md:-top-24">
              <Typewriter
                loop={true}
                delaySpeed={5000}
                words={["Other Prducts :"]}
              />
              <Cursor cursorColor="#FFBA02" />
            </h1>
            <p className="relative pl-4 text-gray-400 mb-4 text-[12px] md:text-base mt-7">
              <ul className="list-disc w-full ">
                <li>Photography and Videography</li>
                <li>Drone Parts and Components</li>
                <li>FPV Gear</li>
                <li>Drone Racing Equipment</li>
                <li>Training and Education</li>
              </ul>
            </p>
          </div>
          <div className="pl-4 w-[50%] md:w-[40%] mr-8  md:mr-0 relative z-50 ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2631/2631455.png"
              className=" object-cover md:p-24 "
              alt="info-dron"
            />
          </div>
        </section>
        {/*bezahlmethode logos */}
        <div className="  flex items-center justify-center w-full h-full my-10 md:my-16 ">
          <img
            src="https://www.bettdecke.de/wp-content/uploads/2020/11/trust-bottom.png"
            className="object-cover w-[80%] md:w-[50%] "
            alt="drone"
          />
        </div>
        {/* Footer */}
        <footer className="  rounded-lg shadow w-[95%] mb-4 flex justify-center items-center">
          <div className="w-full p-4 md:py-8">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0">
                <img
                  src="./dron.png"
                  class="md:h-24 h-10  object-fill hover:animate-pulse"
                  alt="dron-logo"
                />
              </a>
              <ul class="flex flex-wrap w-full items-end justify-center md:text-base text-[8px] font-medium  text-gray-400 ">
                <li>
                  <a
                    href="/#Cards"
                    className="mr-4 hover:underline md:mr-6 hover:text-[#FFBA02]/60  "
                  >
                    Our Packages
                  </a>
                </li>
                <li>
                  <a
                    href="/#Specification"
                    className="mr-4 hover:underline md:mr-6 hover:text-[#FFBA02]/60 "
                  >
                    Specification
                  </a>
                </li>
                <li>
                  <a
                    href="/#Other-Prducts"
                    className="mr-4 hover:underline md:mr-6 hover:text-[#FFBA02]/60  "
                  >
                    Other Prducts
                  </a>
                </li>
                <li onClick={() => setBuy(!buy)}>
                  <a
                    href="#"
                    className="hover:underline hover:text-[#FFBA02]/60 "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border border-[#FFBA02]/60 sm:mx-auto  lg:my-8" />
            <span className="block md:text-base text-[11px] text-gray-300/60 text-center ">
              © 2023 All Rights Reserved By{" "}
              <a
                className=" underline hover:text-[#FFBA02] "
                href="https://frontend-react-brown.vercel.app/"
              >
                {" "}
                Deaa Aldin Alawad
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
