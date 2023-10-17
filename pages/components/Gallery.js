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

function GalleryCard({
  imgSrc,
  technologies,
  siteLink,
  title,
  description,
  ghLink,
}) {
  return (
    <div className="m-auto max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 text-mud">
      <img
        src={imgSrc}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className=" block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
          {technologies}
        </span>
        <h2 className="underline hover:text-turmeric transition-color duration-150 ease-in-out font-sans text-xl font-semibold tracking-wide">
          <a href={siteLink}>{title}</a>
        </h2>
      </div>
      <p className="dark:text-mud">
        {description}{" "}
        <a className="text-cloud hover:text-turmeric" href={ghLink}>
          Codebase here.
        </a>
      </p>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1
        id="work"
        className="py-6 text-4xl text-center text-water font-sans"
      ></h1>

      <Carousel className="mt-10" responsive={responsive}>
        <GalleryCard
          imgSrc="/colorpalette.png"
          technologies="Next.js, React, Tailwind"
          siteLink="https://frontendnest.netlify.app/"
          title="Frontend Nest"
          description="Nest is a one-stop suite for config files, palettes, components, and a configurable cheatsheets for common frontend packages and tools."
          ghLink="https://github.com/kensiecodes/tailwindnest"
        />
        <GalleryCard
          imgSrc="/secondhand.png"
          technologies="Express, MongoDB, Next.js, Tailwind, React"
          siteLink=""
          title="Secondhand"
          description="A web app utilizing the MERN stack (currently converting to Next 13). An image and social board for posting and getting free stuff. Features profiles, comments, messages, follows, editing and deleting posts. "
          ghLink="https://github.com/kensiecodes"
        />
        <GalleryCard
          imgSrc="/zelda.png"
          technologies="API, JS, Tailwind"
          siteLink="https://zeldacompanion.netlify.app/"
          title="Hyrule Compendium"
          description="This is a Breath of the Wild game guide using a great API. It's fully
          responsive, a simple server with pure Javascript, and Tailwind for the
          styling."
          ghLink="https://github.com/kensiecodes/botwcompendium"
        />
        <GalleryCard
          imgSrc="/portfoliotop.png"
          technologies="Art & Design, Next.js, React"
          siteLink="/"
          title="Portfolio Site"
          description="Hey, you're already here. This site is meant to show a little of my
          personality on top of my capability and front-end tech stack."
          ghLink="https://github.com/kensiecodes/new-portfolio"
        />
        <GalleryCard
          imgSrc="/awakenhair.jpeg"
          technologies="Next.js, React, JSX"
          siteLink="https://awakenhair.netlify.app/"
          title="Awaken Hair"
          description="A concept for a natural haircare brand made with MambaUI and using
          Material design principals. I built this for a tutorial article I
          wrote on my blog for #communitytaught."
          ghLink="https://github.com/kensiecodes/awakenhair"
        />
        <GalleryCard
          imgSrc="/fairfield.png"
          technologies="Next.js, React, JSX"
          siteLink="https://fairfieldfarms.netlify.app/"
          title="Fairfield Farms"
          description="A multi-page concept for a farm website complete with copy, pricing,
          & navigation. Made using several component libraries, Next.js
          routing, and an organized React system."
          ghLink="https://github.com/kensiecodes/fairfieldfarm"
        />
      </Carousel>
    </div>
  );
}
