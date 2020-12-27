import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DownloadCampaignIntro from "components/common/DownloadCampaignIntro.js";
import DownloadCampaignDetails from "components/common/DownloadCampaignDetails.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import MakerSeeker from "./index-sections/MakerSeeker.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <DownloadCampaignIntro />
        <div className="main">
          <DownloadCampaignDetails />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
