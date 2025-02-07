import CreedsSection from "@/pages/Home/CreedsSection/Index";
import FeaturedInSection from "@/pages/Home/FeaturedIn/Index";
import FeaturedProductsSection from "@/pages/Home/FeaturedProducts/Index";
import HomeSection from "@/pages/Home/HomeSection/Index";
import OperationsSection from "@/pages/Home/OperationsSection/Index";
import TestimonialsSection from "@/pages/Home/TestimonialsSection/Index";
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
