import React from "react";
import { noteType } from "../../types";

const ViewNotes = ({
  notes,
  onDeleteNote,
}: {
  notes: noteType[];
  onDeleteNote: (index: number) => void;
}) => {
  return (
    <div className="m-5 flex flex-col w-full gap-5">
      <h3 className="text-2xl font-semibold border-b-[1px] border-blue-300 text-center">
        View Notes
      </h3>
      <div>
        {notes.map((e, index) => (
          <div key={index} className="pt-5 ">
            <div className="flex justify-between w-full gap-1">
              <div className="w-9/12">
                <h4 className="text-lg font-bold">{e.title}</h4>
                <h5>Description: {e.description}</h5>
              </div>
              <div className="w-1/6 flex justify-center items-center">
                <button
                  className="border rounded-lg h-10 px-4 py-2 cursor-pointer bg-red-500 text-white font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={() => onDeleteNote(index)}
                >
                  Delete Note
                </button>
              </div>
            </div>
            <div className="border-b-[1px] border-blue-300 pb-5"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewNotes;
