import bg1 from './bg1.jpg'
import bg2 from './bg2.jpg'
import bg3 from './bg3.jpg'
import card1 from './cards/card1.jpg'
import card2 from './cards/card2.jpg'
import card3 from './cards/card3.jpg'
import card4 from './cards/card4.jpg'
import card5 from './cards/card5.jpg'
import card6 from './cards/card6.jpg'
import card7 from './cards/card7.jpg'
import card8 from './cards/card8.jpg'
import card9 from './cards/card9.jpg'
import card10 from './cards/card10.jpg'

import './cards.css'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bg1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{ fontFamily: "Brush Script MT", fontSize: "80px" }}>Diwali Sale</h5>
                            <p>30% Discount on Every Book 🎉🎉🎊🎊</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bg2} className="d-block w-100" alt="..." height='475px' width='1600px' />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{ fontFamily: "Brush Script MT", fontSize: "80px", color: "#2f0cdf" }}>Festive Season Sale</h5>
                            <p style={{ color: "rgb(3, 220, 28)", fontSize: "20px", fontWeight: "bolder" }}>50% Discount on Every Mythology Book 🥳🥳🥳</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bg3} className="d-block w-100" alt="..." height='475px' width='1600px' />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 style={{ fontFamily: "Brush Script MT", fontSize: "80px", color: "rgb(0, 255, 76)" }}>E-Book Sale</h5>
                            <p>25% Discount on Every E-Book 🧑‍💻👩‍💻📱</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container my-5">
                <p className="cls">Browse Genres</p>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card1} alt="" />
                                    <Link to="/detective" style={{textDecoration: 'none'}}>Detective Stories</Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card2} alt="" />
                                    <Link to="/horror" style={{textDecoration: 'none'}}>Horror Stories</Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card3} alt="" />
                                    <Link to="/poem" style={{textDecoration: 'none'}}>Romantic Poems</Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card4} alt="" />
                                    <Link to="/romantic_stories" style={{textDecoration: 'none'}}>Romantic Stories</Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card5} alt="" />
                                    <Link to="/engineering" style={{textDecoration: 'none'}}>Text Books (Engineering)</Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card6} alt="" />
                                    <Link to="/commerce" style={{textDecoration: 'none'}}>Text Books (Commerce)</Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card7} alt="" />
                                    <Link to="/mythology" style={{textDecoration: 'none'}}>Mythology</Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card8} alt="" />
                                    <Link to="/science" style={{textDecoration: 'none'}}>Science</Link>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card9} alt="" />
                                    <Link to="/technology" style={{textDecoration: 'none'}}>Technology</Link>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" src= {card10} alt="" />
                                    <Link to="/art_literature" style={{textDecoration: 'none'}}>Art & Literature</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;