import Image from "next/image";
import './style.css'
import Header from "./components/header";

export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <h1>Main str</h1>
    </div>
  );
}
