import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
        <div>
          
            <h1 className="header">Plumbing Services</h1>
<div className="nav">
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}> {/* step 12 */}
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>{/* step 13 */}
          About
        </Link>
        <Link to="/services" style={{ padding: 5 }}>
          Services
        </Link>
      </nav>
      </div>
        </div>
    )
};



export default Header;