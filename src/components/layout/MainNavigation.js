import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Test module header!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
          <li>
            <Link to="/todo">To do</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
