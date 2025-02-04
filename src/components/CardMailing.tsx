'use client';

const CardMailing = (props: {
  title: string;
  caption: string;
  className: string;
}) => {
  return (
    <div
      className={`card overflow-hidden absolute ${props.className} text-center flex flex-row  justify-center items-center`}
    >
      <form className="absolute top-4">
        <input placeholder="Email"></input>
        <button className="ml-2">Submit</button>
      </form>
      <h1 className="">{props.title}</h1>
      <div className="absolute bottom-4">{props.caption}</div>
    </div>
  );
};

export default CardMailing;
