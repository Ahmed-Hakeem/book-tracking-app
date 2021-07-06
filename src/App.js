import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ShelfList from "./ShelfList";
import SearchBooks from "./Search";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  //remove the changed book from the state , then add it with its new shelf
  changeShelf = (book, shelf) => {
    this.setState((state) => ({
      books: state.books.filter((bk) => bk.id !== book.id).concat([book]),
    }));
    book.shelf = shelf;

    //update server data
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <ShelfList
                AllBooks={this.state.books}
                changingShelf={this.changeShelf}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />

        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              changingShelf={this.changeShelf}
              history={history}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
