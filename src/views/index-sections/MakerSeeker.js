import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function MakerSeeker() {
  return (
    <>
      <div className="section section-examples" data-background-color="gray">
        <div className="space-50"></div>
        <Container className="promo-section">
          <Row>
            <Col sm="6">
              <h3 className="blue">Makers</h3>
              <p>If you are one of those make the best notes in class, or whose study materials are always in demand, then you could be a maker.<br />
Unlock the value of your notes by getting compensated every time someone downloads them on Bridge</p>
              <p><a href="https://play.google.com/store/apps/details?id=app.study.bridge">Download the app now</a></p>
            </Col>
            <Col sm="6">
              <h3 className="blue">Seekers</h3>
              <p>Looking for those right set of notes from your classmates for an upcoming exam? or solutions to textbook questions? Bridge is the place for you.<br />
On Bridge, you can discover and download all the study material you need, make your own study plan and start studying</p>
              <p><a href="">Download the app now</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MakerSeeker;
