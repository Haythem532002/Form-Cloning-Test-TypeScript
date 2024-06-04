import React, { MouseEventHandler } from "react";

interface buttonInterface {
  text: string;
  onClick: MouseEventHandler;
}

export default function Button({ text, onClick }: buttonInterface) {
  return (
    <button
      onClick={onClick}
      className="text-white w-full text-center rounded-md py-3 bg-primary"
    >
      {text}
    </button>
  );
}
