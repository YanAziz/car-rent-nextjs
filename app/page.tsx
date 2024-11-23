import Fleet from "@/components/Fleet";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offers />
      <Flow />
      <Fleet />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
