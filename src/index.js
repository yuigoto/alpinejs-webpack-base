import Alpine from "alpinejs";
import { attributes, html } from "assets/data/test.md";
import "styles/main.scss";
import imageFile from "assets/img/import.jpg";

window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  Alpine.data("markdown", () => ({
    markdown: {
      attributes: JSON.stringify(attributes, null, 2), 
      html
    }
  }));

  Alpine.data("images", () => ({
    images: {
      loaded: "/img/hello.jpg",
      imported: imageFile
    }
  }));
});

Alpine.start();
