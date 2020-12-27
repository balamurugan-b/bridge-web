import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    NavItem,
    NavLink,
    Nav
} from "reactstrap";

function NavItems(props) {
    return (
        <>
            <Nav navbar>
                {"admin" == props.type ? (
                    <NavItem>
                        <NavLink href="/admin">
                            Admin Home
                        </NavLink>
                    </NavItem>
                ) : null}
                {/* <NavItem>
                    <NavLink href="/guidelines">
                        Guidelines
              </NavLink>
                </NavItem> */}
                <NavItem>
                    <NavLink href="/bridgeBuilder">Bridge Builder Program</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/downloadCampaign">Download Campaign</NavLink>
                </NavItem>
            </Nav>
        </>
    );
}

export default NavItems;







