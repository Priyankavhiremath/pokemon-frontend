import { Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <div class="header">
        <img
          class="img-header"
          src="https://pokewiki.de/images/c/c3/Sugimori_054.png"
          width="40"
        />
        <a href="#default" class="logo">
          PokeFive
        </a>
        <div class="header-right">
          <Link to="/"> Fight</Link>
          <Link to="/leaderboard"> LeaderBoard</Link>
        </div>
      </div>
  
      <div class="MuiBox-root jss8 jss6">
        <div class="MuiBox-root jss9 jss7">
          <h1>One Love - please talk before fighting!</h1>
        </div>
      </div>
    </div>
  );
  };
  
  export default Header;