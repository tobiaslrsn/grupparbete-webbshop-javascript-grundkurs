import { productsToPage } from "./products";
import { Article } from "./models/product-objects";

window.onload = function () {
  /*   let poo = localStorage.getItem("product001");
  let hey: string = localStorage.getItem("product002");
 */
  let productArtist: HTMLParagraphElement = document.createElement("p");
  productArtist.className = "artist";
  productArtist.innerHTML = localStorage.getItem("product005"); //this.album

  document.body.appendChild(productArtist);
  console.log(productArtist);
};
