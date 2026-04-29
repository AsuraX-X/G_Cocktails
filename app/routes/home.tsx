import type { Route } from "./+types/home";
import Hero from "../../components/Home/Hero";

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
      <div className="h-screen"></div>
    </div>
  );
}
