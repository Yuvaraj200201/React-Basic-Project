import React from "react";

const Header = () => {
  return (
    <header
      className="h-52 md:h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://wallpapercave.com/wp/wp9314590.jpg")',
      }}
    >
      <h1 className="text-sm sm:text-3xl text-white bg-black/50 rounded-lg backdrop-blur-sm p-4">
        ❣<b>Welcome to My Website</b>
      </h1>
    </header>
  );
};

export default Header;
