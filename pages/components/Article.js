export default function Article() {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 text-mud">
      <h1 className="pb-6 text-4xl text-center text-mud font-sans">Writing</h1>
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src="/article.jpeg"
          alt=""
          className="w-full overflow-hidden object-cover h-96 bg-gray-500 "
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-sugar">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="https://kensie.codes/building-websites-for-your-portfolio-next-react-tailwindcss-mambaui-part-1"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              Making a website with Next.js, React, and TailwindCSS
            </a>
            <p className="text-xs text-pond">By Kensie Jack</p>
          </div>
          <div className="text-mud">
            <p>
              Over the last few months, I've added many resources to my toolbelt
              and developed a workflow for static site development. I will share
              a set of steps to follow to create a site for your portfolio
              mainly using Next, React components, and Tailwind CSS. I'm proud
              of being #communitytaught and this is my contribution...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
