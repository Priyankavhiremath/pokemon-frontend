import React from "react";

const Footer = () => {
  return (
    <footer className="btn-info  text-center text-lg-start">
      <div>
        <section class="mb12- text-center primarycolor">
          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/Pokemon"
            target= "_blank"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/Pokemon"
            target= "_blank"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/pokemon/"
            target= "_blank"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/company/pokemon/"
            target= "_blank"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://github.com/Priyankavhiremath/pokemon-frontend"
            target= "_blank"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>

          <a
            class="btn btn-outline-light btn-floating m-1"
            href="https://pokewiki.de/images/c/c3/Sugimori_054.png" 
            target= "_blank"
            role="button"
          >
            <i class="fab fa-discord"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3">© 2021 Copyright: PokeFive</div>
      <div>
        <img
          src="https://pokewiki.de/images/c/c3/Sugimori_054.png"
          width="40"
        />
      </div>
    </footer>
  );
};

export default Footer;
