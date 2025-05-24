import React from "react";
import { useStore } from "../store";
import { FaPlus } from "react-icons/fa";

const MainArea = () => {
  const { lists, workspaces, selectedList, selectedWorkspace, todoText, setSelectedList,setTodoText,handleAddTodo } = useStore();
  return <div className="flex-1 p-6">
    <div className="mb-4">
      <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} placeholder="Add a new todo"  className="border border-gray-300  p-2 rounded-lg w-full"/>
    </div>
    <div className="mt-2 flex items-center">
      <select value={selectedList} onChange={e => setSelectedList(e.target.value)}
        className="border border-gray-300  p-2 rounded-lg mr-2">
        <option value="" disabled>Select List</option>
        {lists.map((list, index) => (
          <option key={index} value={list.name}>{list.emoji} {list.name}</option>
        ))}
      </select>


      <select value={selectedWorkspace} onChange={e => setSelectedList(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg ">
        <option value="" disabled>Select Workspace</option>
        {workspaces.map((workspace, index) => (
          <option key={index} value={workspace.name}>{workspace.emoji} {workspace.name}</option>
        ))}
      </select>
      <button  onClick={handleAddTodo} className="bg-black text-white px-4 py-2 cursor-pointer hover:bg-gray-900 whitespace-nowrap rounded-lg ml-3 flex items-center">
    <FaPlus className="h-3 "/>   Add Todo</button>

    </div>
  </div>;
};

export default MainArea;
