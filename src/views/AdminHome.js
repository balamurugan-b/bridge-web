import React from "react";

import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import NotesList from './NotesList'

function AdminHome(props) {
  return (
    <div>
      <DefaultNavbar type="admin"></DefaultNavbar>
      <div className="wrapper">
        <div className="section section-about-us">
          <NotesList type={props.type} sortBy={props.sortBy} sortOrder={props.sortOrder}></NotesList>
          </div>
        <DarkFooter />
      </div>
    </div>
  );
}

export default AdminHome;