import React from "react";

import WalletCards from "../components/WalletCards";
import WelcomeHero from "../components/WelcomeHero";


const Home = () => {
  return (
    <div className="home-container">
      <WelcomeHero />
      <WalletCards />
    </div>
  );
};

export default Home;
