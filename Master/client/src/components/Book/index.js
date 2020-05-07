//require dependencies

import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

//functional component Book
//deconstructing props 
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    //constructing book ListItem
    <ListItem>
      {/* creating bootstrap structure */}
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          {/* constructing title/subtitle using prop information */}
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        {/* creating column to hold view button which will show book details */}
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            {/* button component from props */}
            <Button />
          </div>
        </Col>
      </Row>
      {/* new bootstrap row */}
      <Row>
        <Col size="md-6">
          {/* declaring author(s) name */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          {/* displaying book cover and creating alt attribute */}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          {/* creating element to hold book description */}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}
//exporting component
export default Book;
