import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends React.Component {
  state = {
    searchResults: [],
  };

  //Keeps track of the input value if user didnt write any thing there is no results
  search = (e) => {
    const query = e.target.value;
    if (!query) {
      this.setState({ searchResults: [] });
      return;
    }

    //then if user's input doesn't match any thing in the api there is no result also
    BooksAPI.search(query).then((searchResults) => {
      if (!searchResults || searchResults.error) {
        this.setState({ searchResults: [] });
        return;
      }

      searchResults = searchResults.map((book) => {
        const IsBookOnShelf = this.props.books.find((bk) => bk.id === book.id);
        book.shelf = IsBookOnShelf ? IsBookOnShelf.shelf : "none";
        return book;
      });

      this.setState({ searchResults });
    });
  };

  render() {
    // const changingShelf = this.props.changingShelf;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title "
              onChange={this.search}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults &&
              this.state.searchResults.map((book, index) => (
                <li key={book.id + index}>
                  <Book book={book} changingShelf={this.props.changingShelf} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
