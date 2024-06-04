import React from "react";
import Create from "./Components/Create";
import Delete from "./Components/Delete";
const App = () => {
  return (
    <div className="flex custom:h-screen py-3 bg-gradient-to-b from-[#33A4E399] to-[#B0EFB399] custom:flex-row flex-col space-y-3 items-center custom:items-start custom:space-y-0 custom:justify-center">
      <Create />
      <Delete />
    </div>
  );
};

export default App;
