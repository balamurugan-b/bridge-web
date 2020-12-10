import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function BuilderProgramDetails() {
  return (
    <>
      <div className="section section-examples" data-background-color="gray">
        <div className="space-50"></div>
        <Container className="promo-section">
          <Row>
            <div className="col">
              <h3 className="darkblue">Who?</h3>
              <ul>
                <li><strong className="green">Makers</strong> are the best note makers in the class.</li>
               <li>The ones whose notes are used by everyone else in the class to study and prepare for their exams.</li>
               <li>Any original creator, who has solutions to textbook problems, algorithms or circuit designs, etc and willing to share it with fellow students are <strong className="green">Makers</strong></li>
              </ul>
            </div>
            <div className="col">
              <h3 className="darkblue">What?</h3>
              <ul>
                <li>We need more Makers like you to use the platform and publish their study materials</li>
                <li>You know it best to find the right Makers</li>
                <li>So, start onboarding Makers from other departments, other sections, other years, etc onto bridge</li>
              </ul>
            </div>
            <div className="col">
              <h3 className="darkblue">How?</h3>
              <ul>
                <li>Briefly explain the idea and share the app link, https://play.google.com/store/apps/details?id=app.study.bridge with others.</li>
                <li>Once they install and publish atleast 3 notes, your Bridge wallet will be credited Rs 50 for every referral</li>
                <li>We will do a UPI transfer to your account, once your wallet balance reaches Rs 200</li>
                <li>This is a limited time promotion program. So, start sharing now...</li>
              </ul>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BuilderProgramDetails;

