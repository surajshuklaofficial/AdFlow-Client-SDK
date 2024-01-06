import { Navbar, Home } from "../features";
import Footer from "../features/Home/Footer";

type Props = {};

const LandingPage: React.FC<Props> = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default LandingPage;
