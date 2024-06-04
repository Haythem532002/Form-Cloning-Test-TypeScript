import React, { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
  return (
    <div className="w-480 h-fit	 py-7 px-6 bg-white rounded-2xl mx-5">
      {children}
    </div>
  );
}
