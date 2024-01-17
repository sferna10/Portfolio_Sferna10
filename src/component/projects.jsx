import React from "react";
/* tslint:disable:no-unused-variable */
import Project1Img from "./Assets/HeroPic.jpg";
import Project2Img from "./Assets/Project2.png";
import Project3Img from "./Assets/Project3.png";
import Project4Img from "./Assets/Project4.png";
import Project5Img from "./Assets/Project5.png";
import Project6Img from "./Assets/Project6.png";
export default function Projects() {
  return (
        <>
            <div className="max-w-full m-20 bg-indigo-800">
                <div className="grid m justify-items-center">
                    <h1 className="text-3xl text-white mt-10">Projects</h1>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 p-5">
                       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        </div>
                       <hr/>
                   <div className="grid grid-cols-2 gap-4 p-5">      
                </div>
            </div>
        </>
    );
}