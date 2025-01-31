import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <header className="header">
        <Navbar></Navbar>
        <HomeSection></HomeSection>
      </header>
    </>
  );
}

export default Home;
