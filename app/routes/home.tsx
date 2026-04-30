import type { Route } from "./+types/home";
import Hero from "../../components/Home/Hero";
import Cocktails from "../../components/Home/Cocktails";

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
    </div>
  );
}
