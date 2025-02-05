import CreedsSection from "@/pages/Home/CreedsSection/CreedsSection";
import FeaturedInSection from "@/pages/Home/FeaturedIn/FeaturedIn";
import FeaturedProductsSection from "@/pages/Home/FeaturedProducts/FeaturedProducts";
import HomeSection from "@/pages/Home/HomeSection/HomeSection";
import OperationsSection from "@/pages/Home/OperationsSection/OperationsSection";
import TestimonialsSection from "@/pages/Home/TestimonialsSection/TestimonialsSection";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <>
      {/* <Navbar></Navbar> */}
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
