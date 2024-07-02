import React, { useState, useEffect } from "react";
import ViewNotes from "./ViewNotes";
import { noteType } from "../../types";

const CreateNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState<noteType[]>([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    if (storedNotes) {
      setNote(storedNotes);
    }
  }, []);

  const handleCreateNote = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Title and Description cannot be empty");
      return;
    }

    const newNote = { title, description };
    const updatedNotes: noteType[] = [...note, newNote];
    setNote(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    // alert("Note Created");

    // Reset input fields
    setTitle("");
    setDescription("");
  };

  const handleDeleteNote = (index: number) => {
    const updatedNotes = note.filter((_, i) => i !== index);
    setNote(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div className="p-9 grid grid-cols-2 gap-10">
      <div className="m-5 flex flex-col w-full gap-5">
        <div className="">
          <h3 className="text-lg">Add your title</h3>
          <input
            className="bg-transparent border-[1px] rounded-md outline-none p-1 w-full"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <h3 className="text-lg">Add your Description</h3>
          <textarea
            className="bg-transparent border-[1px] rounded-md outline-none resize-none h-72 w-full p-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          className="mb-5 rounded-lg text-lg px-4 py-2 cursor-pointer bg-black text-white font-bold transform hover:-translate-y-1 transition duration-400"
          onClick={handleCreateNote}
        >
          Create Note <i className="ri-sticky-note-add-fill pl-3"></i>
        </button>
      </div>

      <ViewNotes notes={note} onDeleteNote={handleDeleteNote} />
    </div>
  );
};

export default CreateNotes;
