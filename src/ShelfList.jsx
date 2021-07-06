import React from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'



class ShelfList extends React.Component{
    
   
    filtering = (shelf)=> {
      return  this.props.AllBooks.filter((book) => book.shelf === shelf);
}
    
    render(){
        return(
            
         <div className="list-books">
             
            <div className="list-books-content">
             <BookShelf ownedBooks={this.filtering("currentlyReading")} bookshelfTitle= 'currentlyReading' changingShelf={this.props.changingShelf}  />
            <BookShelf ownedBooks={this.filtering("wantToRead")} bookshelfTitle="wantToRead"   changingShelf={this.props.changingShelf} />
            <BookShelf ownedBooks={this.filtering("read")} bookshelfTitle = "Read"  changingShelf={this.props.changingShelf} />
           </div>
              <div className="open-search">
                 <Link to="/search">Add a book</Link>
             </div>
         </div>
        )
    }
}
 export default ShelfList ; 
