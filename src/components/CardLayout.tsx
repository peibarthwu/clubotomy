'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Draggable } from 'gsap/Draggable';
import CardAbout from './CardAbout';
import CardMailing from './CardMailing';

// Register the ScrollToPlugin
gsap.registerPlugin(Draggable, ScrollToPlugin);

// Define the types for the props using type aliasing
type CardLayoutProps = {
  title: string;
  date: string;
  link: string;
  text: string;
};

const CardLayout = ({ title, date, link, text }: CardLayoutProps) => {
  const top = useRef<HTMLDivElement | null>(null); // Specify the type here
  const control = useRef<HTMLButtonElement | null>(null);
  const topButton = useRef<HTMLButtonElement | null>(null); // Specify the type here
  const bottomButton = useRef<HTMLButtonElement | null>(null); // Specify the type here

  useEffect(() => {
    // Function to update cursor position
    const scrollInfo = () => {
      if (top.current) {
        gsap.to(top.current, {
          scrollTo: { x: 0 },
          duration: 1,
          ease: 'power2.inOut',
        });
      }
      topButton.current?.classList.add('selected');
      bottomButton.current?.classList.remove('selected');
    };

    const scrollMailing = () => {
      if (top.current) {
        gsap.to(top.current, {
          scrollTo: { x: top.current.scrollWidth / 2 },
          duration: 1,
          ease: 'power2.inOut',
        });
      }
      bottomButton.current?.classList.add('selected');
      topButton.current?.classList.remove('selected');
    };

    const onScroll = () => {
      if (!top.current) return;
      if (top.current.scrollLeft > top.current.offsetWidth * 0.5) {
        bottomButton.current?.classList.add('selected');
        topButton.current?.classList.remove('selected');
      } else {
        topButton.current?.classList.add('selected');
        bottomButton.current?.classList.remove('selected');
      }

      // Update the draggable control position based on the scrollLeft of top
      if (control.current && top.current) {
        const scrollLeft = top.current.scrollLeft;
        const maxScroll = top.current.scrollWidth - top.current.offsetWidth;
        const controlWidth = control.current.offsetWidth;
        const maxControlPos = top.current.offsetWidth - controlWidth;

        const controlPosition = (scrollLeft / maxScroll) * maxControlPos;
        gsap.set(control.current, {
          x: controlPosition,
        });
      }
    };

    if (topButton.current)
      topButton.current.addEventListener('click', scrollInfo);
    if (bottomButton.current)
      bottomButton.current.addEventListener('click', scrollMailing);

    if (control.current && top.current) {
      Draggable.create(control.current, {
        type: 'x', 
        bounds: top.current, // Constrain dragging within the top container
        onDrag: function () {
          const topWidth = top.current?.offsetWidth ?? 0;
          const scrollPos = (this.x / topWidth) * (top.current?.scrollWidth ?? 0);
          if (top.current) {
            top.current.scrollLeft = scrollPos; // Directly set the scroll position
          }
        },
        onDragEnd: function () {
          const topWidth = top.current?.offsetWidth ?? 0;
          const scrollPos = (this.x / topWidth) * (top.current?.scrollWidth ?? 0);
          if (top.current) {
            top.current.scrollLeft = scrollPos;
          }
        },
      });
    }

    if (top.current) top.current.addEventListener('scroll', onScroll);

    return () => {};
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen">
      <div className="w-screen top-0 fixed h-1/2 overflow-y-hidden">
        <div
          className="min-w-full h-full overflow-y-hidden overflow-x-scroll flex flex-row hide-scrollbar"
          ref={top}
        >
          <div className="w-screen h-full flex-shrink-0 relative -top-[6px]">
            <CardAbout
              date={date}
              title={title}
              caption={text}
              url={link}
              className="top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="w-screen h-full  flex-shrink-0 relative -top-[6px]">
            <CardMailing
              title={title}
              caption={text}
              className={'top-full left-1/2 -translate-x-1/2 -translate-y-1/2'}
            />
          </div>
        </div>
      </div>
      <div className="w-screen absolute top-[calc(50vh-6px)] left-0 custom-scrollbar z-10">
        <button className="custom-scroll-control" ref={control}></button>
      </div>
      <div className="w-screen bottom-0 fixed overflow-y-hidden h-1/2 mr-[1000px]">
        <div className="min-w-full h-full overflow-y-hidden overflow-x-scroll flex flex-row ">
          <div className="w-screen h-full flex-shrink-0 relative top-[6px]">
            <CardAbout
              date={date}
              title={title}
              caption={text}
              url={link}
              className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
        </div>
      </div>

      <button
        className="m-4 z-10 absolute left-0 md:top-1/2 selected"
        ref={topButton}
      >
        About
      </button>
      <button
        className="m-4 z-10 absolute right-0 md:top-1/2"
        ref={bottomButton}
      >
        Mailing list
      </button>
    </div>
  );
};

export default CardLayout;
