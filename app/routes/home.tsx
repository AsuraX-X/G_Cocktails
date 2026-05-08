import type { Route } from "./+types/home";
import Hero from "../../components/Home/Hero";
import Cocktails from "../../components/Home/Cocktails";
import About from "../../components/Home/About";
import Art from "../../components/Home/Art";
import Menu from "../../components/Home/Menu";
import Footer from "../../components/Common/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Footer />
    </div>
  );
}
