'use client';

const CardAbout = (props: { date: string, url: string, title: string, caption: string, className: string}) => {
  return (
    <div className={`card overflow-hidden absolute ${props.className} text-center flex flex-row  justify-center items-center`}>
      <div className="absolute top-4 w-full justify-between">
        Upcoming: <span className="analog">{props.date}</span> @ Club 101 <a href={props.url}>tickets </a>
      </div>
      <h1 className="">{props.title}</h1>
      <div className="text-[13px] font-times absolute w-full px-6 bottom-4 flex flex-row justify-between">
        <span>
          {props.caption}
        </span>

        <span>
          @clubotomy
        </span>
      </div>
    </div>
  );
};

export default CardAbout;
