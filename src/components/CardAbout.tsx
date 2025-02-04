'use client';

const CardAbout = (props: { date: string, url: string, title: string, caption: string, className: string}) => {
  return (
    <div className={`card overflow-hidden absolute ${props.className} text-center flex flex-row  justify-center items-center`}>
      <p className="absolute top-4">
        Upcoming: <span className="analog">{props.date}</span> <a href={props.url}>tickets </a>
      </p>
      <h1 className="">{props.title}</h1>
      <div className="absolute bottom-4">{props.caption}</div>
    </div>
  );
};

export default CardAbout;
