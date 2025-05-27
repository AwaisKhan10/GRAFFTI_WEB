import React from "react";
import Navbar from "../components/first_page/Navbar";
import Own_a_peace from "../components/OwnApeace";
import Live_preview from "../components/first_page/LivePreview";
import How_works from "../components/first_page/HowWorks";
import Footers from "../components/first_page/Footer";

function Home2() {
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

export default Home2;
