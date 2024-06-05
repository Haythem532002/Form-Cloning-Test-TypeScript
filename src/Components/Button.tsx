import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="text-white w-full text-center rounded-md py-3 bg-primary"
      type="submit"
    >
      {text}
    </button>
  );
};
export default Button;
