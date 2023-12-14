type Props = {};

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 shadow-md">
      <figure>
        {/* <img src="" alt="" className="src" /> */}
        <h1 className="text-4xl text-secondary"><span className="text-accent">Ad</span>Flow</h1>
      </figure>

      <nav>
        <ul className="flex gap-8 justify-between items-center font-medium text-secondary">
          <li className="text-secondary">Home</li>
          <li>Advertiser</li>
          <li>Maker</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>
            <button className="text-accent py-2 px-4 font-bold">Sign in</button>
            <button className="bg-accent text-white py-2 px-4 font-bold">
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
