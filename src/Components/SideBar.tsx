import { useState } from "react";
import { FaHamburger, FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useStore } from "../store";

const Sidebar = () => {
  const { lists, workspaces, openListModal, openWorkspaceModal , isListModalOpen, isWorkspaceModalOpen } = useStore();
  const [isOpen, setIsOpen] = useState(false);


  const isModalOpen = isListModalOpen || isWorkspaceModalOpen;

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button (Always Visible on Small Screens) */}
      {isModalOpen ? '' : (
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
          onClick={toggleSidebar}
        >
          {isOpen ? <FaX /> : <FaHamburger />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={` w-60 h-full fixed top-0 left-0 z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0 bg-white" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="flex-1 mt-12 overflow-y-auto">
          <div className="p-2 w-full">
            <h3 className="font-semibold flex items-center">Lists</h3>
            <ul>
              {lists.map((list, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-[#ccc] rounded-lg cursor-pointer flex items-center"
                >
                  <span className="mr-2">{list.emoji}</span>
                  {list.name}
                </li>
              ))}
            </ul>
            <button
              onClick={openListModal}
              className="flex justify-center items-center mt-4"
            >
              <FaPlus onClick={toggleSidebar} className="mr-2 size-4" /> List
            </button>
          </div>

          <div className="p-2 w-full">
            <h3 className="font-semibold flex items-center">Workspaces</h3>
            <ul>
              {workspaces.map((workspace, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-[#ccc] rounded-lg cursor-pointer flex items-center"
                >
                  <span className="mr-2">{workspace.emoji}</span>
                  {workspace.name}
                </li>
              ))}
            </ul>
            <button
              onClick={openWorkspaceModal}
              className="flex justify-center items-center mt-4"
            >
              <FaPlus onClick={toggleSidebar} className="mr-2 size-4" />{" "}
              Workspace
            </button>
          </div>
        </div>
      </div>

      {/* Background overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
