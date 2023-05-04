export default function Contact() {
  return (
    <section className="py-6 text-mud ">
      <h1 className="pb-6 text-4xl text-center text-cinnamon font-sans">
        Contact
      </h1>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2">
        <div className="py-6 md:py-0 md:px-6">
          <img src="/frog.png" className="relative z-20"></img>
        </div>
        <div className="">
          <form
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
          </form>
        </div>
      </div>
    </section>
  );
}
