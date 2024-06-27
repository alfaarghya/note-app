import "./App.css";
import CreateNotes from "./components/ui/CreateNotes";

function App() {
  return (
    <div className="flex flex-col items-center mt-3 mb-3">
      <h1 className="text-3xl font-semibold border-b-2">
        Make Your Note with us
      </h1>
      <CreateNotes />
    </div>
  );
}

export default App;
