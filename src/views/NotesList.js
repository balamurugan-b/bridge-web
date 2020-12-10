import React, { Component } from 'react';
import { Container, Button, Row, Col } from 'reactstrap';

class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    var url = process.env.REACT_APP_API_HOST + "/adminStudy/all";
    if(this.props.type)
      url = url + "?status=" + this.props.type;
    if(this.props.sortBy)
      url = url + "&sortBy=" + this.props.sortBy;
    if(this.props.sortOrder)
      url = url + "&sortOrder=" + this.props.sortOrder;

    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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

  delete = (id, event) => {
    event.preventDefault();
    const url = process.env.REACT_APP_API_HOST + "/adminStudy/" + id;
    fetch(url, {
      method: 'DELETE',
    }).then(response => response.json())
      .then(
        (result) => {
          alert("Studymaterial deleted successfully");
          window.location.reload(false);
        },
        (error) => {
          alert("Couldn't delete");
        });
  }


  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Container>
            <Row>
              {items.map(item => (
                <Col sm={6}>
                  <h3><a href={"admin/detail/" + item.id}>{item.name} </a></h3>
                  <p>Creator: {item.creator.name}<br/>
                  Subject: {item.subject}<br/>
                  Course: {item.course}<br/>
                  College: {item.college}<br/>
                  Created on: {item.createdOn}<br/>
                  Modifed on: {item.modifiedOn}<br/>
                  Pages: {item.links ? item.links.length : 0}, Price : {item.price}<br/>
                  <button onClick={this.delete.bind(this, item.id)}>Delete Note</button> </p>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default NotesList;