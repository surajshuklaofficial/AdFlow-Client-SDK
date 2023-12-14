import React, { ReactNode } from "react";
import { Navbar, Home } from "../features";

type Props = {};

const LandingPage: React.FC<Props> = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default LandingPage;
