"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const CardLayout = () => {
  const top = useRef<HTMLDivElement | null>(null); // Specify the type here
  const bottom = useRef<HTMLDivElement | null>(null); // Specify the type here

  const topButton = useRef<HTMLButtonElement | null>(null); // Specify the type here
  const bottomButton = useRef<HTMLButtonElement | null>(null); // Specify the type here

  useEffect(() => {
    // Function to update cursor position
    const scrollInfo = (e: { target: any }) => {
      if (top.current) {
        gsap.to(top.current, {
          scrollTo: { x: 0 },
          duration: 1,
          ease: "power2.inOut",
        });
      }
      topButton.current?.classList.add("selected");
      bottomButton.current?.classList.remove("selected");
      //   if (bottom.current) {
      //     gsap.to(bottom.current, {
      //       scrollTo: { x: 0 },
      //       duration: 0.75,
      //       ease: "power2.inOut",
      //     });
      //   }
    };

    const scrollMailing = (e: { target: any }) => {
      if (top.current) {
        gsap.to(top.current, {
          scrollTo: { x: top.current.scrollWidth },
          duration: 1,
          ease: "power2.inOut",
        });
      }
      bottomButton.current?.classList.add("selected");
      topButton.current?.classList.remove("selected");
      //   if (bottom.current) {
      //     gsap.to(bottom.current, {
      //       scrollTo: { x: bottom.current.scrollWidth },
      //       duration: 0.75,
      //       ease: "power2.inOut",
      //     });
      //   }
    };

    if (topButton.current)
      topButton.current.addEventListener("click", scrollInfo);
    if (bottomButton.current)
      bottomButton.current.addEventListener("click", scrollMailing);

    return () => {
      if (topButton.current)
        topButton.current.removeEventListener("click", scrollInfo);
      if (bottomButton.current)
        bottomButton.current.removeEventListener("click", scrollMailing);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen">
      <div className="w-screen top-0 fixed h-1/2 overflow-y-hidden">
        <div
          className="min-w-full h-full overflow-y-hidden overflow-x-scroll flex flex-row  custom-scrollbar"
          ref={top}
        >
          <div className="w-screen h-full flex-shrink-0 relative">
            <div className="card overflow-hidden absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-row  justify-center items-center">
              <p className="absolute top-4">
                {" "}
                Upcoming: <span className="analog">2/14/25</span> <a>tickets </a> 
              </p>
              <h1 className="">Clubotomy NYC</h1>
              <div className="absolute bottom-4">
                No thoughts on the dancefloor
              </div>
            </div>
          </div>
          <div className="w-screen h-full  flex-shrink-0 relative">
            <div className="card bg-[red] overflow-hidden absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-row  justify-center items-center">
              <form className="absolute top-4">
                <input placeholder="Email"></input>
                <button className="ml-2">Submit</button>
              </form>
              <h1 className="">Clubotomy NYC</h1>
              <div className="absolute bottom-4">
                No thoughts on the dancefloor
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen bottom-0 fixed overflow-y-hidden h-1/2  mr-[1000px]">
        <div
          className="min-w-full h-full overflow-y-hidden overflow-x-scroll flex flex-row "
          ref={bottom}
        >
          <div className="w-screen h-full flex-shrink-0 relative">
            <div className="card bg-[red] overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-row  justify-center items-center">
              <p className="absolute top-4">No thoughts on the dancefloor</p>
              <h1 className="">Clubotomy NYC</h1>
              <div className="absolute bottom-4">
                No thoughts on the dancefloor
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="m-4 z-10 absolute left-0 top-1/2 selected"
        ref={topButton}
      >
        Upcoming
      </button>
      <button className="m-4 z-10 absolute right-0 top-1/2" ref={bottomButton}>
        Mailing list
      </button>
    </div>
  );
};

export default CardLayout;
