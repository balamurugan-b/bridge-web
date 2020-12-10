/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// core components

function BridgeBuilderIntro() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h2 className="promo-title">Bridge Builder Program</h2>
            <h3>Bring more <strong>Makers</strong> to build the Bridge...<br/>and get rewarded !!!</h3>
            <h3 className="promo-subtitle"><strong>"Rs 50</strong> for every Maker you bring"</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BridgeBuilderIntro;
