//requiring dependencies/components
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

//creating class component Saved
class Saved extends Component {
  //setting initial state
  state = {
    books: []
  };

  //runs getSavedBooks on mount
  componentDidMount() {
    this.getSavedBooks();
  }

  //hits API to get list of saved books
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        //sets state to include results of API call
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //delete call on API 
  handleBookDelete = id => {
    //deletes selected book and then rerenders list of saved books
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    //rendering DOM
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {/* creating book component for each item in state.books array */}
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        //creating delete button for each book 
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
//export Saved component
export default Saved;
