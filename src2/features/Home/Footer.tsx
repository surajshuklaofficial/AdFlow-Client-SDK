import { Link } from "react-router-dom";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  console.log(currentYear)
  return (
    <footer className="py-4 px-8 flex-center bg-primary text-white">
      <div className="flex-center flex-col gap-4 text-center">
        <p className="text-xl">
          Stay connected with us and elevate your earnings!
        </p>
        <div className="flex gap-4">
          <Link to="/about" className="text-white">
            About Us
          </Link>
          <Link to="/contact" className="text-white">
            Contact Us
          </Link>
        </div>
        <p className="text-sm">&copy; {currentYear} AdFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
