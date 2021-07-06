import React from 'react'

class Book extends React.Component {
    //every time user changes the bookshelf of a book then catch his input value 
    //then call changingShelf func which instantly update app state and server data with book's new data
    changingShelfCallBack=(event)=>{
        const shelf = event.target.value ;
       
        this.props.changingShelf(this.props.book , shelf)  
    }
    validate= (prop)=>(
        prop?prop:""
    )
    render() {
        const{book} = this.props; 
        return (
            <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${this.validate(book.imageLinks).thumbnail}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}/>
                <div className="book-shelf-changer">
                    <select onChange={this.changingShelfCallBack} value={book.shelf} >
                        <option value="none" disabled>Move to...</option>
                        <option className="options"  value="currentlyReading">Currently Reading</option>
                        <option className="options" value="wantToRead">Want to Read</option>
                        <option className="options" value="read">Read</option>
                        <option className="options" value="none">None</option>
                    </select>
                 </div>
             </div>
            <div className="book-title">{this.validate(book.title)}</div>
            <div className="book-authors">{book.authors?book.authors.join(", "): "UNKNOWN"}</div>
            <div  className="publish">publisher : {!book.publisher? book.publisher: "UNKNOWN" }</div>
            <div  className="publish">Date : {this.validate(book.publishedDate)}</div>
        </div>


        )
    }

}

export default Book
