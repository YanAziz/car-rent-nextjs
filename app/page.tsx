import Fleet from "@/components/Fleet";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offers />
      <Flow />
      <Fleet />
      <Testimonials />
      <Footer />
    </main>
  );
}
