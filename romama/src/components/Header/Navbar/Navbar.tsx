"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const title = ["INICIO", "PRODUCTOS", "NOSOTROS", "PEDIDOS", "CONTACTO"];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 right-0 w-full z-50 ">
      <div className=" flex flex-row justify-end  w-screen  bg-cherryPink ">
        <div className=" hidden sm:flex sm:flex-row sm:items-center sm:mr-32 ">
          {title.map((item, index) => {
            return (
              <div className=" mx-2 p-2" key={index}>
                <button className="text-xl ">
                  {item}
                </button>
              </div>
            );
          })}
          
        </div>

        
          <div className="sm:hidden flex flex-wrap justify-between items-center bg-cherryPink p-4 w-full">
            <Link href={"/"} className="text-5xl font-display font-extrabold">RM</Link>
          <button
            onClick={() => setIsOpen(true)}
            className="text-5xl "
          >
            <GiHamburgerMenu />
          </button>
          </div>
        

        {isOpen ? (
          <div className="flex flex-row">
          <div className="flex flex-row fixed top-0 left-0 bg-cherryPink  w-[70%] h-full animate-fade-right animate-duration-500 animate-ease-linear animate-fill-both ">
            <div className="flex flex-col mt-10 font-bold">
              {title.map((item, index) => {
                return (
                  <div className=" ml-8 p-2" key={index}>
                    <button onClick={() => setIsOpen(!isOpen)}>
                    <Link href={`/${item.toLowerCase() === "inicio" ? "" : item.toLowerCase()}`}
                      className="text-[20px]  hover:border-offRed"
                    >
                      {item}
                    </Link>

                    </button>
                  </div>
                );
              })}
            </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className=" text- text-6xl flex justify-center w-full font-bold"
              >
                <IoIosClose />
              </button>
          </div>
              <button onClick={()=>setIsOpen(!isOpen)} className="flex bg-black/10  fixed top-0 left-[70%] backdrop-blur-[5px] w-[30%] h-full animate-fade-right animate-duration-500 animate-ease-linear animate-fill-both  ">
                
              </button>


          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;