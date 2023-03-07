import React from "react";
import Coinlist from "./Coinlist";
import Dashbord from "./Dashbord";
function Main() {
  return (
    <div className="mx-5 bg-white xl:bg-red-300 my-2 h-[40rem] shadow-md px-4 flex flex-col md:flex-row">
      <div className="basis-3/4 border-rose-600 drop-shadow-md ">
        <span className="">box</span>
     <Dashbord/>
      </div>
      <div className="basis-1/4 h-[100] mt-10 bg-white overflow-auto  border-rose-600 shadow-md p-5 border-solid">
        <Coinlist />
        
      </div>
    </div>
  );
}

export default Main;
