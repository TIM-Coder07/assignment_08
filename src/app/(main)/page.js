import Banner from "@/Component/Banner/Banner";
import ContactPage from "@/Component/Contact";
import Fetured from "@/Component/Fetured";
import Footer from "@/Component/Footer";
import Marquee from "@/Component/Marquee";
import HeroSlider from "@/Component/Slider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1">
        {/* Banner */}
        <section>
          <Banner />
        </section>

        {/* Slider */}
        <section className="mt-10">
          <HeroSlider />
        </section>

        {/* fetured tiles  */}
        <Fetured></Fetured>
        
        {/* Marquee */}
        <section>
          <Marquee></Marquee>
        </section>

        {/* Contact  */}
        <section>
          <ContactPage></ContactPage>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
}


