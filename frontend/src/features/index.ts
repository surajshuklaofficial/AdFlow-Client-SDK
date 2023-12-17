import Navbar from "./common/Navbar";
import Home from "./LandingPage/components/Home";
import Error from "./common/Error";

import Login from "./auth/components/Login";
import Signup from "./auth/components/Signup";
import ProtectedAdvertiser from "./auth/components/ProtectedAdvertiser";
import ProtectedPublisher from "./auth/components/ProtectedPublisher";

import Sidebar from "./Advertisers/components/Sidebar";
import Header from "./common/Header";
import PublishAd from "./Advertisers/components/PublishAd";
import Dashboard from "./Advertisers/components/Dashboard";
import AdDetails from "./Advertisers/components/ads/AdDetails";

import PublisherSidebar from "./Publishers/components/Sidebar";
import PublisherHeader from "./common/Header";
import PublisherPublishAd from "./Publishers/components/PublishAd";
import PublisherDashboard from "./Publishers/components/Dashboard";

export {
  Navbar,
  Login,
  Signup,
  ProtectedAdvertiser,
  ProtectedPublisher,
  Home,
  Header,
  Sidebar,
  PublishAd,
  Dashboard,
  PublisherDashboard,
  PublisherHeader,
  PublisherSidebar,
  PublisherPublishAd,
  AdDetails,
  Error
};
