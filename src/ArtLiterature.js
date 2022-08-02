import Books from './data/db.json';
import Pic1 from './Books/TMP.jpg';
import Pic2 from './Books/G.jpg';
import './BookCard.css';

const ArtLiterature = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex" style={{ justifyContent: "center", position: "absolute", top: "30%" }}>
                <div className="col">
                    <div className="card shadow-sm">
                        <br />
                        <img data-bs-toggle="modal" data-bs-target="#book1" src={Pic1} width="39.7%" height="56.4%" alt="" style={{ alignSelf: "center" }} />

                        <div className="card-body">
                            <div className="card-text">
                                {
                                    Books.filter(book => {
                                        if (book.id === 19)
                                            return book

                                    }).map((book, index) => (
                                        <div className="details" key={index}>
                                            <h3 data-bs-toggle="modal" data-bs-target="#book1" style={{ textAlign: "center" }}>{book.Name}</h3>
                                            <p style={{ textAlign: "center" }}>{book.Author}</p>
                                            <p style={{ textAlign: "center", color: "crimson", fontWeight: 'bold' }}><i class="fa-solid fa-indian-rupee-sign"></i> {book.Price}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <div className="Modals">
                        <div className="modal fade" id="book1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ position: "absolute" }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {
                                        Books.filter(book => {
                                            if (book.id === 19)
                                                return book

                                        }).map((book, index) => (
                                            <div className="details" key={index}>
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{book.Genre}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <div className="modal-body">
                                                    <div className="Book1">
                                                        <img src={Pic1} alt="" width="39.7%" height="56.4%" />
                                                        <div className="description">
                                                            <h2>{book.Name}</h2>
                                                            <small>Product ID: {book.id}</small>
                                                            <h5>Author: {book.Author}</h5>
                                                            <h6>Price: Rs. {book.Price}</h6>
                                                            <p>Date of Printing: {book.Date_of_Printing}</p>
                                                        </div>
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
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <br />
                        <img data-bs-toggle="modal" data-bs-target="#book2" src={Pic2} width="42%" height="50%" alt="" style={{ alignSelf: "center" }} />

                        <div className="card-body">
                            <div className="card-text">
                                {
                                    Books.filter(book => {
                                        if (book.id === 20)
                                            return book

                                    }).map((book, index) => (
                                        <div className="details" key={index}>
                                            <h3 data-bs-toggle="modal" data-bs-target="#book2" style={{ textAlign: "center" }}>{book.Name}</h3>
                                            <p style={{ textAlign: "center" }}>{book.Author}</p>
                                            <p style={{ textAlign: "center", color: "crimson", fontWeight: 'bold' }}><i class="fa-solid fa-indian-rupee-sign"></i> {book.Price}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>


                    <div className="Modals">
                        <div className="modal fade" id="book2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ position: "absolute" }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    {
                                        Books.filter(book => {
                                            if (book.id === 20)
                                                return book

                                        }).map((book, index) => (
                                            <div className="details" key={index}>
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">{book.Genre}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>

                                                <div className="modal-body">
                                                    <div className="Book2">
                                                        <img src={Pic2} alt="" width="42%" height="50%" />
                                                        <br /><br />
                                                        <div className="description">
                                                            <h2>{book.Name}</h2>
                                                            <small>Product ID: {book.id}</small>
                                                            <h5>Author: {book.Author}</h5>
                                                            <h6>Price: Rs. {book.Price}</h6>
                                                            <p>Date of Printing: {book.Date_of_Printing}</p>
                                                        </div>
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
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ArtLiterature;