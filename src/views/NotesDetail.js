import React, { Component, useState } from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import { withRouter } from "react-router";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import moment from 'moment';

import FileUpload from 'components/FileUpload';

import DefaultNavbar from "components/Navbars/DefaultNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function ImgSlider(props) {
  if (props.images && props.images.length > 0) {
    console.log(props.images)
    return (
      <div>
        <AliceCarousel>
          {props.images.map(item => (
            <img src={item.fullUrl} className="sliderimg" />
          ))}
        </AliceCarousel>
      </div>
    );
  }
  else {
    return null;
  }

}

function Relations(props) {
  if (props.value && props.value.length > 0) {
    console.log(props.value)
    return (
      <div>
          <p class="bold">Action History</p>
          {props.value.map(item => (
            <p>Relation: <Green value={item.relationship}/>, Comments: {item.comments}, By: <Bold value={"ADMIN" == item.userId ? "ADMIN" : item.user.name}/>, At: <Green value={moment(item.modifiedAt).format("lll")}/></p>
          ))}
      </div>
    );
  }
  else {
    return null;
  }

}

function Bold(props) {
  return (<span class="bold">{props.value}</span>);
}

function Green(props) {
  return (<span class="green2">{props.value}</span>);
}

function Orange(props) {
  return (<span class="orange">{props.value}</span>);
}



class NotesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: null,
      studyMaterialId: null,
      comments: null
    };
    this.reloadDetail = this.reloadDetail.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const url = process.env.REACT_APP_API_HOST + "/adminStudy/" + id;
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result,
            studyMaterialId: id
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  reloadDetail() {
    console.log("Reloading...");
    this.setState({ isLoaded: true });
  }

  addComment = (event) => {
    console.log(event.target.value);
    this.setState({ comments: event.target.value })
  }

  approval = (id, status, event) => {
    var url = process.env.REACT_APP_API_HOST + "/adminStudy/approval?id=" + id;
    if (status)
      url = url + "&status=" + status;
    if (this.state.comments)
      url = url + "&comments=" + this.state.comments;

    console.log(url);

    fetch(url, {
      method: 'GET',
    }).then(response => response.json())
      .then(
        (result) => {
          if (result) {
            const msg = "Success - study material succesfully " + status;
            alert(msg);
            window.location.reload(false);
          } else {
            const msg = "Failed - study material status cannot be changed to " + status;
            alert(msg);
          }
        },
        (error) => {
          alert("Couldn't delete");
        });
  }




  render() {
    const { error, isLoaded, item, studyMaterialId } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <DefaultNavbar type="admin"></DefaultNavbar>
          <div className="wrapper">
            <div className="section section-about-us">
              <Container>
                <Row>
                  <Col sm={9}>
                    <h3>{item.name}</h3>
                    <p>Description: {item.description}<br />
                    Subject: <Bold value={item.subject}></Bold><br />
                    Semester: <Bold value={item.semester}></Bold>,  Pages: <Bold value={item.links ? item.links.length : 0}></Bold><br />
                    Creator: <Bold value={item.creator.name}></Bold>, Professor: <Bold value={item.professor}/><br />
                    Course: <Bold value={item.course}/><br />
                    College: <Bold value={item.college}/><br />
                    University: <Bold value={item.university}/> <br />
                    Created : <Green value={moment(item.createdOn).format("lll")}/>,
                    Last Modifed : <Green value={moment(item.createdOn).format("lll")}/><br />
                    Value: <Orange value={item.value}/>, Price : <Orange value={item.price}/></p>
                    <h5>Status: <Bold value={item.status}/></h5>
                  </Col>
                  <Col sm={3}>
                    <FileUpload studyMaterialId={studyMaterialId} reloadDetail={this.reloadDetail}></FileUpload>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Relations value={item.relationships}></Relations>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <p><button onClick={this.approval.bind(this, item.id, "approved")}>Approve</button> </p>
                  </Col>
                  <Col sm={6}>
                    <p>
                      Reject comments - <input type="text" value={this.state.comments} onChange={this.addComment} name="comments" ></input>
                      <button onClick={this.approval.bind(this, item.id, "resubmit")}>Reject</button>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ImgSlider images={item.links}></ImgSlider>
                  </Col>
                </Row>
              </Container>
            </div>
            <DarkFooter />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(NotesDetail);