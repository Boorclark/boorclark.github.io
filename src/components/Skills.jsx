import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import Bootstrap from "../assets/bootstrap.png";
import Flask from "../assets/flask.png";
import Python from "../assets/python.png";
import Git from "../assets/git.png";
import Cplus from "../assets/C++.png";
import Golang from "../assets/golang.png";
import PowerShell from "../assets/powershell.png";
import Angular from "../assets/angular.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 ">
            Technical Skills
          </p>
          <p className="py-4">
            // These are the technologies I've worked with the most
          </p>
        </div>
        <div className="w-full items-end grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Cplus} alt="C++ icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Golang} alt="Golang icon" />
            <p className="my-4">GOLANG</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={PowerShell}
              alt="Powershell icon"
            />
            <p className="my-4">POWERSHELL</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="GIT icon" />
            <p className="my-4">GIT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Angular} alt="ANGULAR icon" />
            <p className="my-4">ANGULAR</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Flask} alt="FLASK icon" />
            <p className="my-4">FLASK</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="BOOTSRAP icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
