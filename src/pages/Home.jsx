import CreedsSection from "../components/CreedsSection";
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
        <CreedsSection></CreedsSection>
      </header>
    </>
  );
}

export default Home;
