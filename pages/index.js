import Hero from "./components/Hero";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Feature from "./components/Feature";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="gradient">
        <div className="flex max-xl:hidden lg:w-1/3 m-auto absolute xl:mt-[-200px] lg:ml-[-30px]">
          <a href="https://twitter.com/MackensieJack">
            <img src="/twitter.png" className=""></img>
          </a>
          <a href="https://github.com/kensiecodes">
            <img src="/github.png" className=""></img>
          </a>
        </div>
        <Contact />

        <Article />
        <img
          src="/mermaid.png"
          className="lg:mt-[-100px] max-h-screen m-auto"
        ></img>
        <Footer />
      </div>
    </div>
  );
}
