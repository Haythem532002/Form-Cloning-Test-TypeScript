import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <h1 className="w-full flex font-bold mb-4 text-xl justify-center text-center text-primary">
      {text}
    </h1>
  );
};
export default Title;
