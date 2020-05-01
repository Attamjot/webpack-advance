import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import makeImage from "./image";
import imageUrl from "./webpack-logo.jpg";

const image = makeImage(imageUrl);

document.body.appendChild(makeButton("my first button"));
document.body.appendChild(image);
document.body.appendChild(footer);

console.log(nav());
