/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="/privacy">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          A product from <strong>Hyper Rabbit Mobility Private Limited</strong>. All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
