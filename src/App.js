import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./Dashboard/Navbar/Sidebar";
import Menubar from "./Dashboard/Navbar/MenuBar";
function App() {
  return (
    <div className="oppp">
      <Menubar />
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
