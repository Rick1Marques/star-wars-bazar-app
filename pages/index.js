// import { starshipsApp } from "@/db/dataProcessing/starships_app";
// console.log(JSON.stringify(starshipsApp, null, 2));
import Link from "next/link";

export default function HomePage() {
  return <Link href="./marketplace">Welcome to the Star Wars Bazar!</Link>;
}
