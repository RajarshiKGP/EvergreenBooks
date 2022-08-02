import Data from "./data/db.json"
import './SearchBar.css'
import './BookCard.css';
import { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("")
    return (
        <div className="Container">
            <input placeholder="  Search Here..." onChange={event => setQuery(event.target.value)} />
            <br />
            <div>
                <div className="Contents">
                    {
                        Data.filter(book => {
                            if (query === '') {
                                return book;
                            } else if (book.Name.toLowerCase().includes(query.toLowerCase())) {
                                return book;
                            } else if (book.Author.toLowerCase().includes(query.toLowerCase())) {
                                return book;
                            } else if (book.Genre.toLowerCase().includes(query.toLowerCase())) {
                                return book;
                            }
                        }).map((book, index) => (
                            <div className="box" key={index}>
                                {/* <p data-bs-toggle="modal" data-bs-target="#book" id="name">{book.Name}</p> */}
                                <p id="name">{book.Name}</p>
                                <p id="author">--- {book.Author}</p>
                            </div>
                        ))
                    }

                    {/* <div className="Modals">
                        <div className="modal fade" id="book" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ position: "absolute", top: "40rem" }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {
                                        Data.filter(book => {
                                            if (query === '') {
                                                return book;
                                            } else if (book.Name.toLowerCase().includes(query.toLowerCase())) {
                                                return book;
                                            } else if (book.Author.toLowerCase().includes(query.toLowerCase())) {
                                                return book;
                                            } else if (book.Genre.toLowerCase().includes(query.toLowerCase())) {
                                                return book;
                                            }
                                        }).map((book, index) => (
                                            <div className="details" key={index}>
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{book.Genre}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <div className="modal-body">
                                                    <img src={require(`${book.image}`)} alt="" width="61%" height="61%" />
                                                    <div className="description">
                                                        <h2>{book.Name}</h2>
                                                        <small>Product ID: {book.id}</small>
                                                        <h5>Author: {book.Author}</h5>
                                                        <h6>Price: Rs. {book.Price}</h6>
                                                        <p>Date of Printing: {book.Date_of_Printing}</p>
                                                    </div>
                                                </div>

                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Add to Cart</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;