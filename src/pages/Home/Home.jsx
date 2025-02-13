import CreedsSection from "@/pages/Home/CreedsSection/Index";
import FeaturedInSection from "@/pages/Home/FeaturedIn/Index";
import FeaturedProductsSection from "@/pages/Home/FeaturedProducts/Index";
import HomeSection from "@/pages/Home/HomeSection/Index";
import OperationsSection from "@/pages/Home/OperationsSection/Index";
import TestimonialsSection from "@/pages/Home/TestimonialsSection/Index";

function Home({ sectionRef }) {
  return (
    <>
      <HomeSection sectionRef={sectionRef}></HomeSection>
      {/* <FeaturedInSection></FeaturedInSection> */}
      <FeaturedProductsSection></FeaturedProductsSection>
      <CreedsSection></CreedsSection>
      <OperationsSection></OperationsSection>
      <TestimonialsSection></TestimonialsSection>
    </>
  );
}

export default Home;
