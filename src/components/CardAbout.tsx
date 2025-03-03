'use client';

const CardAbout = (props: {
  date: string;
  url: string;
  title: string;
  caption: string;
  socialurl: string;
  socialusername: string;
  className: string;
}) => {
  return (
    <div
      className={`card overflow-hidden absolute ${props.className} text-center flex flex-row  justify-center items-center`}
    >
      <div className="absolute top-4 w-full justify-between">
        Upcoming: <span className="analog">{props.date}</span>{' '}
        <a href={props.url}>tickets </a>
      </div>
      <h1 className="">{props.title}</h1>
      <div className="text-[13px] font-times absolute w-full px-6 bottom-[14px] flex flex-row justify-between">
        <span>{props.caption}</span>
        {props.socialurl && props.socialusername && (
          <a href={props.socialurl}>@{props.socialusername}</a>
        )}
      </div>
    </div>
  );
};

export default CardAbout;
