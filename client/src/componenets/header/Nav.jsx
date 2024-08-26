import {Link} from "react-router-dom"
import Logo from "./Logo"
import Webname from "./Webname"
function Nav() {
  return (
   <div >
    <div>
    <Logo /> 
    <Webname /> 
    </div>
    <div  >

    
        <ul className='flex space-x-4'>
            <li><Link to="/" > <h1 className='text-blue-300 hover:text-blue-700'> Home</h1> </Link></li>
            <li><Link to="/About"> <h1 className='text-blue-300 hover:text-blue-700'>About</h1>
            
            </Link></li>
            
      
        </ul>
        </div>
   </div>
  )
}

export default Nav