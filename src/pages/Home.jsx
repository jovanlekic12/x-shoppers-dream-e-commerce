import CreedsSection from "../components/HomePageComponents/CreedsSection";
import FeaturedInSection from "../components/HomePageComponents/FeaturedIn";
import FeaturedProductsSection from "../components/HomePageComponents/FeaturedProducts";
import HomeSection from "../components/HomePageComponents/HomeSection";
import OperationsSection from "../components/HomePageComponents/OperationsSection";
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
        <OperationsSection></OperationsSection>
      </header>
    </>
  );
}

export default Home;
