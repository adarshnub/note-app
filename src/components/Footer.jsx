import React from "react";
const currentyear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>V Adarsh &copy; {currentyear}</p>
    </footer>
  );
}

export default Footer;
