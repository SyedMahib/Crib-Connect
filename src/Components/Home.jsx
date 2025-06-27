import Banner from "./Banner";
import FeaturedListings from "./FeaturedListings";
import { AuthContext } from "../Provider/AuthProvider";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import QuickStates from "./QuickStates";
import WhyTrustUs from "./WhyTrustUs";
import JoinUs from "./JoinUs";

const Home = () => {

  return (
    <div className="min-h-[calc(100vh-323px)]">
      <header>
        <Banner></Banner>
      </header>
      <main>
        <HowItWorks></HowItWorks>
        <FeaturedListings></FeaturedListings>
        <QuickStates></QuickStates>
        <WhyTrustUs></WhyTrustUs>
        <Testimonials></Testimonials>
        <JoinUs></JoinUs>
      </main>
    </div>
  );
};

export default Home;
