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
          <a class="active" href="#fight" target= "_blank">
            Fight
          </a>
          <a href="#more" target= "_blank">More</a>
          <a href="#about" target= "_blank">About</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
