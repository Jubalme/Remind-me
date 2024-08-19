import Nav from "../componenets/header/Nav"
import { Link } from "react-router-dom"

function Home() {
  return (
   <div>
<Nav />
<button>
<Link to="/SignUp"> 
<h1 className='text-blue-300 hover:text-blue-700'>Register here</h1>
 </Link>
</button>
   </div>
  )
}

export default Home