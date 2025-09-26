import DcLogo from '../assets/img/dc-logo.png';

export default function AppHeader() {
  return (
    <header>
        <div className="container">
          <img src={DcLogo} alt="DC_Logo" />
        <nav>
          <ul>
            <li><a href="#">CHARACTERS</a></li>
            <li><a href="#">COMICS</a></li>
            <li><a href="#">MOVIES</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">GAMES</a></li>
            <li><a href="#">COLLECTIBLES</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">FANS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">SHOP</a></li>
          </ul>
        </nav>
        </div>

    </header>
  )}