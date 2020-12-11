import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img
          src="https://w7.pngwing.com/pngs/653/950/png-transparent-nelumbo-nucifera-buddhist-symbolism-buddhism-hatha-yoga-leaf-logo-monochrome-thumbnail.png"
          className={s.logo}
        ></img>
      </div>
      <div className={s.brend}>
        <h1>This is our header</h1>
      </div>
    </header>
  );
};

export default Header;
