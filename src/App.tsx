import "./App.css";
import CreateNotes from "./components/ui/CreateNotes";

function App() {
  return (
    <div className="flex flex-col items-center mb-3">
      <h1 className="text-3xl font-semibold bg-[#0d1117] w-full pt-3 pb-3 pl-6">
        <i className="ri-sticky-note-add-line pr-3"></i>
        Note App
      </h1>
      <CreateNotes />
    </div>
  );
}

export default App;
