import React from "react";
import { useEffect , useState } from "react";
import hero1 from "../../assets/hero-pic-1.png"
import hero2 from "../../assets/hero-pic-2.png"
import hero3 from "../../assets/hero-pic-3.png"
import "./hero.css"
const Hero = () => {

const words = ['Programming', 'Web Design', "Social Skills" ,'Marketing'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const [blur, setBlur] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxBlur = 20; // Maximum blur value
    const blurValue = Math.min(scrollY / 90, maxBlur);
    setBlur(blurValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <div className="cont flex justify-center items-center min-h-[50vh] w-full bg-transparent py-12 md:py-24">
        <div className="hero-cont-box max-w-[1400px] h-[100%] flex flex-col justify-center items-center px-1 md:px-8  w-[900px]">
          <h1 className="text-2xl md:text-4xl sm:tet-3xl lg:text-5xl font-bold text-white text-center topu" style={{ filter: `blur(${blur}px)` }}>
            Learn the fundamentals with our Experts in
             <span style={{ filter: `blur(${blur}px)` }} key={index} className="fade-in ml-5 text-blue-500">{words[index]}</span>
          </h1>
          <p style={{ filter: `blur(${blur}px)` }} className="hidden lg:block mt-8 text-white text-lg md:text-xl font-light ">Utilize Effective Learning to Reach Your Potential</p>
          <div className="hero-input mt-14 h-16 border rounded-md overflow-hidden bg-white hidden lg:flex items-center w-[500px]">
            <input className="h-[100%] w-[88%] text-lg px-3 border-none outline-none" type="text" placeholder="Search Courses ..." />
            <button className="w-[12%] h-[100%] flex justify-center items-center text-gray-400 hover:text-black transition-all duration-700">
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <p className="text-white text-lg mt-6 hidden lg:flex">Explore our more useful products <i class="text-white fa-solid fa-heart"></i></p>
          <div className="hero-pics  space-x-4 mt-8 items-center hidden lg:flex">
            <img className="w-48 h-10 object-contain" src={hero3} alt="" />
            <img className="w-48 h-8 object-contain" src={hero2} alt="" />
            <img className="w-56 pb-4 h-14 object-cover" src={hero1} alt="" />
        </div>
        </div>
        
      </div>
      

    </>
  );
};

export default Hero;
