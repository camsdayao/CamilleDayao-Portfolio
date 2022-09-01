import React from "react";
import CamilleImg from "../assets/CamilleCropped.jpg";
//import { Typewriter } from "react-simple-typewriter";
//import TypeWriterEffect from "react-typewriter-effect";
import Typewriter from "typewriter-effect";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const Hero = () => {
  return (
    //flex container
    <div
      name="Hero"
      className="container flex flex-col-reverse items-center px-6 mx-auto justify-center md:space-y-0 md:flex-row w-full h-screen"
    >
      <div className="flex flex-col mb-32 space-y-0 md:w-1/2 justify-center">
        <div className="m-8">
          <h1 className="font-bold text-3xl text-center space-y-6 md:text-5xl md:mt-44 w-full">
            Hello I'm Camille!
          </h1>
        </div>
        <div className="items-center text-1xl ml-6 text-center font-semibold">
          <p>You can call me 'Cams'</p>
          <p>A software engineer based on Manila</p>
          <h1 className="pt-10">
            <span>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm Software Engineer")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("I'm Web Developer")
                    .pauseFor(500)
                    .deleteAll()
                    .typeString("I'm Woman")
                    .pauseFor(500)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </h1>
          <div className="flex space-x-8 justify-center mt-8 drop-shadow-2xl">
            <button className="rounded-full bg-orange-100 p-2 px-2 hover:bg-orange-300">
              Click here to view CV
            </button>
            <a
              href="https://ph.linkedin.com/in/camille-dayao-818175188"
              target="_blank"
            >
              <button className="rounded-full p-2 drop-shadow-2xl bg-orange-100 hover:bg-orange-300">
                <BsLinkedin size={22} />
              </button>
            </a>
            <a href="https://github.com/camsdayao" target="_blank">
              <button className="rounded-full p-2 bg-orange-100 hover:bg-orange-300">
                <BsGithub size={22} />
              </button>
            </a>

            <a href="mailto: camsdayao@gmail.com">
              <button className="rounded-full p-2 bg-orange-100 hover:bg-orange-300">
                <CgMail size={30} />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-52 md:w-1/4 mt-56 justify-center">
        <img src={CamilleImg} className="rounded-lg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
