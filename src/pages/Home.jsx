import React from "react";
import Navbar from "../components/Navbar";
import Own_a_peace from "../components/OwnApeace";
import Live_preview from "../components/LivePreview";
import How_works from "../components/HowWorks";
import Footers from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Own_a_peace />
      <Live_preview />
      <How_works />
      <Footers />

    </div>
  );
}

export default Home;
