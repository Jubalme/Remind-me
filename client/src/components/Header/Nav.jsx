import { Link } from "react-router-dom";
import Logo from "./Logo";
import Webname from "./Webname";

function Nav() {
  return (
    <div>
      <Logo />
      <Webname />
      <nav>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calender"> Calender</Link>
          </li>
          <li>
            <Link to="DailyTasks"> Daily Tasks</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Memo">Memo</Link>
          </li>
          <li>
            <Link to="/Finished"> RecentlyFinishedTasks</Link>
          </li>
          <li>
            <Link to="/Weekly">Weekly</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
