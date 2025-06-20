import AppComponent from "@/components/AppComponent";

import React from "react";

function page() {
  return (
    <div
      className="w-full flex items-center justify-center  text-white
    bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600
     transition-all duration-500 ease-in-out pt-20 min-h-screen
    "
    >
      <AppComponent />
    </div>
  );
}

export default page;
