import ForumIngressos from "./ForumIngressos";
import ForumProgramacao from "./ForumProgramacao";
import ForumSobre from "./ForumSobre";
import Hero from "./Hero";
import PalestrantesConfirmados from "./PalestrantesConfirmados";

function Home() {
  return (
    <>
      <Hero />
      <ForumSobre></ForumSobre>
      <ForumIngressos />
      <PalestrantesConfirmados />
      <ForumProgramacao></ForumProgramacao>
    </>
  );
}

export default Home;
