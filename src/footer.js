import "./footer.css";
import { red, blue } from "./button-styles";

const top = document.createElement("div");
const bottom = document.createElement("div");
const footer = document.createElement("footer");

top.innerText = "top of footer";
bottom.innerText = "Bottom of footer";
top.style = red;
bottom.style = blue;

footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
/*
  export { top, botton } 
*/
