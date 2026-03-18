import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {

  const [searchTerm, setSearchTerm] = useState("trending");

  return (

    <div style={{ display: "flex" }}>

      <Sidebar onCategorySelect={setSearchTerm} />

      <div style={{ flex: 1 }}>

        <Navbar onSearch={setSearchTerm} />

        <Home searchTerm={searchTerm} />

      </div>

    </div>

  );

}

export default App;