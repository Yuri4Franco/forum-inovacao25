import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacidade" element={<PoliticaDePrivacidade />} />
    </Routes>
  );
}

export default App;
