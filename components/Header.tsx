import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-xl">YCCE ACM Student Chapter</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/#events">
            <a className="mr-5 link">Events</a>
          </Link>
          <Link href="/#about">
            <a className="mr-5 link">About</a>
          </Link>
          <Link href="/#teams">
            <a className="mr-5 link">Team</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
