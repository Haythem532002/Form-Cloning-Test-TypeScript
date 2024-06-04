import React, { MouseEventHandler } from "react";

interface itemInterface {
  text: string;
  onClick: MouseEventHandler;
  checked: boolean;
}

export default function Item({ text, onClick, checked }: itemInterface) {
  const backgroundColor = checked === true ? "primary" : "none";
  return (
    <div className="flex items-center my-2">
      <button
        onClick={onClick}
        className={`w-7 h-7 border-2 rounded-full bg-${backgroundColor}`}
      ></button>
      <p className="ml-2">{text}</p>
    </div>
  );
}
