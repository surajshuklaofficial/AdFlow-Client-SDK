import { Link } from "react-router-dom";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-10 flex-center bg-primary text-white shadow-lg">
      <div className="flex-center flex-col gap-6 text-center max-w-screen-lg mx-auto">
        <p className="text-2xl font-semibold">
          Stay connected with us and elevate your earnings!
        </p>
        <div className="flex gap-6">
          <Link to="/about" className="text-white hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact Us
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} AdFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
