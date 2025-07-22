import ForumIngressos from "./ForumIngressos";
import ForumProgramacao from "./ForumProgramacao";
import ForumSobre from "./ForumSobre";
import Hero from "./Hero";


function Home() {
    return (
        <>
            <Hero />
            <ForumSobre></ForumSobre>
            <ForumIngressos />
            <ForumProgramacao></ForumProgramacao>
        </>
    );
}

export default Home;