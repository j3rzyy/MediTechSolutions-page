import "./style.css";
import Header from "./components/header/header";
import MainPart from "./components/main/main";

export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <MainPart />
    </div>
  );
}
