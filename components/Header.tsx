const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-xl">YCCE ACM Student Chapter</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 link">Events</a>
          <a className="mr-5 link">About</a>
          <a className="mr-5 link">Team</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
