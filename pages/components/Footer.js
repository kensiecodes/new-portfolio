export default function Footer() {
  return (
    <footer className="px-4 py-8  text-rose">
      <div className="font-sans container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
            <img src="/butterfly.png"></img>
          </div>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mackensie-jack/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a rel="noopener noreferrer" href="https://github.com/kensiecodes">
              Github
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/MackensieJack"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
