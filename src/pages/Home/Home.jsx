import CreedsSection from "@/pages/Home/CreedsSection/Index";
import FeaturedInSection from "@/pages/Home/FeaturedIn/Index";
import FeaturedProductsSection from "@/pages/Home/FeaturedProducts/Index";
import HomeSection from "@/pages/Home/HomeSection/Index";
import OperationsSection from "@/pages/Home/OperationsSection/Index";
import TestimonialsSection from "@/pages/Home/TestimonialsSection/Index";
import Navbar from "@/components/Navbar";

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

//Dohvatiti sve proizvode
//iz proizvoda izvuci jedinstvene kategorije(koje se ne ponavljaju)
//prvi nacin: preko petlje
//drugi nacin: pogledaj Set

const array = [1, 1, 2, 2, 3, 3];
const unique = new Set(array);
console.log(unique);
