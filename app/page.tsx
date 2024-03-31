/* Components */
import { HomeSlider } from "./components/Home/Slider";
import { Nav } from "./components/Nav";
import Footer from "./components/Footer";
import {Tour} from "./components/Tour";

export default function IndexPage() {
  return (<>
    <Tour />
    <div className="container">
      <header>
        <Nav />
      </header>
      <HomeSlider />
      <Footer />
    </div>
  </>);
}

export const metadata = {
  title: "Nocommerce Next.js & TailwindCSS E-commerce Project",
};
