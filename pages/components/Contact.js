let text = "kensiejack1@gmail.com";
let copied = false;
// const copyContent = async () => {
//   try {
//     await navigator.clipboard.writeText(text);
//     console.log("Content copied to clipboard");
//     document.getElementById("copied").innerText = `Email copied to clipboard`;
//     setTimeout(() => {

//       document.getElementById("copied").innerText = "";
//     }, 2000);
//   } catch (err) {
//     console.error("Failed to copy: ", err);
//   }
// };

export default function Contact() {
  return (
    <section className="py-6 text-mud ">
      <h1 className="pb-6 text-4xl text-center text-cinnamon font-sans"></h1>
      <div className="grid max-w-6xl px-6 mx-auto lg:px-8 ">
        <div className="py-6 md:py-0 md:px-6">
          <img
            src="/frog.png"
            className=" w-full sm:w-2/3 lg:w-1/2 m-auto"
          ></img>
        </div>

        <div className="">
          <p className="font-sans w-1/2 text-center m-auto">
            I'm currently open for freelance and full-time engineering
            positions. Please get in touch if you have interest in what I can
            offer to your project or team!
          </p>
          <div className="flex justify-center items-center w-1/2 m-auto ">
            <div className="m-1 w-36 text-center mt-10 font-sans border  hover:text-cinnamon hover:bg-sugar transition  ease-in-out duration-200 px-8 py-3 text-sugar border-cinnamon bg-cinnamon m-auto rounded-md">
              <form className="" action="mailto:kensiejack1@gmail.com">
                <input type="submit" value="Email Me" />
              </form>
            </div>
            <div className="m-1 w-36 text-center mt-10 font-sans border  hover:text-cinnamon hover:bg-sugar transition  ease-in-out duration-200 px-8 py-3 text-sugar border-cinnamon bg-cinnamon m-auto rounded-md">
              <a href="/Mackensie-Jack-Resume-portfolio.docx.pdf" download>
                <input type="submit" value="Resume" />
              </a>
            </div>
          </div>
        </div>

        {/* <button
            id="clipboard"
            className="cursor-context-menu text-xl bg-cloud p-3 font-sans rounded-md border-cinnamon border-2 border-dotted hover:border-dashed transition  ease-in-out bg-blush"
            onClick={copyContent}
          >
            kensiejack1@gmail.com
          </button>
          <p className="" id="copied"></p> */}
        {/* <form
            novalidate=""
            name="contact"
            method="POST"
            data-netlify="true"
            className=" relative z-20 flex flex-col py-6 space-y-6 md:py-2 md:px-6 ng-untouched ng-pristine ng-valid  radius-xl"
          >
            <input type="hidden" name="form-name" value="contact" />
            <h3>
              I'm currently seeking freelance opportunities as well as a
              full-time developer position. Please feel free to get in touch or
              just say hello!
            </h3>
            <label className="block">
              <span className="mb-1 font-sans">Name</span>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="placeholder-pond placeholder-opacity-50 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-cloud bg-gray-50 p-1"
              />
            </label>
            <label className="block">
              <span className="mb-1 font-sans">Email address</span>
              <input
                type="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="placeholder-pond placeholder-opacity-50 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-cloud bg-gray-50 p-1"
              />
            </label>
            <label className="block">
              <span className="font-sans mb-1">Message</span>
              <textarea
                id="message"
                rows="3"
                className="placeholder-pond  placeholder-opacity-50 block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-clouds bg-gray-50 p-1"
              ></textarea>
            </label>
            <button
              type="submit"
              className="font-sans self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-water text-gray-50 focus:ring-pond hover:ring-water"
            >
              Submit
            </button>
          </form> */}
      </div>
    </section>
  );
}
