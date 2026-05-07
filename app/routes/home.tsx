import type { Route } from "./+types/home";
import Hero from "../../components/Home/Hero";
import Cocktails from "../../components/Home/Cocktails";
import About from "../../components/Home/About";
import Art from "../../components/Home/Art";

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
    </div>
  );
}
