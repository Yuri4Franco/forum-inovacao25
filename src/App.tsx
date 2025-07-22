import "./App.css";
import ForumIngressos from "./pages/ForumIngressos";
import ForumProgramacao from "./pages/ForumProgramacao";
import ForumSobre from "./pages/ForumSobre";
import Hero from "./pages/Hero";
import Footer from "./templates/Footer";
import Header from "./templates/Header";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ForumSobre></ForumSobre>
      <ForumIngressos />
      <ForumProgramacao></ForumProgramacao>
      <Footer />
    </>
  );
}

export default App;
