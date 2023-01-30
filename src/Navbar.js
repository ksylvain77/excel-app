import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Excel-sior!</h1>
      <div className="links">
        <Link to="/">Search</Link>
        <Link to="/create">New Search Term List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
