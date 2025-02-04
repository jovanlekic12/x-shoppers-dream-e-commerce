import CreedsSection from "../components/HomePageComponents/CreedsSection";
import FeaturedInSection from "../components/HomePageComponents/FeaturedIn";
import FeaturedProductsSection from "../components/HomePageComponents/FeaturedProducts";
import HomeSection from "../components/HomePageComponents/HomeSection";
import OperationsSection from "../components/HomePageComponents/OperationsSection";
import TestimonialsSection from "../components/HomePageComponents/TestimonialsSection";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HomeSection></HomeSection>
      {/* <FeaturedInSection></FeaturedInSection> */}
      <FeaturedProductsSection></FeaturedProductsSection>
      <CreedsSection></CreedsSection>
      <OperationsSection></OperationsSection>
      <TestimonialsSection></TestimonialsSection>
    </>
  );
}

export default Home;
