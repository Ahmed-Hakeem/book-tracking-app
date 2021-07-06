import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {

    render() {
        const {bookshelfTitle  ,ownedBooks} = this.props
        let changingShelf = this.props.changingShelf ;
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                   
                    {ownedBooks
                        .map((book) => {
                            return <li key={book.id}>
                                <Book book={book} changingShelf={changingShelf}/>
                            </li>
                        })
                      }
                </ol>
            </div>
        </div>
        )
    }



}

export default BookShelf;