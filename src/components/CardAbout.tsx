'use client';

const CardAbout = (props: {
  date?: string;
  url?: string;
  title?: string;
  caption?: string;
  socialurl?: string;
  socialusername?: string;
  className?: string;
}) => {
  return (
    <div
      className={`card overflow-hidden absolute ${props.className} text-center flex flex-row  justify-center items-center`}
    >
      <div className="absolute top-[12.5px] w-full justify-between font-times">
      <span>{props.caption}</span>
      </div>
      <h1 className="">{props.title}</h1>
      <div className="absolute w-full px-6 bottom-[14px] flex flex-row justify-between items-end text-left">
        <div>
          <span  className="font-times">Upcoming: </span><span className="">{props.date}</span>{' '}
          <a href={props.url} className="font-times font-bold -ml-[3px]">tickets </a>
        </div>
        {props.socialurl && props.socialusername && (
          <a href={props.socialurl} className="no-underline font-times">
            @{props.socialusername}
          </a>
        )}
      </div>
    </div>
  );
};

export default CardAbout;
