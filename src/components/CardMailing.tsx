'use client';
import { useRef, useEffect } from 'react';

const CardMailing = (props: {
  title: string;
  caption: string;
  className: string;
}) => {

  const emailList = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://eocampaign1.com/form/e8b8252a-f492-11ef-bb03-1da31e7a2d67.js';
    script.async = true;
    script.setAttribute('data-form', 'e8b8252a-f492-11ef-bb03-1da31e7a2d67');

    const myRefNode = emailList.current
    myRefNode?.appendChild(script);

    return () => {
      myRefNode?.removeChild(script); //Except this doesn't work, see below how to fix it
    };
  }, []);

  
  return (
    <div
      className={`card overflow-hidden absolute ${props.className} text-center flex flex-row  justify-center items-center`}
    >
      <div className="absolute top-4 emaillist" ref={emailList}>
      </div>
      <h1 className="">{props.title}</h1>
      <div className="absolute bottom-[14px]">{props.caption}</div>
    </div>
  );
};

export default CardMailing;

