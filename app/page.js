import "./style.css";
import Header from "./components/header/header";
import Content from "./components/content/content";

export default function Home() {
  return (
    <div className="main-container">
      <Header />
      <Content />
    </div>
  );
}
