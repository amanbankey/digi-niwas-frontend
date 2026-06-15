import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NiwasAI from "./pages/NiwasAI";
import About from "./pages/About";
import AgentCorner from "./pages/AgentCorner";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="niwas-ai" element={<NiwasAI />} />
          <Route path="about" element={<About />} />
          <Route path="agent-corner" element={<AgentCorner />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
