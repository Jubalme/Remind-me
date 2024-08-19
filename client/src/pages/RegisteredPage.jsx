import Nav2 from "../componenets/header/Nav2"
import {Link } from "react-router-dom"

function RegisteredPage() {
  return (
    <div>
         <nav>
        <ul>
            <li><Link to="/" > Home </Link></li>
            <li><Link to="/About"> About</Link></li>
            
      
        </ul>
    </nav>
   <Nav2 />

 

    </div>
  )
}

export default RegisteredPage