import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Analyzer from "../components/Analyzer/Analyzer";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Analyzer />
      </main>

      <Footer />
    </>
  );
}

export default Home;