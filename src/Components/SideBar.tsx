import React from "react";
import { useStore } from "../store";
import { FaPlus } from "react-icons/fa";

const SideBar = () => {
  const { lists, workspaces, openListModal, openWorkspaceModal } = useStore();
  return <div className="w-60 bg-white flex flex-col">
    <div className="flex-1 overflow-y-auto">
      
      <div className="p-4">
        <h3 className="text-lg font-semibold flex items-center">Lists</h3>
        {/* {} */}
        <button className="flex justify-items-center items-center mt-[1rem]">
          <FaPlus className="mr-2 cursor-pointer" /> List
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold flex items-center">WorkSpaces</h3>
        {/* {} */}
        <button className="flex justify-center items-center mt-[1rem]">
          <FaPlus className="mr-2 cursor-pointer" /> workspace
        </button>
      </div>
      

    </div>
  </div>;
};

export default SideBar;
