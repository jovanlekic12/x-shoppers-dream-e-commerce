import FeaturedInSection from "../components/FeaturedIn";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <header className="header">
        <Navbar></Navbar>
        <HomeSection></HomeSection>
        <FeaturedInSection></FeaturedInSection>
      </header>
    </>
  );
}

export default Home;
