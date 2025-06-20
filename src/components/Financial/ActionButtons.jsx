"use client";
import { Pencil, Trash } from "lucide-react";
const ActionButtons = ({ id }) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center gap-2 px-4">
        <button
          type="button"
          onClick={() => {
            console.log(id);
          }}
        >
          <Pencil className="inline-block w-4 h-4 text-blue-500 cursor-pointer mr-2" />
        </button>
        <button
          type="button"
          onClick={() => {
            console.log(id);
          }}
        >
          <Trash className="inline-block w-4 h-4 text-red-500 cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default ActionButtons;
