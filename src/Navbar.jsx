import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#111", color: "#fff" }}>
      
      <h2>Paras</h2>

      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/about" style={{ color: "white" }}>About</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
      
    </nav>
  );
}

export default Navbar;