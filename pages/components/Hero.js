export default function Hero() {
  return (
    <section className="bg-sugar text-mud flex items-center justify-center justify-start max-[900px]:flex-col">
      {/* title card */}
      <div className=" flex flex-col justify-center p-6 max-2xl:mx-auto sm:py-12 s lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-right">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Hi, I'm&nbsp;
            <span className="text-water">Kensie</span>
          </h1>
          <p className="mt-6 sm:mb-9 lg:mb-12 text-lg ">
            <br className="hidden md:inline lg:hidden" />
            I'm a full-stack developer based in upstate New York. I like
            problem-solving, beautiful design, and efficient code. I'm also a
            mother, artist, seamstress, gamer, gardener, and obsessive learner.
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-end">
            <img
              src="/butterfly.png"
              className=" w-[75px] sm:hidden self-center "
            ></img>
            <img src="/butterfly.png" className=" w-[75px] max-lg:hidden"></img>
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-sans px-8 py-3 text-lg font-semibold rounded bg-water text-sugar"
            >
              My Blog
            </a>
            <img src="/butterfly.png" className="max-sm:hidden lg:hidden"></img>
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-sans px-8 py-3 text-lg font-semibold border rounded border-gray-800"
            >
              My Work
            </a>
          </div>
        </div>
      </div>
      {/* name card */}
      <div className="max-w-5xl">
        <img src="fairies.png" className="lg:max-h-screen lg:pt-9 " />
      </div>
    </section>
  );
}
