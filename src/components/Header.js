import { Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          PokeFive
        </a>
        <img
            className="img-header"
            src="https://pokewiki.de/images/c/c3/Sugimori_054.png"
            width="50"
          />
        <div className="header-right">
          <Link to="/"> Fight</Link>
          <Link to="/leaderboard"> LeaderBoard</Link>
        </div>
      </div>
  
      <div className="MuiBox-root jss8 jss6">
        <div className="MuiBox-root jss9 jss7">
          <h1>One Love - please talk before fighting!</h1>
        </div>
      </div>
    </div>
  );
  };
  
  export default Header;