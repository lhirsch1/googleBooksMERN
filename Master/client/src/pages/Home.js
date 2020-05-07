//require dependencies and components
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

//declaring class component Home
class Home extends Component {
  //creating initial state
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };
  //handling input change of form
  handleInputChange = event => {
    //destructuring name and value from event target
    const { name, value } = event.target;
    //creating key value pair and setting to state
    this.setState({
      [name]: value
    });
  };

  //get books function hits google books api and returns a list of books based on user query
  getBooks = () => {
    //takes query (q) from state
    API.getBooks(this.state.q)
      .then(res =>
        //populates state.books array with results
        this.setState({
          books: res.data
        })
      )
      //if no books are returned, state.books is empty and message is displayed to user
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  //form submit function
  handleFormSubmit = event => {
    event.preventDefault();
    //fires off getBooks function 
    this.getBooks();
  };

  //function for adding single book to list of saved books based on book id
  handleBookSave = id => {
    //finds book in array that matches selected id
    const book = this.state.books.find(book => book.id === id);

    //post route saves book to saved books list
    API.saveBook({
      //populating info for saved book from book object
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
    //calls getBooks function
    .then(() => this.getBooks());
  };

  //rendering DOM
  render() {
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
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              {/* passing in props to form component */}
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {/* creates book component for each book in the state.books array */}
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        // adds button to save book on each book component
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                //displays message if needed
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
//export Home page component
export default Home;
