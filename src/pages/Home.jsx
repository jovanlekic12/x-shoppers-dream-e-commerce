import FeaturedInSection from "../components/FeaturedIn";
import FeaturedProductsSection from "../components/FeaturedProducts";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <header className="header">
        <Navbar></Navbar>
        <HomeSection></HomeSection>
        <FeaturedInSection></FeaturedInSection>
        <FeaturedProductsSection></FeaturedProductsSection>
      </header>
    </>
  );
}

export default Home;
