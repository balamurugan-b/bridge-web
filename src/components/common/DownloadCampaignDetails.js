import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function BuilderProgramDetails() {
  return (
    <>
      <div className="section section-examples" data-background-color="gray">
        <div className="space-50"></div>
        <Container className="promo-section">
          <Row>
            <Col sm="12">
              <h3 className="darkblue">What?</h3>
              <ul>
                <li>You <strong>"The Makers"</strong> are our partners in building this platform</li>
                <li>To appreciate your efforts in this partnership, we are launching <strong>"Community Building Program"</strong></li>
                <li>All you have to do is... <br/>
                 - continue uploading all your notes (current semester and past semesters) <br/>
                 - get your classmates to download them <br/>
                and get rewarded</li>
              </ul>
            </Col>
            <Col sm="12">
              <h3 className="darkblue">How?</h3>
              <ul>
                <li>Upload all your notes on the Bridge app</li>
                <li>Bridge team will review and approve your notes</li>
                <li>Meanwhile, share the app with all your classmates</li>
                <li><strong className="green"> https://play.google.com/store/apps/details?id=app.study.bridge </strong><br/>
                Please note, that the app will be accessible only via the above link. It cannot be discovered from Playstore yet</li>
                <li>Every time a unique user downloads your material, you will be credited Rs 20 in your Bridge wallet</li>
                <li>Every time you accumulate Rs 200 (when your material has been downloaded 10 times), we will initiate a transfer to your account (via UPI)</li>
                <li>To qualify for the money transfer, <br/>
                 - There should be at least 10 approved materials from you<br/>
                 - There should be 10 unique users downloaded your materials</li>
                <li>There is no upper limit on how much you can earn via this program</li>
                <li>This is a limited time program</li>
                <li>So, go ahead and upload all your notes which you have worked hard and created. And get your notes to work harder for you!!</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BuilderProgramDetails;

