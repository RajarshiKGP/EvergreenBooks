import './navbar.css'
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <body>
            <nav>
                <div className="navbar">
                    <div className="container nav-container">
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <div className="logo">
                            <h1><i class="fa-solid fa-book-journal-whills"></i> Evergreen Books</h1>
                        </div>
                        <div className="menu-items">
                            <li><Link to='/' style={{fontSize: "20px", fontFamily: "Arial", fontWeight: "bolder"}}>Home</Link></li>
                            <br /><br />
                            <li><Link to="/detective">Detective Stories</Link></li>
                            <li><Link to="/horror">Horror Stories</Link></li>
                            <li><Link to="/poem">Romantic Poems</Link></li>
                            <li><Link to="/romantic_stories">Romantic Stories</Link></li>
                            <li><Link to="/engineering">Text Books (Engineering)</Link></li>
                            <li><Link to="/commerce">Text Books (Commerce)</Link></li>
                            <li><Link to="/mythology">Mythology</Link></li>
                            <li><Link to="/science">Science</Link></li>
                            <li><Link to="/technology">Technology</Link></li>
                            <li><Link to="/art_literature">Art & Literature</Link></li>
                            <br /><br />
                            <li><SearchBar /></li>
                        </div>
                    </div>
                </div>
            </nav>
        </body>
    );
}

export default Navbar;