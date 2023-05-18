import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

export default function Gallery() {
  return (
    <div>
      <h1
        id="work"
        className="py-6 text-4xl text-center text-water font-sans"
      ></h1>
      <Carousel className="mt-10" responsive={responsive}>
        <div className="m-auto max-w-xs p-6 rounded-md shadow-md dark:bg-pond dark:text-gray-50">
          <img
            src="/zelda.png"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className=" block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
              API, JS, Tailwind
            </span>
            <h2 className="underline hover:text-turmeric transition-color duration-150 ease-in-out font-sans text-xl font-semibold tracking-wide">
              <a href="https://zeldacompanion.netlify.app/">
                Hyrule Compendium
              </a>
            </h2>
          </div>
          <p className="dark:text-gray-100">
            This is a Breath of the Wild game guide using a great API. It's
            fully responsive, a simple server with pure Javascript, and Tailwind
            for the styling.{" "}
            <a
              className="text-cloud hover:text-turmeric"
              href="https://github.com/kensiecodes/botwcompendium"
            >
              Codebase here.
            </a>
          </p>
        </div>

        <div className="m-auto max-w-xs p-6 rounded-md shadow-md dark:bg-pond dark:text-gray-50">
          <img
            src="/portfoliotop.png"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className=" block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
              Art & Design, Next.js, React
            </span>
            <h2 className="underline hover:text-turmeric transition-color duration-150 ease-in-out font-sans text-xl font-semibold tracking-wide">
              <a href="#"> My Portfolio Site</a>
            </h2>
          </div>
          <p className="dark:text-gray-100">
            Hey, you're already here. This site is meant to show a little of my
            personality on top of my capability and front-end tech stack.{" "}
            <a
              className="text-cloud hover:text-turmeric"
              href="https://github.com/kensiecodes/new-portfolio"
            >
              Codebase here.
            </a>
          </p>
        </div>

        <div className="m-auto max-w-xs p-6 rounded-md shadow-md dark:bg-pond dark:text-gray-50">
          <img
            src="/awakenhair.jpeg"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className=" block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
              Next.js, React, JSX
            </span>
            <h2 className="underline hover:text-turmeric transition-color duration-150 ease-in-out font-sans text-xl font-semibold tracking-wide">
              <a href="https://awakenhair.netlify.app/">Awaken Hair</a>
            </h2>
          </div>
          <p className="dark:text-gray-100">
            A concept for a natural haircare brand made with MambaUI and using
            Material design principals. I built this for a tutorial article I
            wrote on my blog for #communitytaught.
            <a
              className="text-cloud hover:text-turmeric"
              href="https://github.com/kensiecodes/awakenhair"
            >
              &nbsp;Codebase here.
            </a>
          </p>
        </div>

        <div className="m-auto max-w-xs p-6 rounded-md shadow-md dark:bg-pond dark:text-gray-50">
          <img
            src="/fairfield.png"
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className=" block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
              Next.js, React, JSX
            </span>
            <h2 className="underline hover:text-turmeric transition-color duration-150 ease-in-out font-sans text-xl font-semibold tracking-wide">
              <a href="https://fairfieldfarms.netlify.app/">Fairfield Farms</a>
            </h2>
          </div>
          <p className="dark:text-gray-100">
            A multi-page concept for a farm website complete with copy, pricing,
            & navigation. Made using several component libraries, Next.js
            routing, and an organized React system.
            <a
              className="text-cloud hover:text-turmeric"
              href="https://github.com/kensiecodes/fairfieldfarm"
            >
              &nbsp;Codebase here.
            </a>
          </p>
        </div>
      </Carousel>
      ;
    </div>
  );
}
