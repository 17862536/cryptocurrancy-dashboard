import React from "react";
import Coinlist from "./Coinlist";
import Dashbord from "./Dashbord";
function Main() {
  return (
    <div className="p-4 grid lg:grid-cols-3  bg-slate-200 overflow-auto gap-x-6 max-h-[95vh] shadow-md m-5 p-5 ">
      <div className=" grid lg:col-span-2 ">
        
     <Dashbord />
      </div>
      <div className="max-h-[95vh]  bg-white overflow-auto shadow-md p-5 border-solid">
        <Coinlist />
        
      </div>
    </div>
  );
}

export default Main;
