import type { Route } from "./+types/home";
// import { Route } from "react-router";
// import { Welcome } from "../welcome/welcome";

export async function loader(){
  const response = await fetch('https://cloud-run-49743443023.africa-south1.run.app')

  return response.json()
}
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({}:Route.LoaderArgs) {
  return <div>
    <h1>Homepage</h1>
  </div>;
}
